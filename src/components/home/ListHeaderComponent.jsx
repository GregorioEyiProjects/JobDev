// src/components/home/ListHeaderComponent.jsx

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { colors, typography, spacing } from "../../theme/index";
import { styles } from "../../styles/index.styles";
import { useTranslation } from "../../hooks/useTranslation";

export function ListHeaderCmpnt({
  handleQueryChange,
  handleFilterChange,
  activeFilter,
  query,
}) {
  const { t } = useTranslation();
  const FILTERS = [
    { label: t.home.filters.all, value: "" },
    { label: t.home.filters.remote, value: "REMOTO" },
    { label: t.home.filters.fulltime, value: "FULLTIME" },
    { label: t.home.filters.contract, value: "CONTRACTOR" },
  ];

  return (
    <View style={styles.header}>
      <View style={styles.greeting}>
        <Text style={styles.greetingLabel}>{t.home.greeting}</Text>
        <Text style={styles.greetingTitle}>
          {t.home.title}
          {"\n"}
          <Text style={styles.greetingAccent}>{t.home.titleAccent}</Text>
        </Text>
      </View>

      {/* SearchBar */}
      <View style={styles.searchBar}>
        <Text style={styles.searchIcon}>🔍</Text>

        <TextInput
          style={styles.searchInput}
          placeholder={t.home.searchPlaceholder}
          placeholderTextColor={colors.text.disabled}
          value={query}
          onChangeText={handleQueryChange}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
        />

        {query.length > 0 && (
          <TouchableOpacity onPress={() => handleQueryChange("")}>
            <Text style={styles.clearIcon}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Filtros */}
      <View style={styles.filtersRow}>
        {FILTERS.map((filter) => {
          //const isActive = filter.value === activeFilter;
          const isActive =
            filter.value === activeFilter &&
            !(filter.value === "" && activeFilter === "");

          const isAllActive = filter.value === "" && activeFilter === "";

          return (
            <TouchableOpacity
              key={filter.label}
              style={[
                styles.filterChip,
                (isActive ||
                  (filter.label === t.home.filters.all && isAllActive)) &&
                  styles.filterChipActive,
              ]}
              onPress={() => handleFilterChange(filter.value)}
            >
              <Text
                style={[
                  styles.filterChipText,
                  (isActive ||
                    (filter.label === t.home.filters.all && isAllActive)) &&
                    styles.filterChipTextActive,
                ]}
              >
                {filter.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.sectionTitle}>{t.home.featured}</Text>
    </View>
  );
}
