// app/(tabs)/index.jsx

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useJobs } from "../../src/hooks/useJobs";
import { JobCard } from "../../src/components/job/JobCard";
import { JobCardSkeleton } from "../../src/components/job/JobCardSkeleton";
import { ListHeaderCmpnt } from "../../src/components/home/ListHeaderComponent";
import { colors, typography, spacing } from "../../src/theme/index";
import { styles } from "../../src/styles/index.styles";
import { useSavedStore } from "../../src/store/savedStore";

import { useTranslation } from "../../src/hooks/useTranslation";

/* const FILTERS = [
  { label: "Todos", value: "" },
  { label: "Remoto", value: "FULLTIME" },
  { label: "Full-time", value: "FULLTIME" },
  { label: "Contrato", value: "CONTRACTOR" },
]; */

// Componente separado para el footer de la FlatList
function ListFooter({ isLoadingMore, hasMore }) {
  const { t } = useTranslation();
  if (isLoadingMore) {
    return (
      <View style={styles.footerLoader}>
        <JobCardSkeleton />
      </View>
    );
  }

  if (!hasMore) {
    return <Text style={styles.noMoreText}>{t.home.noMoreOffers}</Text>;
  }

  return null;
}

// Componente separado para el estado vacío
function EmptyState({ error, onRetry }) {
  const { t } = useTranslation();
  if (error) {
    //console.log("EmptyState error:", error);

    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyEmoji}>⚠️</Text>
        <Text style={styles.emptyTitle}>{t.home.error}</Text>
        <Text style={styles.emptySubtitle}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
          <Text style={styles.retryText}>{t.home.retry}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>🔍</Text>
      <Text style={styles.emptyTitle}>{t.home.noResults}</Text>
      <Text style={styles.emptySubtitle}>{t.home.noResultsSub}</Text>
    </View>
  );
}

export default function HomeScreen() {
  const {
    jobs,
    isLoading,
    isLoadingMore,
    error,
    hasMore,
    query,
    activeFilter,
    handleQueryChange,
    handleFilterChange,
    loadMore,
  } = useJobs();

  const { savedJobs } = useSavedStore();

  // Los skeletons que se muestran en la carga inicial
  const skeletons = Array.from({ length: 5 }, (_, i) => ({
    job_id: `sk-${i}`,
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={isLoading ? skeletons : jobs}
        keyExtractor={(item, idx) => `${item.job_id}-${idx}`}
        contentContainerStyle={styles.listContent}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        ListEmptyComponent={
          !isLoading && (
            <EmptyState
              error={error}
              onRetry={() => handleQueryChange(query)}
            />
          )
        }
        // Header de la lista — buscador + filtros
        // Dentro de FlatList para que haga scroll junto con las cards
        ListHeaderComponent={
          <ListHeaderCmpnt
            handleQueryChange={handleQueryChange}
            handleFilterChange={handleFilterChange}
            activeFilter={activeFilter}
            query={query}
          />
        }
        ListFooterComponent={
          <ListFooter isLoadingMore={isLoadingMore} hasMore={hasMore} />
        }
        renderItem={({ item }) =>
          isLoading ? <JobCardSkeleton /> : <JobCard job={item} />
        }
        ItemSeparatorComponent={() => (
          <View style={{ height: spacing.gap.md }} />
        )}
      />
    </View>
  );
}
