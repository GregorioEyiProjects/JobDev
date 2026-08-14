// app/(auth)/forgot-password.jsx
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { supabase } from "../../src/services/supabase";
import { styles } from "../../src/styles/auth.styles";
import { colors, typography, spacing } from "../../src/theme/index";
import { forgotSchema } from "../../src/schemas/forgot.schema";

export default function ForgotPasswordScreen() {
  const [emailSent, setEmailSent] = useState(false);
  const [sentToEmail, setSentToEmail] = useState("");
  const [authError, setAuthError] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(data) {
    setAuthError(null);

    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: "devjob://reset-password",
    });

    if (error) {
      setAuthError("No pudimos enviar el email. Inténtalo de nuevo.");
      return;
    }

    setSentToEmail(data.email);
    setEmailSent(true);
  }

  // ── Estado 2: confirmación ────────────────────────────
  if (emailSent) {
    return (
      <SafeAreaView style={styles.forgotPasswordContainer}>
        <KeyboardAvoidingView
          style={[styles.inner, { marginTop: spacing.component.lg }]}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inner}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>✉️</Text>
            </View>

            <Text style={styles.title}>Revisa tu email</Text>
            <Text
              style={[styles.subtitle, { marginBottom: spacing.component.xs }]}
            >
              Hemos enviado un enlace a
            </Text>
            <Text
              style={[
                styles.emailHighlight,
                { marginBottom: spacing.component.lg },
              ]}
            >
              {sentToEmail}
            </Text>

            <View style={styles.infoBox}>
              <Text style={styles.infoText}>
                El enlace expira en 60 minutos. Si no ves el email, revisa la
                carpeta de spam.
              </Text>
            </View>
          </View>

          {/* CTA */}
          <View
            style={[
              {
                marginBottom: spacing.component.xl,
                //s backgroundColor: colors.background.border,
              },
            ]}
          >
            <TouchableOpacity
              style={[styles.button, { marginBottom: spacing.component.lg }]}
              onPress={() => router.replace("/(auth)/login")}
            >
              <Text style={styles.buttonText}>Volver al login</Text>
            </TouchableOpacity>

            <View style={styles.resendContainer}>
              <Text style={[styles.resendText]}>¿No llegó el email?</Text>
              <TouchableOpacity
                style={[styles.resendButton, { marginHorizontal: spacing.xs }]}
                onPress={() => setEmailSent(false)}
              >
                <Text style={styles.footerLink}>Reenviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  // ── Estado 1: formulario ──────────────────────────────

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>🔒</Text>
        </View>

        <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
        <Text
          style={[
            styles.subtitle,
            { marginBottom: spacing.component_size.logoBoxLg },
          ]}
        >
          Introduce tu email y te enviaremos un enlace para restablecerla.
        </Text>

        <Controller
          style={styles.form}
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.fieldWrapper}>
              <Text style={styles.label}>EMAIL</Text>

              <TextInput
                style={[
                  styles.input,
                  { marginBottom: spacing.component.lg },
                  errors.email && styles.inputError,
                ]}
                placeholder="tu@email.com"
                placeholderTextColor={colors.text.disabled}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />

              {errors.email && (
                <Text style={styles.errorText}>{errors.email.message}</Text>
              )}
            </View>
          )}
        />

        {authError && (
          <View style={styles.authErrorContainer}>
            <Text style={styles.authErrorText}>{authError}</Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.button, isSubmitting && styles.buttonDisabled]}
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color={colors.text.inverse} />
          ) : (
            <Text style={styles.buttonText}>Enviar enlace</Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
