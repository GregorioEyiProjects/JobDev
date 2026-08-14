import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { supabase } from "../../services/supabase";
import { useSavedStore } from "../../store/savedStore";
import { getInitials } from "../../utils/formatters";
import { styles } from "../../styles/profile.styles";
import { colors } from "../../theme/index";

export default function SettingRow({
  iconName,
  iconColor,
  iconBg,
  label,
  subtitle,
  onPress,
  danger = false,
  rightIcon,
}) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.rowIcon, { backgroundColor: iconBg }]}>
        <Ionicons name={iconName} size={18} color={iconColor} />
      </View>

      <View style={styles.rowContent}>
        <Text style={[styles.rowLabel, danger && styles.rowLabelDanger]}>
          {label}
        </Text>
        {subtitle ? <Text style={styles.rowSubtitle}>{subtitle}</Text> : null}
      </View>
      {rightIcon ? (
        rightIcon()
      ) : (
        <Ionicons
          name="chevron-forward"
          size={16}
          color={colors.text.secondary}
        />
      )}
    </TouchableOpacity>
  );
}
