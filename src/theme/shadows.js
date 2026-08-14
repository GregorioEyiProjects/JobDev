import { Platform } from "react-native";

const createShadow = (elevation, opacity = 0.1) => {
  if (Platform.OS === "ios") {
    // iOS usa shadowColor, shadowOffset, shadowOpacity, shadowRadius

    return {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: elevation },
      shadowOpacity: opacity,
      shadowRadius: elevation * 1.5,
    };

    // Android usa elevation directamente
    return { elevation: elevation * 2 };
  }
};

export const shadows = {
  sm: createShadow(1, 0.08),
  md: createShadow(3, 0.1),
  lg: createShadow(6, 0.12),
  xl: createShadow(10, 0.15),
};
