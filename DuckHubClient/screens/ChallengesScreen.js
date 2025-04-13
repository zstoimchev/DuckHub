import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import AppText from '../components/AppText';
import { Ionicons } from '@expo/vector-icons';

export default function ChallengesScreen({ route, navigation }) {
  const { duckName, duckImage } = route.params;

  const [completedChallengeIds, setCompletedChallengeIds] = useState([]);
  const [challenges, setChallenges] = useState({
    easy: [],
    medium: [],
    hard: [],
  });
  const [loading, setLoading] = useState(false);

  // Fetch challenges from the backend API
  const fetchChallenges = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8081/api/challenges');
      const data = await response.json();
      setChallenges({
        easy: data.EASY || [],
        medium: data.MEDIUM || [],
        hard: data.HARD || [],
      });
    } catch (error) {
      console.error("Error fetching challenges:", error);
      Alert.alert('Error', 'Unable to fetch challenges');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChallenges();
  }, []); // Fetch challenges when the component mounts

  const handleChallengeClick = (id, task) => {
    navigation.navigate('ChallengeDetail', {
      task,
      onComplete: () => setCompletedChallengeIds(prev => [...prev, id]),
    });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Image source={{ uri: duckImage }} style={styles.duckImage} />
        <Text style={styles.duckName}>{duckName}</Text>

        <AppText weight="alatsi" style={styles.title}>Challenges</AppText>

        {/* Easy challenges */}
        <View style={styles.challengeSection}>
          <AppText weight="alatsi" style={styles.sectionTitle}>Easy Challenges</AppText>
          {challenges.easy.map(challenge => (
            <TouchableOpacity
              key={challenge.id}
              style={styles.challengeItem}
              onPress={() => handleChallengeClick(challenge.id, challenge.task)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.challengeText}>{challenge.task}</Text>
                {completedChallengeIds.includes(challenge.id) && (
                  <Ionicons name="checkmark-circle" size={20} color="#28a745" style={{ marginLeft: 10 }} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Medium challenges */}
        <View style={styles.challengeSection}>
          <AppText weight="alatsi" style={styles.sectionTitle}>Medium Challenges</AppText>
          {challenges.medium.map(challenge => (
            <TouchableOpacity
              key={challenge.id}
              style={styles.challengeItem}
              onPress={() => handleChallengeClick(challenge.id, challenge.task)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.challengeText}>{challenge.task}</Text>
                {completedChallengeIds.includes(challenge.id) && (
                  <Ionicons name="checkmark-circle" size={20} color="#28a745" style={{ marginLeft: 10 }} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Hard challenges */}
        <View style={styles.challengeSection}>
          <AppText weight="alatsi" style={styles.sectionTitle}>Hard Challenges</AppText>
          {challenges.hard.map(challenge => (
            <TouchableOpacity
              key={challenge.id}
              style={styles.challengeItem}
              onPress={() => handleChallengeClick(challenge.id, challenge.task)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.challengeText}>{challenge.task}</Text>
                {completedChallengeIds.includes(challenge.id) && (
                  <Ionicons name="checkmark-circle" size={20} color="#28a745" style={{ marginLeft: 10 }} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0A07',
    paddingTop: 40,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  duckName: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  duckImage: {
    marginTop: 30,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  challengeSection: {
    marginBottom: 30,
    width: '90%',
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  challengeItem: {
    width: '100%',
    height: 60,
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  challengeText: {
    color: 'white',
    fontSize: 16,
  },
});