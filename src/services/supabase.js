// Cliente Supabase + helpers

import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";

// SecureStore en vez de AsyncStorage para las claves de sesión —
// AsyncStorage no está cifrado, SecureStore sí. Para datos de auth, importa.
/* Un adaptador de storage sirve para guardar la sesión del usuario de forma segura en el dispositivo */
const ExpoSecureStoreAdapter = {
  getItem: async (key) => {
    return await SecureStore.getItemAsync(key);
  },
  setItem: async (key, value) => {
    return await SecureStore.setItemAsync(key, value);
  },
  removeItem: async (key) => {
    return await SecureStore.deleteItemAsync(key);
  },
};

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      storage: ExpoSecureStoreAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);
