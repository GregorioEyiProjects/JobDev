//app/(tabs)/_layout.jsx

import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { colors, typography, spacing } from "./src/theme/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";

import { styles } from "./src/styles/type.styles";

function TabIcon({ name, label, focused, color }) {
  return (
    <View style={styles.tabItem}>
      <Ionicons
        name={name}
        size={22}
        color={color}
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
              label="Perfil"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

/* {
          backgroundColor: colors.background.base,
          borderTopColor: colors.background.border,
          borderTopWidth: 0,
          height: 56 + insets.bottom,
          //height: spacing.component_size.tabBar + insets.bottom,
          paddingBottom: insets.bottom,
        } */
