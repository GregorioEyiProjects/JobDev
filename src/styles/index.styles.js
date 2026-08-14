import { colors, typography, spacing } from "../theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "red",
    backgroundColor: colors.background.base,
  },
  listContent: {
    paddingHorizontal: spacing.screen.horizontal,
    paddingTop: spacing.screen.vertical,
    paddingBottom: spacing.gap.md,
    //paddingBottom: spacing.component_size.tabBar + 16,
    //paddingBottom: spacing.screen.bottomTab,
  },
  header: {
    paddingTop: spacing.screen.vertical,
    gap: spacing.component.lg,
    marginBottom: spacing.component.lg,
  },
  greeting: {
    gap: spacing.component.xs,
  },
  greetingLabel: {
    fontSize: typography.fontSize.title,
    color: colors.text.secondary,
  },
  greetingTitle: {
    fontSize: typography.fontSize.displayLg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    lineHeight: typography.fontSize.displayLg * typography.lineHeight.displayLg,
  },
  greetingAccent: {
    color: colors.accent.default,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.surface,
    borderRadius: spacing.radius.md,
    borderWidth: 1,
    borderColor: colors.background.border,
    paddingHorizontal: spacing.component.md,
    height: spacing.component_size.searchBar,
    gap: spacing.component.sm,
  },
  searchIcon: {
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: typography.fontSize.body,
    color: colors.text.primary,
    height: "100%",
  },
  clearIcon: {
    fontSize: 14,
    color: colors.text.secondary,
    padding: spacing.component.xs,
  },
  filtersRow: {
    flexDirection: "row",
    gap: spacing.gap.sm,
  },
  filterChip: {
    height: spacing.component_size.chip,
    paddingHorizontal: spacing.component.md,
    borderRadius: spacing.radius.full,
    backgroundColor: colors.background.elevated,
    borderWidth: 1,
    borderColor: colors.background.border,
    alignItems: "center",
    justifyContent: "center",
  },
  filterChipActive: {
    backgroundColor: colors.accent.default,
    borderColor: colors.accent.default,
  },
  filterChipText: {
    fontSize: typography.fontSize.tag,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.secondary,
  },
  filterChipTextActive: {
    color: colors.text.inverse,
    fontWeight: typography.fontWeight.bold,
  },
  sectionTitle: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  footerLoader: {
    marginTop: spacing.gap.md,
  },
  noMoreText: {
    textAlign: "center",
    fontSize: typography.fontSize.caption,
    color: colors.text.tertiary,
    paddingVertical: spacing.component.xl,
  },
  emptyContainer: {
    alignItems: "center",
    paddingTop: spacing.component.xl,
    gap: spacing.gap.md,
  },
  emptyEmoji: {
    fontSize: 40,
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
    paddingHorizontal: spacing.xl,
  },
  retryButton: {
    marginTop: spacing.component.sm,
    backgroundColor: colors.accent.default,
    paddingHorizontal: spacing.component.xl,
    paddingVertical: spacing.component.md,
    borderRadius: spacing.radius.sm,
  },
  retryText: {
    fontSize: typography.fontSize.label,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.inverse,
  },
});
