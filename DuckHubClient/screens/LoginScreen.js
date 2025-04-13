import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import AppText from "../components/AppText";

const { width } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const handleLogin = async () => {
    // Prepare the login data
    const userData = {
      email: 'user@example.com',  // Replace with actual user input for email
      password: 'userpassword'    // Replace with actual user input for password
    };

    try {
      // Send the POST request to the login API endpoint
      const response = await fetch('http://localhost:8081/api/users/login', {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json' // Specify that the body content is JSON
        },
        body: JSON.stringify(userData) // Convert the user data object to a JSON string
      });

      // Check if the response is successful (status code 200-299)
      if (response.ok) {
        const data = await response.json(); // Parse the response body as JSON
        console.log('Login successful:', data);
        // You can now navigate to another page or store the user data, etc.
      } else {
        // Handle login failure (e.g., wrong credentials)
        console.error('Login failed:', response.status, response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during login:', error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/QuackUpLogo.png")}
          style={styles.logo}
        />
        <View style={styles.appNameContainer}>
          <AppText style={styles.quackText}>Quack</AppText>
          <View style={styles.upBox}>
            <AppText style={styles.upText}>Up</AppText>
          </View>
        </View>
      </View>
      <AppText style={styles.title}>Please sign in to continue</AppText>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#EFEFEF80"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#EFEFEF80"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <AppText style={styles.buttonText}>LOGIN</AppText>
      </TouchableOpacity>

      <TouchableOpacity>
        <AppText style={styles.link}>Forgot Password?</AppText>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <AppText style={styles.link}>Don't have an account? Sign up</AppText>
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
  logo: {
    width: width * 0.7,
    height: width * 0.7,
    alignSelf: "center",
  },
  appName: {
    color: "#EFEFEF",
    fontSize: 30,
    textAlign: "center",
    marginTop: -60,
    marginBottom: 30,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  appNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -60,
  },
  quackText: {
    color: "#EFEFEF",
    fontSize: 30,
    fontFamily: "Atlas_400Regular",
    fontWeight: "bold",
  },
  upBox: {
    backgroundColor: "#D98324",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginLeft: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  upText: {
    color: "#0D0A07",
    fontSize: 24,
    fontFamily: "Atlas_400Regular",
    fontWeight: "bold",
  },
});
