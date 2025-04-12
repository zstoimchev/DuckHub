// screens/HomeScreen.js
import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* Profile Photo */}
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=3" }}
        style={styles.avatar}
      />

      {/* Username */}
      <AppText weight="alatsi" style={styles.username}>
        nikola_dev
      </AppText>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <AppText weight="alatsi" style={styles.statNumber}>
            129
          </AppText>
          <AppText style={styles.statLabel}>Followers</AppText>
        </View>

        <View style={styles.statItem}>
          <AppText weight="alatsi" style={styles.statNumber}>
            94
          </AppText>
          <AppText style={styles.statLabel}>Following</AppText>
        </View>

        <View style={styles.statItem}>
          <AppText weight="alatsi" style={styles.statNumber}>
            32
          </AppText>
          <AppText style={styles.statLabel}>Ducks</AppText>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Login')}>
        <AppText style={styles.buttonText}>LOGOUT</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#",
    paddingTop: 60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  username: {
    fontSize: 22,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    color: "#007AFF",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
});
