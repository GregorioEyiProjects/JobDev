const scale = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16, // ← base, el más usado
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 48,
  "5xl": 64,
};

// ── Tokens semánticos de espaciado ────────────────────────
export const spacing = {
  // Padding interno de componentes
  component: {
    xs: scale.xs, // 4  — gap entre icono y texto dentro de un chip
    sm: scale.sm, // 8  — padding vertical de un chip/badge
    md: scale.md, // 12 — padding interno de elementos compactos
    lg: scale.lg, // 16 — padding interno de cards (horizontal)
    xl: scale.xl, // 20 — padding interno de cards (vertical top/bottom)
  },

  // Gaps entre elementos en una lista o grid
  gap: {
    xs: scale.xs, // 4  — entre badges dentro de una card
    sm: scale.sm, // 8  — entre chips de filtro
    md: scale.md, // 12 — entre cards en la FlatList
    lg: scale.lg, // 16 — entre secciones dentro de una pantalla
  },

  screen: {
    horizontal: scale.lg, // 16 — margen izquierdo/derecho
    vertical: scale.xl, // 20 — padding top de contenido
    bottomTab: scale["4xl"], // 48 — espacio bajo el último elemento (encima del tab bar)
    topTab: scale.xl * 2, // 40 — espacio bajo el último elemento (encima del tab bar)
  },

  // Tamaños fijos de componentes UI
  component_size: {
    tabBar: 56, // altura del bottom tab bar
    searchBar: 44, // altura del input de búsqueda (mínimo táctil Apple: 44pt)
    chip: 32, // altura de chips de filtro
    badge: 20, // altura de badges/tags de tecnología
    logoBox: 36, // caja de inicial de empresa en JobCard
    logoBoxLg: 56, // logo en DetailScreen
    avatarSm: 32, // avatar en ProfileScreen
    iconButton: 44, // área táctil mínima para iconos (corazón, campana)
  },

  // Border radius — también centralizado aquí
  radius: {
    xs: 6, // chips, badges pequeños
    sm: 8, // inputs, botones
    md: 12, // searchbar, elementos medianos
    lg: 16, // cards principales
    xl: 20, // bottom sheets, modales
    full: 999, // círculos perfectos (avatares, indicadores)
  },
};
