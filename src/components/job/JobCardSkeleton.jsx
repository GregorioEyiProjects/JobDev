// src/components/job/JobCardSkeleton.jsx
// Una card "fantasma" que se muestra mientras cargan los datos reales.
// Misma estructura que JobCard pero con rectángulos grises en vez de contenido.

import { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { colors, spacing } from "../../theme/index";
import { styles } from "../../styles/job.style";

function SkeletonBox({ width, height, borderRadius = 4 }) {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      style={[styles.skeletonBox, { width, height, borderRadius, opacity }]}
    ></Animated.View>
  );
}

export function JobCardSkeleton() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <SkeletonBox width={36} height={36} borderRadius={8} />
        <View style={styles.titleWrapper}>
          <SkeletonBox width="70%" height={14} />
          <SkeletonBox width="45%" height={11} />
        </View>
      </View>
      <View style={styles.tagsRow}>
        <SkeletonBox width={64} height={22} borderRadius={6} />
        <SkeletonBox width={72} height={22} borderRadius={6} />
      </View>
      <View style={styles.footer}>
        <SkeletonBox width="40%" height={14} />
        <SkeletonBox width="20%" height={11} />
      </View>
    </View>
  );
}
