import { StyleSheet, Dimensions } from "react-native";
import { colors, spacing, typography } from "../theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.base,
  },

  header: {
    height: 52,
    alignItems: "flex-end",
    paddingHorizontal: spacing.screen.horizontal,
    justifyContent: "center",
  },
  skipText: {
    fontSize: typography.fontSize.label,
    color: colors.text.secondary,
  },
  slide: {
    width, //exactamente el ancho de la pantalla
    paddingHorizontal: spacing.screen.horizontal,
    paddingTop: spacing["3xl"],
    alignItems: "flex-start",
  },

  emojiContainer: {
    width: 72,
    height: 72,
    borderRadius: spacing.radius.lg,
    backgroundColor: colors.background.surface,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing["2xl"],
    borderWidth: 1,
    borderColor: colors.background.border,
  },
  emoji: {
    fontSize: 32,
  },
  title: {
    fontSize: typography.fontSize.displayLg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    lineHeight: typography.fontSize.displayLg * typography.lineHeight.displayLg,
    marginTop: spacing.component.xl,
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.regular,
    color: colors.text.secondary,
    lineHeight: typography.fontSize.body * typography.lineHeight.body,
  },
  footer: {
    paddingHorizontal: spacing.screen.horizontal,
    paddingBottom: spacing["2xl"],
    gap: spacing.xl,
  },
  indicators: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  indicator: {
    width: spacing.sm,
    height: 4,
    borderRadius: spacing.radius.full,
    backgroundColor: colors.background.elevated,
  },
  indicatorActive: {
    width: spacing["2xl"], // el activo es más ancho, no solo más brillante
    backgroundColor: colors.accent.default,
  },
  button: {
    backgroundColor: colors.accent.default,
    borderRadius: spacing.radius.sm,
    paddingVertical: spacing.component.md,
    alignItems: "center",
  },
  buttonText: {
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.inverse,
  },
});
