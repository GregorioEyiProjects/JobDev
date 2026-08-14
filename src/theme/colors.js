// src/theme/colors.js

const palette = {
  // Neutros oscuros (base de la UI)
  neutral: {
    950: "#0F1117", // fondo más profundo
    900: "#1C1F2E", // superficies (cards)
    800: "#2D3148", // bordes, separadores
    700: "#374151", // iconos inactivos, placeholders
    500: "#6B7280", // texto secundario
    300: "#9CA3AF", // texto terciario / hints
    100: "#F9FAFB", // texto principal sobre dark
  },

  // Verde menta — el único acento de la app
  mint: {
    300: "#6EE7B7", // acento principal, chips activos, CTAs
    400: "#34D399", // hover state del acento
    900: "#064E3B", // texto sobre fondo mint claro
    950: "#022c22", // badge bg cuando el acento es el bg
  },

  // Azul — solo para tags informativos
  blue: {
    400: "#60A5FA",
    900: "#1E3A5F",
  },

  // Violeta — para nivel/seniority
  violet: {
    400: "#A78BFA",
    900: "#4A1942",
  },

  // Amarillo — para modalidad híbrida
  amber: {
    400: "#FCD34D",
    900: "#2D1B00",
  },

  // Rojo — solo para errores/destructivo
  danger: {
    400: "#F87171",
    900: "#450a0a",
  },
};

export const colors = {
  background: {
    base: palette.neutral[950], // pantalla, detrás de todo
    surface: palette.neutral[900], // cards, sheets, modals
    elevated: palette.neutral[800], // elementos sobre surface (inputs, chips inactivos)
    border: palette.neutral[800], // líneas divisorias
  },

  // Texto — tres niveles de importancia
  text: {
    primary: palette.neutral[100], // títulos, datos importantes
    secondary: palette.neutral[500], // labels, empresa, ubicación
    tertiary: palette.neutral[300], // hints, placeholders, timestamps
    disabled: palette.neutral[700], // iconos inactivos
    inverse: palette.neutral[950], // texto sobre fondo mint (botones, chips activos)
  },

  // Acento — el verde menta
  accent: {
    default: palette.mint[300], // chips activos, precios, CTAs, nav activo
    hover: palette.mint[400], // estado presionado
    subtle: palette.mint[950], // badge background cuando el texto es mint
  },

  // Tags de trabajo — cada modalidad/tipo tiene su par bg+text
  tag: {
    remote: {
      background: palette.blue[900],
      text: palette.blue[400],
    },
    onsite: {
      background: palette.neutral[800],
      text: palette.neutral[300],
    },
    hybrid: {
      background: palette.amber[900],
      text: palette.amber[400],
    },
    fulltime: {
      background: palette.mint[950],
      text: palette.mint[300],
    },
    senior: {
      background: palette.violet[900],
      text: palette.violet[400],
    },
    junior: {
      background: palette.blue[900],
      text: palette.blue[400],
    },
  },

  // Estados del sistema
  status: {
    error: {
      background: palette.danger[900],
      text: palette.danger[400],
    },
    warning: {
      text: palette.amber[400], // '#FCD34D'
    },
    saved: palette.mint[300], // corazón guardado
    unsaved: palette.neutral[700], // corazón vacío
  },
};
