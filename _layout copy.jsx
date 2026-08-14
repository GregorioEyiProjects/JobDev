//app/(tabs)/_layout.jsx

import { Tabs } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { colors, typography, spacing } from "./src/theme/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//import Ionicons from "@react-native-vector-icons/ionicons";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./src/styles/type.styles";

import { useTranslation } from "./src/hooks/useTranslation";

function TabIcon({ name, nameActive, label, focused }) {
  //const { t } = useTranslation();
  return (
    <View style={styles.tabItem}>
      <Ionicons
        name={focused ? nameActive : name}
        size={22}
        color={focused ? colors.accent.default : colors.text.secondary}
        style={focused ? styles.tabEmojiActive : styles.tabEmoji}
      />
      <Text style={[styles.tabLabel, focused && styles.tabLabelActive]}>
        {label}
      </Text>
    </View>
  );
}

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBar,
          paddingTop: spacing.gap.xs,
          paddingBottom: insets.bottom,
          borderTopColor: colors.background.border,
          borderTopWidth: StyleSheet.hairlineWidth,
          elevation: 0,
          shadowOpacity: 0,
          height: spacing.component_size.tabBar + insets.bottom,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="search-outline"
              nameActive="search"
              label={t.tabs.explore}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="heart-outline"
              nameActive="heart"
              label={t.tabs.saved}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="person-outline"
              nameActive="person"
              label={t.tabs.profile}
              focused={focused}
            />
          ),
        }}
      />
      {/*  <Tabs.Screen name="_layout" options={{ href: null }} /> */}
    </Tabs>
  );
}

/* export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: spacing.gap.xs,
          backgroundColor: colors.background.base,
          borderTopColor: colors.background.border,
          borderTopWidth: 0,
          height: 65 + insets.bottom,
          //paddingBottom: insets.bottom,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="search-outline"
              nameActive="search"
              label="Explorar"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="heart-outline"
              nameActive="heart"
              label="Guardados"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="person-outline"
              nameActive="person"
              label="Perfil"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
} */

/* {
          backgroundColor: colors.background.base,
          borderTopColor: colors.background.border,
          borderTopWidth: 0,
          height: 56 + insets.bottom,
          //height: spacing.component_size.tabBar + insets.bottom,
          paddingBottom: insets.bottom,
        } */
