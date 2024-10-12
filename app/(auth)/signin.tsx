import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // For Google icon
import { Link, router } from "expo-router"; // Using Expo Router's Link

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FFDEE9", "#B5FFFC"]}
        style={styles.gradientBackground}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome Back</Text>

          <TouchableOpacity style={styles.googleButton}>
            <FontAwesome name="google" size={24} color="#FF6F61" />
            <Text style={styles.googleButtonText}>Sign In with Google</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or sign in with email</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#1C1C1E"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#1C1C1E"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.signinButton}
            onPress={() => router.push("/(tabs)/home")}
          >
            <Text style={styles.signinButtonText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.signupText}>
            Don't have an account?{" "}
            <Link href="/signup" style={styles.signupLink}>
              Sign Up
            </Link>
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SigninScreen;

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    color: "#FF6F61", // Coral tone for title
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 15,
  },
  googleButtonText: {
    color: "#FF6F61",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  orText: {
    fontSize: 16,
    color: "#1C1C1E",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginBottom: 15,
    fontSize: 16,
    color: "#1C1C1E",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  signinButton: {
    backgroundColor: "#34D399", // Green for CTA button
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  signinButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  signupText: {
    fontSize: 16,
    color: "#1C1C1E",
    marginTop: 20,
    textAlign: "center",
  },
  signupLink: {
    color: "#FF6F61",
    fontWeight: "bold",
  },
});
