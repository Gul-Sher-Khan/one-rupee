import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"; // Icons for settings

const Settings = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleNotifications = () =>
    setIsNotificationsEnabled((previousState) => !previousState);
  const toggleTheme = () => setIsDarkTheme((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <FontAwesome name="user-circle-o" size={70} color="#38b2ac" />
          <Text style={styles.profileText}>John Doe</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Notifications Setting */}
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <MaterialIcons name="notifications" size={28} color="#38b2ac" />
            <Text style={styles.settingText}>Enable Notifications</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#38b2ac" }}
            thumbColor={isNotificationsEnabled ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleNotifications}
            value={isNotificationsEnabled}
          />
        </View>

        {/* Dark Theme Setting */}
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <FontAwesome name="moon-o" size={28} color="#38b2ac" />
            <Text style={styles.settingText}>Dark Theme</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#38b2ac" }}
            thumbColor={isDarkTheme ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={isDarkTheme}
          />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Privacy Settings */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <MaterialIcons name="security" size={28} color="#38b2ac" />
            <Text style={styles.settingText}>Privacy Settings</Text>
          </View>
          <MaterialIcons name="chevron-right" size={28} color="#38b2ac" />
        </TouchableOpacity>

        {/* Account Settings */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <FontAwesome name="user-circle-o" size={28} color="#38b2ac" />
            <Text style={styles.settingText}>Account Settings</Text>
          </View>
          <MaterialIcons name="chevron-right" size={28} color="#38b2ac" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e6f7f8", // Gradient effect or soft background color
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    display: "flex",
    justifyContent: "center",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 15,
  },
  settingItem: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
  },
  settingInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 15,
    color: "#333",
  },
});
