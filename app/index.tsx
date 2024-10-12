import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FFDEE9", "#B5FFFC"]}
        style={styles.gradientBackground}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Make a Difference</Text>

          <Text style={styles.subtitle}>
            Your small gesture can change someone's life. With just 1 PKR,
            you're making a meaningful impact on those in need.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(auth)/signup")}
          >
            <Text style={styles.buttonText}>Continue with Email</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  content: {
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 40,
    color: "#FF6F61", // Coral tone for the title
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#1C1C1E", // Darker shade for better contrast
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#34D399", // Vibrant green for CTA
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
