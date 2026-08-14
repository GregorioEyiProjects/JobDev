import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { styles } from "../../src/styles/auth.styles";
import { spacing } from "../../src/theme/index";

export default function ConfirmEmailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.inner, { justifyContent: "center" }]}>
        <Text style={styles.iconText}>📬</Text>

        <Text style={[styles.title, { marginTop: spacing.lg }]}>
          Confirma tu email
        </Text>

        <Text style={[styles.subtitle, { marginBottom: spacing.component.lg }]}>
          Te hemos enviado un enlace de confirmación. Ábrelo para activar tu
          cuenta y luego vuelve a iniciar sesión.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/(auth)/login")}
        >
          <Text style={styles.buttonText}>Ir al login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
