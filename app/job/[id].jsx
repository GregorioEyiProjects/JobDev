// app/job/[id].jsx
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import { getJobDetail } from "../../src/services/jsearch";
import { colors, typography, spacing } from "../../src/theme/index";
import { useSavedStore } from "../../src/store/savedStore";

import {
  getInitial,
  formatSalary,
  getTimeAgo,
} from "../../src/utils/formatters";

import { styles } from "../../src/styles/details.styles";

function MetricCard({ label, value }) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
    </View>
  );
}

function RequirementItem({ text }) {
  return (
    <View style={styles.requirementRow}>
      <Text style={styles.requirementCheck}>✓</Text>
      <Text style={styles.requirementText}>{text}</Text>
    </View>
  );
}

async function openApplyLink(url) {
  if (!url) {
    Alert.alert(
      "Sin enlace",
      "Esta oferta no tiene un link de aplicación disponible.",
    );
    return;
  }

  const supported = await Linking.canOpenURL(url);

  if (!supported) {
    Alert.alert("No se pudo abrir", "El enlace de esta oferta no es válido.");
    return;
  }

  await Linking.openURL(url);
}

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //const savedJob = savedJobs.some((j) => j.job_id === id);
  //const [isSaved, setIsSaved] = useState(false);
  //const { toggleSave, isSaved, savedJob  } = useSavedStore();
  const { toggleSave, isSaved } = useSavedStore();

  useEffect(() => {
    async function loadJob() {
      try {
        setIsLoading(true);
        const data = await getJobDetail(id);
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadJob();
  }, [id]);

  // ── Estado de carga ───────────────────────────────────
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.accent.default} />
      </View>
    );
  }

  // ── Estado de error ───────────────────────────────────
  if (error || !job) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorEmoji}>⚠️</Text>
        <Text style={styles.errorTitle}>No pudimos cargar esta oferta</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ── Datos del job ─────────────────────────────────────
  const salary = formatSalary(
    job.job_min_salary,
    job.job_max_salary,
    job.job_salary_currency,
  );
  const timeAgo = getTimeAgo(job.job_posted_at_datetime_utc);
  const initial = getInitial(job.employer_name);

  // JSearch devuelve los requisitos como array en job_highlights.Qualifications
  const requirements = job.job_highlights?.Qualifications ?? [];
  const responsibilities = job.job_highlights?.Responsibilities ?? [];
  const savedJob = isSaved(job?.job_id);
  //const savedJob = isSaved(job.job_id);
  //const savedJob = savedJobs.some((j) => j.job_id === id);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header — back + bookmark */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.back()}
          >
            <Text style={styles.iconButtonText}>←</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => toggleSave(job)}
          >
            <Text
              style={[
                styles.iconButtonText,
                savedJob && styles.bookmarkIconSaved,
              ]}
            >
              {savedJob ? "♥" : "♡"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Logo + título */}
        <View style={styles.heroSection}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>{initial}</Text>
          </View>
          <Text style={styles.jobTitle}>{job.job_title}</Text>
          <Text style={styles.company}>
            {job.employer_name}
            {job.job_city ? ` · ${job.job_city}` : ""}
            {job.job_country ? `, ${job.job_country}` : ""}
          </Text>
        </View>

        {/* Tags */}
        <View style={styles.tagsRow}>
          {/* {console.log("job.job_employment_type", job.job_employment_type)} */}
          {job.job_is_remote && (
            <View
              style={[
                styles.tag,
                { backgroundColor: colors.tag.remote.background },
              ]}
            >
              <Text style={[styles.tagText, { color: colors.tag.remote.text }]}>
                Remoto
              </Text>
            </View>
          )}
          {job.job_employment_type === "Full-time" && (
            <View
              style={[
                styles.tag,
                { backgroundColor: colors.tag.fulltime.background },
              ]}
            >
              <Text
                style={[styles.tagText, { color: colors.tag.fulltime.text }]}
              >
                Full-time
              </Text>
            </View>
          )}
          {job.job_employment_type === "Contractor" && (
            <View
              style={[
                styles.tag,
                { backgroundColor: colors.tag.hybrid.background },
              ]}
            >
              <Text style={[styles.tagText, { color: colors.tag.hybrid.text }]}>
                Contrato
              </Text>
            </View>
          )}
        </View>

        {/* Métricas */}
        <View style={styles.metricsRow}>
          <MetricCard label="SALARIO" value={salary} />
          <MetricCard label="PUBLICADO" value={timeAgo} />
        </View>

        <View style={styles.divider} />

        {/* Descripción */}
        {job.job_description && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre el rol</Text>
            <Text style={styles.sectionBody}>
              {job.job_description.slice(0, 600)}
              {job.job_description.length > 600 ? "…" : ""}
            </Text>
          </View>
        )}

        {/* Responsabilidades */}
        {responsibilities.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Responsabilidades</Text>
            {responsibilities.slice(0, 5).map((item, index) => (
              <RequirementItem key={index} text={item} />
            ))}
          </View>
        )}

        {/* Requisitos */}
        {requirements.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Requisitos</Text>
            {requirements.slice(0, 5).map((item, index) => (
              <RequirementItem key={index} text={item} />
            ))}
          </View>
        )}

        {/* Espacio para el botón fijo */}
        <View style={{ height: 40 }} />
      </ScrollView>

      {/* Botón fijo en el fondo */}
      <View style={styles.applyContainer}>
        <TouchableOpacity
          style={[
            styles.applyButton,
            !job.job_apply_link && styles.applyButtonDisabled,
          ]}
          onPress={() => {
            if (job.job_apply_link) {
              openApplyLink(job.job_apply_link);
              console.log("Apply:", job.job_apply_link);
            }
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.applyText}>Aplicar ahora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* const savedJob = savedJobs.some((j) => j.job_id === id); */
