// Perfil + logout
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";

import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../../src/styles/profile.styles";
import { colors } from "../../src/theme/index";
import SettingRow from "../../src/components/profile/SettingRow";
import { useSavedStore } from "../../src/store/savedStore";

import { supabase } from "../../src/services/supabase";
import { getInitials } from "../../src/utils/formatters";
import { useTranslation } from "../../src/hooks/useTranslation";

export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const { t, language, setLanguage } = useTranslation();

  const savedJobs = useSavedStore((state) => state.savedJobs);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, [user]);

  const email = user?.email ?? "No email";
  const displayName =
    user?.user_metadata?.full_name ?? email.split("@")[0] ?? "Usuario";

  const initials = getInitials(displayName);

  function handleLogout() {
    Alert.alert(t.profile.logoutTitle, t.profile.logoutMessage, [
      { text: t.profile.cancel, style: "cancel" },
      {
        text: t.profile.logoutConfirm,
        style: "destructive",
        onPress: () => supabase.auth.signOut(),
      },
    ]);
  }

  function handleComingSoon(feature) {
    Alert.alert(feature, t.profile.comingSoon);
  }

  function langToggle() {
    return (
      <View style={styles.langToggle}>
        {["es", "en"].map((lang) => (
          <TouchableOpacity
            key={lang}
            style={[styles.langBtn, language === lang && styles.langBtnActive]}
            onPress={() => setLanguage(lang)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.langBtnText,
                language === lang && styles.langBtnTextActive,
              ]}
            >
              {lang.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t.profile.title}</Text>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => handleComingSoon("Ajustes")}
          activeOpacity={0.7}
        >
          {/* <Text style={styles.settingsButtonText}>⚙ Ajustes</Text> */}
          <Ionicons
            name="settings-outline"
            size={13}
            color={colors.text.secondary}
          />
        </TouchableOpacity>
      </View>

      {/* Avatar + info */}
      <View style={styles.hero}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <Text style={styles.displayName}>{displayName}</Text>
        <Text style={styles.email}>{email}</Text>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{savedJobs.length}</Text>
            <Text style={styles.statLabel}>{t.profile.savedStat}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statNumber, styles.statNumberNeutral]}>0</Text>
            <Text style={styles.statLabel}>{t.profile.appliedStat}</Text>
          </View>
        </View>
      </View>

      {/* Sección: Cuenta */}
      <Text style={styles.sectionLabel}>{t.profile.accountSection}</Text>
      <View style={styles.card}>
        <SettingRow
          iconName="person-outline"
          iconColor={colors.accent.default}
          iconBg="#0d2318"
          label={t.profile.editProfile}
          subtitle={t.profile.editProfileSub}
          onPress={() => handleComingSoon("Editar perfil")}
        />
        <View style={styles.divider} />
        <SettingRow
          iconName="notifications-outline"
          iconColor="#60a5fa"
          iconBg="#0d1c2e"
          label={t.profile.notifications}
          subtitle={t.profile.notificationsSub}
          onPress={() => handleComingSoon("Notificaciones")}
        />
        <View style={styles.divider} />
        {/* globe-outline */}
        <SettingRow
          iconName="language-outline"
          iconColor="#60a5fa"
          iconBg="#0d1c2e"
          label={t.profile.language}
          subtitle={t.profile.languageSub}
          onPress={() => {}}
          rightIcon={langToggle}
        />
        <View style={styles.divider} />
        <SettingRow
          iconName="lock-closed-outline"
          iconColor="#fbbf24"
          iconBg="#1c1a0d"
          label={t.profile.privacy}
          subtitle={t.profile.privacySub}
          onPress={() => handleComingSoon("Privacidad")}
        />
      </View>

      {/* Sección: Soporte */}
      <Text style={styles.sectionLabel}>{t.profile.supportSection}</Text>
      <View style={styles.card}>
        <SettingRow
          iconName="help-circle-outline"
          iconColor="#a78bfa"
          iconBg="#12101a"
          label={t.profile.help}
          subtitle={t.profile.helpSub}
          onPress={() => handleComingSoon("Ayuda")}
        />
        <View style={styles.divider} />
        <SettingRow
          iconName="information-circle-outline"
          iconColor="#a78bfa"
          iconBg="#12101a"
          label={t.profile.about}
          subtitle={t.profile.aboutSub}
          onPress={() => handleComingSoon("Acerca de")}
        />
      </View>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        activeOpacity={0.7}
      >
        <Text style={styles.logoutText}>{t.profile.logout}</Text>
      </TouchableOpacity>

      <Text style={styles.version}>DevJobs · v1.0.0</Text>
    </ScrollView>
  );
}
