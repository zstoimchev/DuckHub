// screens/ChallengeDetailScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function ChallengeDetailScreen({ route, navigation }) {
  const { task } = route.params;
  const [imageUri, setImageUri] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    const options = [
      { text: 'Take a Photo', onPress: launchCamera },
      { text: 'Choose from Gallery', onPress: launchGallery },
      { text: 'Cancel', style: 'cancel' },
    ];
    Alert.alert('Add Photo', 'Choose an option:', options);
  };

  const launchCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
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
      setImageUri(result.assets[0].uri);
    }
  };

  const handleDone = async () => {
    if (!imageUri) {
      Alert.alert('No photo selected', 'Please select or take a photo first.');
      return;
    }
  
    setUploading(true);
  
    setTimeout(() => {
      setUploading(false);
      if (route.params?.onComplete) route.params.onComplete(); // Call the completion callback
      Alert.alert('Upload Complete', 'Your challenge has been submitted!');
      navigation.goBack();
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>{task}</Text>
      <Text style={styles.description}>Upload a photo of your duck completing this challenge.</Text>

      {/* Image Picker */}
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Ionicons name="camera" size={36} color="#fff" />
        )}
      </TouchableOpacity>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton} onPress={handleDone} disabled={uploading}>
        {uploading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.doneButtonText}>Done</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0A07',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  imagePicker: {
    backgroundColor: '#2d2d2d',
    width: 130,
    height: 130,
    borderRadius: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#444',
    marginBottom: 30,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  doneButton: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});