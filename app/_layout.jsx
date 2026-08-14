//app/_layout.jsx

/* 
# Root layout
Este archivo tiene una responsabilidad única: decidir a dónde va el usuario al arrancar. 
No renderiza ninguna UI visible — es pura lógica de enrutamiento.
*/
import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import { supabase } from "../src/services/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

import { colors } from "../src/theme/index";

import { useSavedStore } from "../src/store/savedStore";

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const loadSaved = useSavedStore((state) => state.loadSaved);
  const clearSaved = useSavedStore((state) => state.clearSaved);

  useEffect(() => {
    if (Platform.OS !== "android") return;

    NavigationBar.setStyle("light");
  }, []);

  useEffect(() => {
    checkInitialRoute();

    // Escucha cambios de sesión en tiempo real
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        loadSaved(); // Cargar los trabajos guardados al iniciar sesión
        router.replace("/(tabs)");
      }
      if (event === "SIGNED_OUT") {
        clearSaved();
        router.replace("/(auth)/login");
      }
    });

    // Limpia el listener cuando el componente se desmonta
    return () => subscription.unsubscribe();
  }, []);

  async function checkInitialRoute() {
    //console.log("Checking initial route...");
    //await AsyncStorage.clear(); // Solo para testing, borra el onboarding cada vez

    try {
      // Pregunta 1: ¿Ya vio el onboarding?
      const hasSeenOnboarding = await AsyncStorage.getItem("hasSeenOnboarding");
      if (!hasSeenOnboarding) {
        router.replace("/(auth)/onboarding");
        return;
      }

      // Pregunta 2: ¿Tiene sesión activa?
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        await loadSaved();
        router.replace("/(tabs)");
      } else {
        router.replace("/(auth)/login");
      }
    } catch (error) {
      console.error("Error checking initial route:", error);
      router.replace("/(auth)/login");
    } finally {
      setIsReady(true);
    }
  }

  // Mientras decidimos la ruta, no renderizamos nada
  // Esto evita el "flash" de una pantalla antes de redirigir
  if (!isReady) return null;
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          //contentStyle: { backgroundColor: colors.background.base },
        }}
      />
    </SafeAreaProvider>
  );
}
