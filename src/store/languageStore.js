import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

import es from "../i18n/es";
import en from "../i18n/en";

//import {AsyncStorage} from "";

const LANGUAGE_KEY = "app_language";
const translations = { es, en };

export const useLanguageStore = create((set, get) => ({
  language: "es",
  t: es, // traducciones activas

  // Carga el idioma guardado al arrancar la app
  loadLanguage: async () => {
    try {
      const saved = await AsyncStorage.getItem(LANGUAGE_KEY);

      if (saved && translations[saved]) {
        set({ language: saved, t: translations[saved] });
      }
    } catch (err) {
      console.error("[languageStore] loadLanguage:", err.message);
    }
  },

  // Cambia el idioma y lo persiste
  setLanguage: async (lang) => {
    if (!translations[lang]) return; // idioma no soportado

    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, lang);
      set({ language: lang, t: translations[lang] });
    } catch (err) {
      console.error("[languageStore] setLanguage:", err.message);
    }
  },
}));
