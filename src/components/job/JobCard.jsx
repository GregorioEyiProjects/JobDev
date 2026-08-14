// src/components/job/JobCard.jsx
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { colors, typography, spacing } from "../../theme/index";
import { styles } from "../../styles/job.style";
import { getInitial, formatSalary, getTimeAgo } from "../../utils/formatters";
import { useSavedStore } from "../../store/savedStore";

function getTagConfig(job) {
  const tags = [];

  const job_employment_type = job.job_employment_type?.toLowerCase() ?? "";

  //console.log("job_employment_type", job_employment_type);

  if (job.is_remote) {
    tags.push({ label: "Remoto", style: colors.tag.remote });
  } else if (job.job_city) {
    tags.push({ label: job.job_city, style: colors.tag.onsite });
  }

  if (job_employment_type.includes("full-time")) {
    tags.push({ label: "Full-time", style: colors.tag.fulltime });
  } else if (job_employment_type.includes("part-time")) {
    tags.push({ label: "Part-time", style: colors.tag.onsite });
  } else if (job_employment_type.includes("contractor")) {
    tags.push({ label: "Contrato", style: colors.tag.hybrid });
  }

  /* if (job.job_employment_type === "Full-time") {
    tags.push({ label: "Full-time", style: colors.tag.fulltime });
  } else if (job.job_employment_type === "Part-time") {
    tags.push({ label: "Part-time", style: colors.tag.onsite });
  } else if (job.job_employment_type === "Contractor") {
    tags.push({ label: "Contrato", style: colors.tag.hybrid });
  } */

  return tags.slice(0, 2); // máximo 2 tags por card
}

export function JobCard({ job }) {
  const { toggleSave, isSaved, savedJobs } = useSavedStore();
  const saved = isSaved(job.job_id);
  const savedJob = savedJobs.some((j) => j.job_id === job.job_id);

  const tags = getTagConfig(job);
  const salary = formatSalary(
    job.job_min_salary,
    job.job_max_salary,
    job.job_salary_currency,
  );

  const timeAgo = getTimeAgo(job.job_posted_at_datetime_utc);
  const initial = getInitial(job.employer_name);

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => router.push(`/job/${job.job_id}`)}
    >
      {/* Header — logo + título + bookmark */}
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>{initial}</Text>
        </View>

        <View style={styles.titleWrapper}>
          <Text style={styles.jobTitle} numberOfLines={1}>
            {job.job_title}
          </Text>
          <Text style={styles.company} numberOfLines={1}>
            {job.employer_name}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.bookmarkButton}
          onPress={() => toggleSave(job)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text
            style={[styles.bookmarkIcon, savedJob && styles.bookmarkIconSaved]}
          >
            {/* {console.log("isSaved(job.job_id)", isSaved(job.job_id))} */}
            {savedJob ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tags */}
      {tags.length > 0 && (
        <View style={styles.tagsRow}>
          {tags.map((tag, index) => (
            <View
              key={index}
              style={[styles.tag, { backgroundColor: tag.style.background }]}
            >
              <Text style={[styles.tagText, { color: tag.style.text }]}>
                {" "}
                {tag.label}{" "}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Footer — salario + fecha */}
      <View style={styles.footer}>
        <Text style={styles.salary}>{salary ?? "Salario no especificado"}</Text>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>
    </TouchableOpacity>
  );
}
