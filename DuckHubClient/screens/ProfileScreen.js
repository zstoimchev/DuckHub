import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import AppText from '../components/AppText';

export default function ProfileScreen({ navigation }) {
  const [ducks, setDucks] = useState([
    { name: 'Duck 1', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Duck 2', image: 'https://i.pravatar.cc/150?img=2' },
  ]);

  // Function to add a new duck
  const addDuck = (newDuck) => {
    setDucks([...ducks, newDuck]);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Profile Photo */}
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.avatar}
        />

        {/* Username */}
        <AppText weight="alatsi" style={styles.username}>
          nikola_dev
        </AppText>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <AppText weight="alatsi" style={styles.statNumber}>129</AppText>
            <AppText style={styles.statLabel}>Followers</AppText>
          </View>

          <View style={styles.statItem}>
            <AppText weight="alatsi" style={styles.statNumber}>94</AppText>
            <AppText style={styles.statLabel}>Following</AppText>
          </View>

          <View style={styles.statItem}>
            <AppText weight="alatsi" style={styles.statNumber}>32</AppText>
            <AppText style={styles.statLabel}>Ducks</AppText>
          </View>
        </View>

        {/* DESCRIPTION Section */}
        <View style={styles.description}>
          <AppText weight="alatsi" style={styles.descriptionTitle}>
            About Me
          </AppText>
          <AppText style={styles.descriptionText}>
            I am a passionate developer, constantly learning and building projects that excite me. Always exploring new technologies and sharing knowledge with the community.
          </AppText>

          {/* LinkedIn and GitHub */}
          <AppText weight="alatsi" style={styles.descriptionTitle}>
            Connect with me
          </AppText>
          <AppText style={styles.link}>
            LinkedIn: @nikola-dev
          </AppText>
          <AppText style={styles.link}>
            GitHub: @nikola-dev
          </AppText>
        </View>

        {/* Ducks Section */}
        <View style={styles.ducksSection}>
          <AppText weight="alatsi" style={styles.duckTitle}>
            My Ducks
          </AppText>
          <View style={styles.ducksList}>
            {ducks.map((duck, index) => (
              <View key={index} style={styles.duckItem}>
                <Image source={{ uri: duck.image }} style={styles.duckImage} />
                <AppText style={styles.duckName}>{duck.name}</AppText>
              </View>
            ))}
          </View>
        </View>

        {/* Add Duck Button */}
        <Button
          title="Add a Duck"
          onPress={() => navigation.navigate('AddDuck', { addDuck })}
          color="#007AFF"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0A07',
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
    color: 'white',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    color: 'white',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  description: {
    width: '95%',
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 0.3,
    backgroundColor: '#1C1C1C',
  },
  descriptionTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    textAlign: 'left',
  },
  descriptionText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  link: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  ducksSection: {
    marginTop: 40,
    width: '95%',
    alignItems: 'center',
  },
  duckTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  ducksList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  duckItem: {
    alignItems: 'center',
    margin: 10,
  },
  duckImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  duckName: {
    color: 'white',
    fontSize: 14,
  },
});