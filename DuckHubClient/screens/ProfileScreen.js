import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../components/AppText';

export default function ProfileScreen({ navigation }) {
  const [ducks, setDucks] = useState([

  ]);

  const [profileImage, setProfileImage] = useState(null);

  // Request camera permissions for the first time
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Camera permission is required to take a photo.');
      }
    })();
  }, []);

  // Function to pick a photo (either camera or gallery)
  const pickImage = async () => {
    const options = [
      { text: 'Take a Photo', onPress: () => launchCamera() },
      { text: 'Choose from Gallery', onPress: () => launchGallery() },
      { text: 'Cancel', style: 'cancel' },
    ];
    Alert.alert('Profile Picture', 'Choose a method:', options);
  };

  const launchCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const launchGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // Function to add a new duck
  const addDuck = (newDuck) => {
    setDucks([...ducks, newDuck]);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={{ backgroundColor: '#0D0A07' }}>
      <View style={styles.container}>
        {/* Profile Photo */}
        <TouchableOpacity style={styles.profileImageWrapper} onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.avatar} />
          ) : (
            <Image
              source={{ uri: 'https://img.freepik.com/premium-vector/social-media-logo_1305298-29989.jpg?semt=ais_hybrid&w=740' }} // Default profile image if no photo is added
              style={styles.avatar}
            />
          )}
          <Ionicons name="add" size={32} color="white" style={styles.addIcon} />
        </TouchableOpacity>

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

        {/* DESCRIPTION Section */}
        <View style={styles.description}>
          <AppText weight="alatsi" style={styles.descriptionTitle}>
            About Me
          </AppText>
          <AppText style={styles.descriptionText}>
            I am a passionate developer, constantly learning and building
            projects that excite me. Always exploring new technologies and
            sharing knowledge with the community.
          </AppText>

        </View>


        {/* Ducks Section */}
        <View style={styles.ducksSection}>
          <AppText weight="alatsi" style={styles.myDucks}>
            My Ducks
          </AppText>
          <View style={styles.ducksList}>
            {ducks.map((duck, index) => (
              <TouchableOpacity
                key={index}
                style={styles.duckItem}
                onPress={() =>
                  navigation.navigate('Challenges', {
                    duckName: duck.name,
                    duckImage: duck.image,
                  })
                }
              >
                <Image source={{ uri: duck.image }} style={styles.duckImage} />
                <AppText style={styles.duckName}>{duck.name}</AppText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Add Duck Button */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('AddDuck', { addDuck })}
          >
            <Ionicons name="add" size={48} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0D0A07",
    paddingTop: 60,
  },
  profileImageWrapper: {
    position: 'relative',
    marginBottom: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#28a745',
    borderRadius: 20,
    padding: 5,
  },
  username: {
    fontSize: 22,
    marginBottom: 24,
    color: "white",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    color: "white",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    width: "95%",
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 0.3,
    backgroundColor: "#1C1C1C",
  },
  descriptionTitle: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    color: "white",
    marginBottom: 10,
    textAlign: "left",
  },
  descriptionText: {
    fontSize: 14,
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
  ducksSection: {
    marginTop: 40,
    width: "95%",
    alignItems: "center",
  },
  myDucks: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },
  ducksList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  duckItem: {
    alignItems: "center",
    margin: 10,
  },
  duckImage: {
    width: 130,
    height: 130,
    borderRadius: 40,
    marginBottom: 10,
  },
  duckName: {
    color: 'white',
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#28a745', // green color
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
});