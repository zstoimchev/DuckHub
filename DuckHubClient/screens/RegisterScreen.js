// screens/RegisterScreen.js
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AppText from "../components/AppText";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Replace with logo later */}
      <AppText style={styles.title}>Please fill the input below here</AppText>

      <TextInput
        style={styles.input}
        placeholder="PLUS NAME"
        placeholderTextColor="#EFEFEF80"
      />
      <TextInput
        style={styles.input}
        placeholder="Jhone williams"
        placeholderTextColor="#EFEFEF80"
      />
      <TextInput
        style={styles.input}
        placeholder="PHONE"
        placeholderTextColor="#EFEFEF80"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="SMALL"
        placeholderTextColor="#EFEFEF80"
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        placeholderTextColor="#EFEFEF80"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="CONFIRM PASSWORD"
        placeholderTextColor="#EFEFEF80"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <AppText style={styles.buttonText}>SIGN UP</AppText>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <AppText style={styles.link}>Already have an account? Sign in</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0A07",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#EFEFEF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#EFEFEF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#D98324",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#EFEFEF",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: "#EFEFEF",
    textAlign: "center",
    opacity: 0.8,
    marginTop: 10,
  },
});
