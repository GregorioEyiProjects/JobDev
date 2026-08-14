import { colors, typography, spacing } from "../theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.base,
  },
  scroll: {
    flex: 1,
    paddingVertical: spacing.screen.vertical,
  },
  scrollContent: {
    paddingHorizontal: spacing.screen.horizontal,
    paddingTop: spacing.screen.topTab,
  },
  centered: {
    flex: 1,
    backgroundColor: colors.background.base,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.component.lg,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: spacing.radius.full,
    backgroundColor: colors.background.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.background.border,
  },
  iconButtonText: {
    fontSize: 16,
    color: colors.text.secondary,
  },
  savedIcon: {
    color: colors.status.saved,
  },
  heroSection: {
    gap: spacing.component.xs,
    marginBottom: spacing.component.sm,
  },
  logoBox: {
    width: spacing.component_size.logoBoxLg,
    height: spacing.component_size.logoBoxLg,
    borderRadius: spacing.radius.md,
    backgroundColor: colors.background.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.background.border,
    marginBottom: spacing.component.md,
  },
  logoText: {
    fontSize: typography.fontSize.displaySm,
    fontWeight: typography.fontWeight.bold,
    color: colors.accent.default,
    fontFamily: "monospace",
  },
  jobTitle: {
    fontSize: typography.fontSize.displaySm,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    lineHeight: typography.fontSize.displaySm * typography.lineHeight.displaySm,
  },
  company: {
    fontSize: typography.fontSize.label,
    color: colors.text.secondary,
  },
  tagsRow: {
    flexDirection: "row",
    gap: spacing.gap.xs,
    marginBottom: spacing.component.sm,
    flexWrap: "wrap",
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
  metricsRow: {
    flexDirection: "row",
    gap: spacing.gap.sm,
    marginBottom: spacing.component.lg,
    //paddingHorizontal: spacing.component.sm,
  },
  metricCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background.surface,
    borderRadius: spacing.radius.md,
    padding: spacing.component.md,
    borderWidth: 1,
    borderColor: colors.background.border,
    gap: spacing.component.xs,
  },
  metricLabel: {
    fontSize: typography.fontSize.body,
    color: colors.text.tertiary,
    letterSpacing: typography.letterSpacing.wide,
    fontWeight: typography.fontWeight.bold,
  },
  metricValue: {
    fontSize: typography.fontSize.label,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.background.border,
    marginBottom: spacing.component.lg,
  },
  section: {
    gap: spacing.md,
    marginBottom: spacing.component.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  sectionBody: {
    fontSize: typography.fontSize.body,
    color: colors.text.secondary,
    lineHeight: typography.fontSize.body * typography.lineHeight.body,
  },
  requirementRow: {
    flexDirection: "row",
    gap: spacing.component.sm,
    alignItems: "flex-start",
  },
  requirementCheck: {
    fontSize: typography.fontSize.caption,
    color: colors.accent.default,
    marginTop: 3,
    fontWeight: typography.fontWeight.bold,
  },
  requirementText: {
    flex: 1,
    fontSize: typography.fontSize.body,
    color: colors.text.secondary,
    lineHeight: typography.fontSize.body * typography.lineHeight.body,
  },
  applyContainer: {
    paddingHorizontal: spacing.screen.horizontal,
    paddingVertical: spacing.component_size.logoBox,
    borderTopWidth: 1,
    borderTopColor: colors.background.border,
    backgroundColor: colors.background.base,
  },
  applyButton: {
    backgroundColor: colors.accent.default,
    borderRadius: spacing.radius.sm,
    paddingVertical: spacing.component.md,
    alignItems: "center",
    marginBottom: spacing.component.lg,
  },
  applyText: {
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.inverse,
  },
  errorEmoji: {
    fontSize: 40,
  },
  errorTitle: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  backButton: {
    backgroundColor: colors.accent.default,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: spacing.radius.sm,
  },
  backButtonText: {
    fontSize: typography.fontSize.label,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.inverse,
  },

  //
  applyButtonDisabled: {
    opacity: 0.4,
  },
});
