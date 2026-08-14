import { colors, typography, spacing } from "../theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.background.base,
    borderTopColor: colors.background.border,
    borderTopWidth: 1,
    height: spacing.component_size.tabBar,
    //height: spacing.component_size.tabBar,
    paddingBottom: 0,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    gap: 1,
  },
  tabEmoji: {
    fontSize: 20,
    opacity: 0.4,
  },
  tabEmojiActive: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: typography.fontSize.caption,
    color: colors.text.disabled,
    fontWeight: typography.fontWeight.regular,
    textAlign: "center",
    width: "100%",
  },
  tabLabelActive: {
    color: colors.accent.default,
    fontWeight: typography.fontWeight.bold,
  },
});
