import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../../src/services/supabase";
import { colors, spacing } from "../../src/theme/index";
import { styles } from "../../src/styles/auth.styles";
import { registerSchema } from "../../src/schemas/register.schema";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState(null);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  // Lee el valor de contraseña en tiempo real
  const passwordValue = watch("password", "");

  // Función que calcula fuerza — fuera del componente
  const getPasswordStrength = (password) => {
    if (!password)
      return { level: 0, label: "", color: colors.status.error.text };

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++; // carácter especial

    const levels = [
      { level: 0, label: "" },
      { level: 1, label: "Débil" },
      { level: 2, label: "Regular" },
      { level: 3, label: "Buena" },
      { level: 4, label: "Fuerte" },
    ];

    return levels[score];
  };
  async function onSubmit(data) {
    /* console.log("URL:", process.env.EXPO_PUBLIC_SUPABASE_URL);
    console.log(
      "KEY length:",
      process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY?.length,
    ); */

    setAuthError(null);

    const { data: signUpData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          name: data.name,
        },
      },
    });

    if (error) {
      setAuthError("Error al registrar. Intenta de nuevo.");
      console.log("Registro fallido:", error.message);
      return;
    }

    // Supabase devuelve identities vacío cuando el email necesita confirmación
    if (signUpData?.user?.identities?.length === 0) {
      setAuthError("Este email ya está registrado.");
      console.log("Registro fallido: email ya registrado");
      return;
    }

    // Registro exitoso pero pendiente de confirmación
    router.replace("/(auth)/confirm-email");
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inner}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Crea tu cuenta</Text>
          <Text style={styles.subtitle}>
            Empieza a explorar ofertas en{"\n"}
            <Text style={styles.subtitle}>segundos</Text>
          </Text>
        </View>

        {/* Formulario */}
        <View style={styles.form}>
          {/* Campo name */}
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.fieldWrapper}>
                <Text style={styles.label}>NOMBRE</Text>
                <TextInput
                  style={[styles.input, errors.name && styles.inputError]}
                  placeholder="Nombre"
                  placeholderTextColor={colors.text.disabled}
                  keyboardType="default"
                  autoCapitalize="words"
                  autoCorrect={false}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.name && (
                  <Text style={styles.errorText}>{errors.name.message}</Text>
                )}
              </View>
            )}
          />
          {/* Campo email */}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.fieldWrapper}>
                <Text style={styles.label}>EMAIL</Text>
                <TextInput
                  style={[styles.input, errors.email && styles.inputError]}
                  placeholder="tu@email.com"
                  placeholderTextColor={colors.text.disabled}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email.message}</Text>
                )}
              </View>
            )}
          />
          {/* Campo contraseña */}
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.fieldWrapper}>
                <Text style={styles.label}>CONTRASEÑA</Text>
                <View style={styles.passwordWrapper}>
                  <TextInput
                    style={[
                      styles.input,
                      styles.passwordInput,
                      errors.password && styles.inputError,
                    ]}
                    placeholder="Mín. 8 caracteres"
                    placeholderTextColor={colors.text.disabled}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text style={styles.eyeText}>
                      {showPassword ? "🙈" : "👁"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          {/* Indicador de fuerza — solo visible si hay algo escrito */}
          {passwordValue.length > 0 &&
            (() => {
              const strength = getPasswordStrength(passwordValue);
              const barColor = (index) => {
                if (index >= strength.level) return styles.strengthBar;
                if (strength.level === 1)
                  return [styles.strengthBar, styles.strengthBarWeak];
                if (strength.level === 2)
                  return [styles.strengthBar, styles.strengthBarMedium];
                return [styles.strengthBar, styles.strengthBarActive];
              };

              return (
                <View style={styles.strengthContainer}>
                  {[0, 1, 2, 3].map((i) => (
                    <View key={i} style={barColor(i)} />
                  ))}
                  <Text style={styles.strengthLabel}>{strength.label}</Text>
                </View>
              );
            })()}

          {/* Error de autenticación — diferente a errores de validación */}
          {authError && (
            <View style={styles.authErrorContainer}>
              <Text style={styles.authErrorText}>{authError}</Text>
            </View>
          )}
          {/* CTA */}
          <TouchableOpacity
            style={[styles.button, isSubmitting && styles.buttonDisabled]}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color={colors.text.inverse} />
            ) : (
              <Text style={styles.buttonText}>Registrarse</Text>
            )}
          </TouchableOpacity>
          {/* Footer */}
          <Text style={styles.footerText}>
            Al registrarte, aceptas los{" "}
            <Text style={styles.footerLink}>términos</Text> y la{"\n"}
            <Text style={styles.footerLink}>política de privacidad</Text>
          </Text>
          {/* Footer al final */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Ya tienes cuenta? </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Text style={styles.footerLink}>Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
  s;
}
