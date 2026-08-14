import { colors, spacing, typography } from "../theme/index";
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.base,
  },
  inner: {
    flex: 1,
    paddingHorizontal: spacing.screen.horizontal,
    justifyContent: "flex-start",
    paddingTop: spacing["5xl"],
  },
  header: {
    flex: 0.15,
    justifyContent: "center",
    //backgroundColor: colors.background.border,
    marginBottom: spacing.screen.bottomTab,
    marginVertical: spacing.screen.horizontal,
  },
  title: {
    fontSize: typography.fontSize.displayLg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.title,
    color: colors.text.secondary,
  },
  label: {
    fontSize: typography.fontSize.tag,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.tertiary,
    letterSpacing: typography.letterSpacing.wide,
    paddingHorizontal: spacing.component.xs,
  },
  form: {
    flex: 0.85,
    //backgroundColor: colors.background.border,
    //marginTop: spacing.component.lg,
    gap: spacing.component.lg,
  },
  fieldWrapper: {
    gap: spacing.component.xs,
  },
  input: {
    backgroundColor: colors.background.surface,
    borderRadius: spacing.radius.md,
    borderWidth: 1,
    borderColor: colors.background.border,
    paddingHorizontal: spacing.component.xs,
    paddingVertical: spacing.component.lg,
    fontSize: typography.fontSize.body,
    color: colors.text.primary,
  },
  inputError: {
    borderColor: colors.status.error.text,
  },
  passwordWrapper: {
    position: "relative",
  },
  passwordInput: {
    paddingRight: spacing.component.xl,
  },
  eyeButton: {
    position: "absolute",
    right: spacing.component.md,
    top: 0,
    bottom: 0,
    width: spacing.component_size.iconButton,
    alignItems: "center",
    justifyContent: "center",
  },
  eyeText: {
    fontSize: 16,
  },
  errorText: {
    fontSize: typography.fontSize.caption,
    color: colors.status.error.text,
  },
  authErrorContainer: {
    backgroundColor: colors.status.error.background,
    borderRadius: spacing.radius.sm,
    padding: spacing.component.md,
  },
  authErrorText: {
    fontSize: typography.fontSize.label,
    color: colors.status.error.text,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.accent.default,
    borderRadius: spacing.radius.sm,
    paddingVertical: spacing.component.md,
    alignItems: "center",
    marginTop: spacing.component.sm,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.inverse,
  },
  footerText: {
    fontSize: typography.fontSize.label,
    color: colors.text.secondary,
    textAlign: "center",
  },
  footerLink: {
    color: colors.accent.default,
    fontWeight: typography.fontWeight.medium,
  },
  forgotPasswordButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: spacing.component.xs,
  },
  forgotPasswordText: {
    color: colors.accent.default,
    fontWeight: typography.fontWeight.medium,
  },

  //----------- Register ------------------
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.component.xs,
    gap: spacing.component.sm,
  },

  strengthContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.component.xs,
    marginTop: spacing.component.xs,
  },
  strengthBar: {
    flex: 1,
    height: 3,
    borderRadius: spacing.radius.full,
    backgroundColor: colors.background.elevated,
  },
  strengthBarActive: {
    backgroundColor: colors.accent.default,
  },
  strengthBarWeak: {
    backgroundColor: colors.status.error.text,
  },
  strengthBarMedium: {
    backgroundColor: colors.status.warning.text, // amarillo
  },
  strengthLabel: {
    fontSize: typography.fontSize.caption,
    color: colors.text.secondary,
    minWidth: 44,
  },

  // Estilos para el  — solo los que no existen en auth.styles.js
  forgotPasswordContainer: {
    flex: 1,
    backgroundColor: colors.background.base,
    //paddingHorizontal: spacing.screen.horizontal,
  },
  colorText: {
    color: colors.text.primary,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.medium,
  },

  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.background.surface,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.gap.lg,
    borderWidth: 1,
    borderColor: colors.background.border,
  },
  backText: {
    fontSize: 16,
    color: colors.text.secondary,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: spacing.radius.md,
    //backgroundColor: colors.background.border,
    backgroundColor: colors.accent.default,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.gap.sm,
  },
  iconText: {
    fontSize: 24,
  },
  emailHighlight: {
    fontSize: typography.fontSize.label,
    color: colors.accent.default,
    fontWeight: typography.fontWeight.medium,
    marginBottom: spacing["2xl"],
  },
  infoBox: {
    backgroundColor: colors.background.surface,
    borderRadius: spacing.radius.sm,
    padding: spacing.component.sm,
    borderWidth: 2,
    borderColor: colors.background.border,
    marginBottom: spacing.component.lg,
  },
  infoText: {
    fontSize: typography.fontSize.caption,
    color: colors.text.secondary,
    lineHeight: typography.fontSize.caption * typography.lineHeight.body,
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.component.xs,
    gap: spacing.component.sm,
    //borderRadius: spacing.radius.sm,
  },
  resendButton: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.md,
    alignItems: "center",
  },
  resendText: {
    fontSize: typography.fontSize.label,
    color: colors.text.secondary,
    textAlign: "center",
  },
});
