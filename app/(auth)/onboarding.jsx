import React, { useRef } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, typography } from "../../src/theme/index";
import { styles } from "../../src/styles/OnBoarding.style";
import { SLIDES } from "../../src/constants/onboarding.slides";

async function completeOnboarding() {
  await AsyncStorage.setItem("hasSeenOnboarding", "true");
  router.replace("/(auth)/login");
}

export default function OnboardingScreen() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const flatListRef = useRef(null);

  function handleNext() {
    if (activeIndex < SLIDES.length - 1) {
      flatListRef.current.scrollToIndex({ index: activeIndex + 1 });
    } else {
      completeOnboarding();
    }
  }

  function handleBack() {
    if (activeIndex > 0) {
      flatListRef.current.scrollToIndex({ index: activeIndex - 1 });
    }
  }

  function onViewableItemsChanged({ viewableItems }) {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }

  // useRef aquí es importante — si pasas el objeto directamente como prop,
  // React lo recrea en cada render y FlatList lanza un warning
  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  const isLastSlide = activeIndex === SLIDES.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      {/* Botón saltar — solo visible si no estamos en el último slide */}
      <View style={styles.header}>
        {!isLastSlide && (
          <TouchableOpacity onPress={completeOnboarding}>
            <Text style={styles.skipText}>Saltar</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig.current}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View style={styles.emojiContainer}>
              <Text style={styles.emoji}>{item.emoji}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />

      {/* Footer: indicadores + botón */}
      <View style={styles.footer}>
        <View style={styles.indicators}>
          {SLIDES.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === activeIndex && styles.indicatorActive,
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {isLastSlide ? "Empezar" : "Siguiente →"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
