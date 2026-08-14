// src/design-system/typography.js

export const typography = {
  // ── Familias ──────────────────────────────────────────
  fontFamily: {
    sans: undefined, // System default: SF Pro en iOS, Roboto en Android (En React Native, undefined como fontFamily usa la fuente del sistema)
    mono: "monospace", // Para logos de empresa con iniciales (Stripe → "S")
  },

  // ── Pesos ─────────────────────────────────────────────
  fontWeight: {
    regular: "400", // body, captions, texto corriente
    medium: "500", // labels, subtítulos, énfasis suave
    bold: "600", // títulos, CTAs, tags
  },

  // ── Escala de tamaños — nombrada por ROL, no por tamaño ──
  fontSize: {
    displayLg: 28, // Título principal de pantalla (HomeScreen greeting)
    displaySm: 22, // Título secundario de pantalla (DetailScreen job title)
    title: 18, // Sección dentro de una pantalla ("Destacadas", "Sobre el rol")
    body: 15, // Texto de lectura, descripciones de trabajo
    label: 13, // Datos de una card (salario, empresa, fecha)
    caption: 11, // Timestamps, contadores, metadata
    tag: 11, // Chips de filtro y badges de tecnología
  },

  // ── Altura de línea — por rol ──────────────────────────
  lineHeight: {
    displayLg: 1.1,
    displaySm: 1.2,
    title: 1.3,
    body: 1.6, // más aire para legibilidad
    label: 1.4,
    caption: 1.3,
    tag: 1.0, // dentro de un chip, el lineHeight no importa
  },

  // ── Tracking (letter-spacing) ──────────────────────────
  letterSpacing: {
    normal: 0,
    wide: 0.5, // solo para tags en uppercase
  },
};
