import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import AppText from '../components/AppText';
import { Ionicons } from '@expo/vector-icons';


export default function ChallengesScreen({ route, navigation }) {
  const { duckName, duckImage } = route.params;

  // Sample challenges for easy, medium, and hard levels
  const [challenges, setChallenges] = useState({
    easy: [
      { id: 1, task: 'Take a photo with your duck' },
      { id: 2, task: 'Write code with your duck' },
      { id: 3, task: 'Take a selfie with your duck' },
      { id: 4, task: 'Teach your duck how to swim' },
    ],
    medium: [
      { id: 5, task: 'Share a blog post about your duck' },
      { id: 6, task: 'Write a story with your duck' },
      { id: 7, task: 'Create a video with your duck' },
      { id: 8, task: 'Draw your duck' },
    ],
    hard: [
      { id: 9, task: 'Host a meetup with your duck' },
      { id: 10, task: 'Build an app with your duck' },
      { id: 11, task: 'Give a talk with your duck' },
      { id: 12, task: 'Take your duck on an adventure' },
    ]
  });

  // Handle challenge click (for future development)
  const handleChallengeClick = (task) => {
    Alert.alert('Challenge Clicked', `You clicked on: ${task}`, [
      { text: 'OK' }
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Go back to the previous screen
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>


        {/* Duck info */}
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
              onPress={() => handleChallengeClick(challenge.task)} // Handle click
            >
              <Text style={styles.challengeText}>{challenge.task}</Text>
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
              onPress={() => handleChallengeClick(challenge.task)} // Handle click
            >
              <Text style={styles.challengeText}>{challenge.task}</Text>
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
              onPress={() => handleChallengeClick(challenge.task)} // Handle click
            >
              <Text style={styles.challengeText}>{challenge.task}</Text>
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
    backgroundColor: '#28a745', // Green background for challenges
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'left',
    marginBottom: 10,
    padding: 10,
  },
  challengeText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 10,
  },
});