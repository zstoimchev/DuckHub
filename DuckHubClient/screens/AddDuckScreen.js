import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../components/AppText';

export default function AddDuckScreen({ route, navigation }) {
    const [duckName, setDuckName] = useState('');
    const [duckImage, setDuckImage] = useState(null);

    const pickImage = async () => {
        const options = [
            { text: 'Take a Photo', onPress: () => launchCamera() },
            { text: 'Choose from Gallery', onPress: () => launchGallery() },
            { text: 'Cancel', style: 'cancel' },
        ];
        Alert.alert('Add Duck Photo', 'Choose a method:', options);
    };

    const launchCamera = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!result.canceled) {
            setDuckImage(result.assets[0].uri);
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
            setDuckImage(result.assets[0].uri);
        }
    };

    const handleAddDuck = () => {
        if (duckName.trim() === '') {
            alert('Please enter a valid duck name');
            return;
        }

        const newDuck = {
            name: duckName,
            image:
                duckImage ||
                'https://img.freepik.com/premium-vector/cute-rubber-duck-cartoon-vector-white-background_1023984-4142.jpg',
        };

        route.params.addDuck(newDuck);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <AppText style={styles.title}>Add Your Duck</AppText>
            {/* Duck Image Picker */}
            <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                {duckImage ? (
                    <Image source={{ uri: duckImage }} style={styles.image} />
                ) : (
                    <Ionicons name="add" size={36} color="#fff" />
                )}
            </TouchableOpacity>

            {/* Input for Duck Name */}
            <TextInput
                style={styles.input}
                placeholder="Duck Name"
                placeholderTextColor="#aaa"
                value={duckName}
                onChangeText={setDuckName}
            />

            {/* Add Duck Button */}
            <TouchableOpacity style={styles.addButton} onPress={handleAddDuck}>
                <Text style={styles.addButtonText}>Add Duck</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0A07',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    backButton: {
  position: 'absolute',
  top: 50,  // You can tweak this if needed for safe area
  left: 20,
  zIndex: 10,
  padding: 8,
},
    title: {
        color: "white",
        marginBottom: 50,
        fontSize: 30,
    },
    imagePicker: {
        backgroundColor: '#2d2d2d',
        width: 230,
        height: 230,
        borderRadius: 115,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        borderWidth: 2,
        borderColor: '#444',
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 65,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#1c1c1e',
        borderRadius: 10,
        paddingHorizontal: 15,
        color: 'white',
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#333',
    },
    addButton: {
        backgroundColor: '#28a745',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginTop: 10,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});