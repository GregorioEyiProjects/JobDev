import { colors, typography, spacing } from "../theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.surface,
    borderRadius: spacing.radius.lg,
    padding: spacing.component.xl,
    borderWidth: 1,
    borderColor: colors.background.border,
    gap: spacing.component.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.component.md,
  },
  logoBox: {
    width: spacing.component_size.logoBox,
    height: spacing.component_size.logoBox,
    borderRadius: spacing.radius.xs,
    backgroundColor: colors.background.elevated,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.background.border,
    flexShrink: 0,
  },
  logoText: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    color: colors.accent.default,
    fontFamily: "monospace",
  },
  titleWrapper: {
    flex: 1,
    gap: 2,
  },
  jobTitle: {
    fontSize: typography.fontSize.label,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  company: {
    fontSize: typography.fontSize.caption,
    color: colors.text.secondary,
  },
  bookmarkButton: {
    width: spacing.component_size.iconButton,
    height: spacing.component_size.iconButton,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  bookmarkIcon: {
    fontSize: 20,
    color: colors.status.unsaved,
  },
  bookmarkIconSaved: {
    color: colors.status.saved,
  },
  tagsRow: {
    flexDirection: "row",
    gap: spacing.gap.xs,
  },
  tag: {
    paddingHorizontal: spacing.component.sm,
    paddingVertical: spacing.component.xs,
    borderRadius: spacing.radius.xs,
  },
  tagText: {
    fontSize: typography.fontSize.tag,
    fontWeight: typography.fontWeight.bold,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  salary: {
    fontSize: typography.fontSize.label,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  timeAgo: {
    fontSize: typography.fontSize.caption,
    color: colors.text.tertiary,
  },

  // ---------------JobCardSkeleton----------------
  titleWrapper: {
    flex: 1,
    gap: spacing.component.xs,
  },
  tagsRow: {
    flexDirection: "row",
    gap: spacing.gap.xs,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skeletonBox: {
    backgroundColor: colors.background.elevated,
  },
});
