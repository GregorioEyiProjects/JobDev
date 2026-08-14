// src/hooks/useTranslation.js
import { useLanguageStore } from "../store/languageStore";

// Devuelve { t, language, setLanguage } — misma firma que react-i18next
// para que sea fácil migrar en el futuro si la app crece
export function useTranslation() {
  const t = useLanguageStore((state) => state.t);
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  return { t, language, setLanguage };
}
