// app/(tabs)/saved.jsx
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSavedStore } from "../../src/store/savedStore";
import { JobCard } from "../../src/components/job/JobCard";
import { colors, typography, spacing } from "../../src/theme/index";
import { styles } from "../../src/styles/saveScree.styles";
import { useTranslation } from "../../src/hooks/useTranslation";

function EmptyState() {
  const { t } = useTranslation();

  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>♡</Text>
      <Text style={styles.emptyTitle}>{t.saved.emptyTitle}</Text>
      <Text style={styles.emptySubtitle}>{t.saved.emptySub}</Text>
    </View>
  );
}

export default function SavedScreen() {
  const { savedJobs } = useSavedStore();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <FlatList
        data={savedJobs}
        keyExtractor={(item, index) => `${item.job_id}-${index}`}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>{t.saved.title}</Text>
            <Text style={styles.count}>
              {savedJobs.length}{" "}
              {savedJobs.length === 1 ? t.saved.offer : t.saved.offers}
            </Text>
          </View>
        }
        ListEmptyComponent={<EmptyState />}
        renderItem={({ item }) => <JobCard job={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: spacing.gap.md }} />
        )}
      />
    </View>
  );
}
