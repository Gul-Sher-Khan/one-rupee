import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"; // Icons for categories

const cases = [
  {
    id: "1",
    title: "Child Needs Blood Transfusion",
    location: "Lahore, Pakistan",
    date: "October 10, 2024",
    priority: "High",
    fundAllocated: 80, // 80% of the funds have been raised
  },
  {
    id: "2",
    title: "Poor Father Paying Son’s School Fees",
    location: "Karachi, Pakistan",
    date: "October 12, 2024",
    priority: "Medium",
    fundAllocated: 50,
  },
  {
    id: "3",
    title: "Elderly Man Needs Medicine",
    location: "Islamabad, Pakistan",
    date: "October 14, 2024",
    priority: "Low",
    fundAllocated: 30,
  },
];

const Transactions = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Where Your Donations Are Going</Text>

        {/* Loop through cases */}
        {cases.map((item, index) => (
          <View key={item.id} style={styles.caseCard}>
            {/* Date and Location Row */}
            <View style={styles.caseHeader}>
              <MaterialIcons name="date-range" size={20} color="#38b2ac" />
              <Text style={styles.caseDate}>{item.date}</Text>
              <MaterialIcons
                name="place"
                size={20}
                color="#38b2ac"
                style={styles.caseLocationIcon}
              />
              <Text style={styles.caseLocation}>{item.location}</Text>
            </View>

            {/* Title and Priority */}
            <View style={styles.caseInfo}>
              <Text style={styles.caseTitle}>{item.title}</Text>
              <View style={styles.priorityWrapper}>
                <FontAwesome
                  name="exclamation-circle"
                  size={18}
                  color={
                    item.priority === "High"
                      ? "red"
                      : item.priority === "Medium"
                      ? "orange"
                      : "green"
                  }
                />
                <Text
                  style={[
                    styles.casePriority,
                    {
                      color:
                        item.priority === "High"
                          ? "red"
                          : item.priority === "Medium"
                          ? "orange"
                          : "green",
                    },
                  ]}
                >
                  {item.priority} Priority
                </Text>
              </View>
            </View>

            {/* Fund Progress */}
            <View style={styles.fundProgress}>
              <Text style={styles.progressText}>
                Funds Allocated: {item.fundAllocated}%
              </Text>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressBarFill,
                    { width: `${item.fundAllocated}%` },
                  ]}
                />
              </View>
            </View>

            {/* View More Details Button */}
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>View More Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f9fa", // Light background color
    paddingTop: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 1.2,
    color: "#38b2ac",
  },
  caseCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 5,
  },
  caseHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  caseDate: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginLeft: 5,
  },
  caseLocationIcon: {
    marginLeft: 10,
  },
  caseLocation: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginLeft: 5,
  },
  caseInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  caseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  priorityWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  casePriority: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
  },
  fundProgress: {
    marginBottom: 16,
  },
  progressText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  progressBar: {
    height: 12,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#38b2ac",
    borderRadius: 5,
  },
  detailsButton: {
    backgroundColor: "#319795",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    marginTop: 10,
  },
  detailsButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
});
