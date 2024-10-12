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
import { router } from "expo-router";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FFDEE9", "#B5FFFC"]}
        style={styles.gradientBackground}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Create Your Account</Text>

          <TouchableOpacity style={styles.googleButton}>
            <FontAwesome name="google" size={24} color="#FF6F61" />
            <Text style={styles.googleButtonText}>Sign Up with Google</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or sign up with email</Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#1C1C1E"
            value={name}
            onChangeText={setName}
          />

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
            placeholder="Phone Number"
            placeholderTextColor="#1C1C1E"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#1C1C1E"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text
              style={styles.loginLink}
              onPress={() => router.push("/signin")}
            >
              Log In
            </Text>
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignupScreen;

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
    color: "#FF6F61",
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
  signupButton: {
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
  signupButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginText: {
    fontSize: 16,
    color: "#1C1C1E",
    marginTop: 20,
    textAlign: "center",
  },
  loginLink: {
    color: "#FF6F61",
    fontWeight: "bold",
  },
});
