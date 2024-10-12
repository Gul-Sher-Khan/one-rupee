import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Animated,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Using FontAwesome for placeholder icons

const organizations = [
  { id: "1", name: "Organization A", icon: "building" },
  { id: "2", name: "Organization B", icon: "institution" },
  { id: "3", name: "Organization C", icon: "bank" },
  { id: "4", name: "Organization D", icon: "university" },
];

const Home = () => {
  const [scaleValue] = useState(new Animated.Value(1)); // State for button scale
  const [currentOrg, setCurrentOrg] = useState(0); // Track the currently visible organization
  const [streak, setStreak] = useState(5); // Example streak of 5 days for giving

  // Auto-switch organizations every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOrg((prevOrg) => (prevOrg + 1) % organizations.length);
    }, 3000); // Change organization every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  // Transfer function for button press
  const transferRupee = () => {
    setStreak(streak + 1); // Increase the streak for every successful transfer
    Alert.alert("Success", "You have transferred one Pakistani rupee!", [
      { text: "OK" },
    ]);
  };

  // Animation for button press
  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => transferRupee());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Streak Counter */}
        <View style={styles.streakCounter}>
          <FontAwesome name="fire" size={30} color="#ff7043" />
          <Text style={styles.streakText}>{streak} Day Streak</Text>
        </View>

        {/* Auto-changing Organization Display */}
        <Animated.View style={[styles.orgPopup, { opacity: scaleValue }]}>
          <FontAwesome
            name={organizations[currentOrg].icon as any}
            size={28}
            color="#38b2ac"
          />
          <Text style={styles.orgText}>{organizations[currentOrg].name}</Text>
        </Animated.View>

        {/* Center Title */}
        <Text style={styles.title}>Send Money</Text>

        {/* Circular Button in the Middle */}
        <Animated.View
          style={[styles.buttonWrapper, { transform: [{ scale: scaleValue }] }]}
        >
          <TouchableOpacity
            style={styles.circularButton}
            onPress={animateButton}
          >
            <Text style={styles.buttonText}>₨1</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Calendar-like Motivation Section */}
        <View style={styles.calendarWrapper}>
          <Text style={styles.calendarTitle}>Your Giving History</Text>
          <View style={styles.calendar}>
            {Array(7)
              .fill(0)
              .map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.calendarDay,
                    index < streak ? styles.activeDay : styles.inactiveDay,
                  ]}
                />
              ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f9fa",
    paddingTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f9fa", // Light background
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    letterSpacing: 1.5,
    color: "#38b2ac",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  buttonWrapper: {
    borderRadius: 100,
    overflow: "hidden",
    elevation: 10, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 5,
  },
  circularButton: {
    backgroundColor: "#38b2ac",
    width: 150, // Full circle
    height: 150,
    borderRadius: 75, // Half the size of the button to make it circular
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },

  /* Streak Counter */
  streakCounter: {
    position: "absolute",
    top: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
  },
  streakText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff7043",
    marginLeft: 10,
  },

  /* Organization Popup */
  orgPopup: {
    position: "absolute",
    top: 80,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#38b2ac",
  },
  orgText: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
    color: "#333",
  },

  /* Calendar for Giving History */
  calendarWrapper: {
    position: "absolute",
    bottom: 50,
    width: "90%",
    alignItems: "center",
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#38b2ac",
    marginBottom: 10,
  },
  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  calendarDay: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ddd",
    borderColor: "#fff",
    borderWidth: 1,
    elevation: 3,
  },
  activeDay: {
    backgroundColor: "#38b2ac",
    borderColor: "#319795",
  },
  inactiveDay: {
    backgroundColor: "#ddd",
  },
});
