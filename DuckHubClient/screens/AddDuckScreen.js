import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddDuckScreen({ route, navigation }) {
  const [duckName, setDuckName] = useState('');
  const [duckImage, setDuckImage] = useState('');

  // Handle adding the duck
  const handleAddDuck = () => {
    if (duckName.trim() === '') {
      alert('Please enter a valid duck narme');
      return;
    }

    const newDuck = {
      name: duckName,
      image: duckImage || 'https://i.pravatar.cc/150?img=1', // Default image if no URL provided
    };

    // Pass new duck data to ProfileScreen
    route.params.addDuck(newDuck);

    // Navigate back to ProfileScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Duck Name"
        value={duckName}
        onChangeText={setDuckName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Duck Image URL"
        value={duckImage}
        onChangeText={setDuckImage}
      />
      <Button title="Add Duck" onPress={handleAddDuck} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#0D0A07',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white',
  },
});