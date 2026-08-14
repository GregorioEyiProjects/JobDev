import { StyleSheet } from "react-native";
import {
  colors,
  typography,
  spacing,
  radius,
  component_size,
} from "../theme/index";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background.base,
  },

  content: {
    paddingTop: spacing.screen.vertical,
    paddingBottom: spacing.screen.vertical,
  },

  // ── Header ──────────────────────────────────────────────\
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.screen.horizontal,
    paddingTop: spacing.screen.vertical,
    paddingBottom: spacing.screen.vertical,
  },
  headerTitle: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  settingsButton: {
    backgroundColor: colors.background.surface,
    borderWidth: 1,
    borderColor: colors.background.border,
    borderRadius: spacing.radius.sm,
    paddingHorizontal: spacing.component.md,
    paddingVertical: spacing.component.md,
  },

  settingsButtonText: {
    fontSize: typography.fontSize.caption,
    color: colors.text.secondary,
  },

  // ── Hero ────────────────────────────────────────────────
  hero: {
    alignItems: "center",
    paddingHorizontal: spacing.screen.horizontal,
    paddingBottom: spacing.screen.vertical,
  },
  avatar: {
    width: spacing.component_size.logoBoxLg + 16,
    height: spacing.component_size.logoBoxLg + 16,
    borderRadius: (spacing.component_size.logoBoxLg + 16) / 2,
    backgroundColor: "#0d2d22",
    borderWidth: 2,
    borderColor: colors.accent.default,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.component.md,
  },

  avatarText: {
    fontSize: typography.fontSize.displaySm,
    fontWeight: typography.fontWeight.bold,
    color: colors.accent.default,
    fontVariant: ["tabular-nums"],
    letterSpacing: -0.5,
  },
  displayName: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.component.md,
  },
  email: {
    fontSize: typography.fontSize.caption,
    color: colors.text.secondary,
    marginBottom: spacing.component.md,
  },

  // ── Stats ────────────────────────────────────────────────
  statsRow: {
    flexDirection: "row",
    gap: spacing.component.md,
  },
  statCard: {
    backgroundColor: colors.background.surface,
    borderWidth: 1,
    borderColor: colors.background.border,
    borderRadius: spacing.radius.md,
    paddingVertical: spacing.component.md,
    paddingHorizontal: spacing.component.lg,
    alignItems: "center",
    minWidth: 96,
  },
  statNumber: {
    fontSize: typography.fontSize.displaySm,
    fontWeight: typography.fontWeight.bold,
    color: colors.accent.default,
  },
  statNumberNeutral: {
    color: colors.text.primary,
  },
  statLabel: {
    fontSize: typography.fontSize.caption,
    color: colors.text.secondary,
    marginTop: spacing.component.sm,
  },

  // ── Sections ─────────────────────────────────────────────
  sectionLabel: {
    fontSize: typography.fontSize.tag,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.secondary,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginHorizontal: spacing.component.lg,
    marginTop: spacing.component.lg,
    marginBottom: spacing.component.sm + 2,
  },

  // ── Card / Rows ──────────────────────────────────────────
  card: {
    marginHorizontal: spacing.component.lg,
    backgroundColor: colors.background.surface,
    borderWidth: 1,
    borderColor: colors.background.border,
    borderRadius: spacing.radius.lg,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.component.md,
    paddingHorizontal: spacing.component.lg,
    paddingVertical: spacing.component.md + 2,
  },
  rowIcon: {
    width: spacing.component_size.logoBox,
    height: spacing.component_size.logoBox,
    borderRadius: spacing.radius.sm,
    backgroundColor: "#0d2318",
    alignItems: "center",
    justifyContent: "center",
  },
  rowIconDanger: {
    backgroundColor: "#1a0d0d",
  },

  rowIconText: {
    fontSize: 18,
  },
  rowIconTextDanger: {
    fontSize: 18,
  },
  rowContent: {
    flex: 1,
  },
  rowLabel: {
    fontSize: typography.fontSize.body,
    color: colors.text.primary,
  },
  rowLabelDanger: {
    color: "#f87171",
  },
  rowSubtitle: {
    fontSize: typography.fontSize.caption,
    color: colors.text.secondary,
    marginTop: 2,
  },
  rowChevron: {
    fontSize: 20,
    color: colors.text.secondary,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: colors.background.border,
    marginLeft:
      spacing.component.lg +
      spacing.component_size.logoBox +
      spacing.component.md,
  },

  // ── Logout ───────────────────────────────────────────────
  logoutButton: {
    marginHorizontal: spacing.component.lg,
    marginTop: spacing.component.xl,
    paddingVertical: spacing.component.md,
    backgroundColor: "#1a0d0d",
    borderWidth: 1,
    borderColor: "#3d1515",
    borderRadius: spacing.radius.md,
    alignItems: "center",
  },
  logoutText: {
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.medium,
    color: "#f87171",
  },

  // ── Footer ───────────────────────────────────────────────
  version: {
    textAlign: "center",
    fontSize: typography.fontSize.caption,
    color: "#3a3f5c",
    marginTop: spacing.component.md,
  },

  //  ── Estilos del toggle ─────────────────────────────────────────
  langToggle: {
    flexDirection: "row",
    backgroundColor: colors.background.base,
    borderWidth: 1,
    borderColor: colors.background.border,
    borderRadius: spacing.radius.sm,
    padding: 2,
    gap: 2,
  },
  langBtn: {
    paddingHorizontal: spacing.component.md,
    paddingVertical: 4,
    borderRadius: spacing.radius.xs,
  },
  langBtnActive: {
    backgroundColor: colors.accent.default,
  },
  langBtnText: {
    fontSize: typography.fontSize.caption,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.secondary,
  },
  langBtnTextActive: {
    color: colors.text.inverse,
  },
});
