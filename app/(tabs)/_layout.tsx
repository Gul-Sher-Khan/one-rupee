import { Tabs } from "expo-router";
import React from "react";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Hide labels to focus on icons
        tabBarStyle: {
          backgroundColor: "#FFF", // White background for clean look
          borderTopWidth: 0, // No border for modern design
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 10, // For shadow effect
          height: 65, // Taller tab bar for better interaction
        },
        tabBarActiveTintColor: "#FF6F61", // Active tab icon color (coral)
        tabBarInactiveTintColor: "#1C1C1E", // Inactive tab icon color (dark)
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerShown: false, // Hide default header for cleaner look
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="receipt-long" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
