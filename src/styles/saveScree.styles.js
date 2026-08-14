import { colors, typography, spacing } from "../theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.surface,
  },
  listContent: {
    paddingTop: spacing.screen.vertical,
    paddingHorizontal: spacing.screen.horizontal,
    paddingBottom: spacing.gap.md,
    flexGrow: 1,
  },
  header: {
    paddingTop: spacing.screen.vertical,
    marginBottom: spacing.component.lg,
    gap: spacing.component.xs,
  },
  title: {
    fontSize: typography.fontSize.displaySm,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  count: {
    fontSize: typography.fontSize.body,
    color: colors.text.secondary,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.component.md,
    paddingTop: spacing.screen.vertical,
  },
  emptyEmoji: {
    fontSize: 48,
    color: colors.text.disabled,
  },
  emptyTitle: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  emptySubtitle: {
    fontSize: typography.fontSize.body,
    color: colors.text.secondary,
    textAlign: "center",
    paddingHorizontal: spacing.screen.horizontal,
  },
});
