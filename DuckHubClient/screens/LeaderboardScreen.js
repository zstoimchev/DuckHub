import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import AppText from "../components/AppText";
import Header from "../components/Header";

// Dummy leaderboard data
const dummyLeaderboard = [
  { id: "1", name: "DuckMaster", challengesCompleted: 42 },
  { id: "2", name: "QuackAttack", challengesCompleted: 38 },
  { id: "3", name: "RubberDucky", challengesCompleted: 35 },
  { id: "4", name: "CodeQuacker", challengesCompleted: 28 },
  { id: "5", name: "DebugDuck", challengesCompleted: 25 },
  { id: "6", name: "Feathers", challengesCompleted: 19 },
  { id: "7", name: "WebDuck", challengesCompleted: 15 },
  { id: "8", name: "PixelQuack", challengesCompleted: 12 },
];

export default function LeaderboardScreen({ navigation }) {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.leaderboardItem}
      onPress={() => navigation.navigate("Profile", { userId: item.id })}
    >
      <View style={styles.positionContainer}>
        <AppText style={styles.positionText}>{index + 1}</AppText>
      </View>

      <View style={styles.userInfo}>
        <AppText style={styles.userName}>{item.name}</AppText>
        <AppText style={styles.challengesText}>
          {item.challengesCompleted} challenges
        </AppText>
      </View>

      {index < 3 && (
        <View
          style={[
            styles.medal,
            index === 0 && styles.goldMedal,
            index === 1 && styles.silverMedal,
            index === 2 && styles.bronzeMedal,
          ]}
        >
          <AppText style={styles.medalText}>
            {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
          </AppText>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.header}>
        <AppText style={styles.title}>Global Leaderboard</AppText>
        <AppText style={styles.subtitle}>Top Quackers</AppText>
      </View>

      <FlatList
        data={dummyLeaderboard}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0A07",
    paddingTop: 100,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  title: {
    color: "#EFEFEF",
    fontSize: 24,
    fontFamily: "Alatsi_400Regular",
    marginBottom: 4,
  },
  subtitle: {
    color: "#D98324",
    fontSize: 16,
    opacity: 0.8,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  leaderboardItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  positionContainer: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  positionText: {
    color: "#EFEFEF",
    fontSize: 18,
    fontWeight: "bold",
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    color: "#EFEFEF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  challengesText: {
    color: "#D98324",
    fontSize: 14,
    opacity: 0.8,
  },
  medal: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  goldMedal: {
    backgroundColor: "rgba(255, 215, 0, 0.2)",
  },
  silverMedal: {
    backgroundColor: "rgba(192, 192, 192, 0.2)",
  },
  bronzeMedal: {
    backgroundColor: "rgba(205, 127, 50, 0.2)",
  },
  medalText: {
    fontSize: 18,
  },
});
