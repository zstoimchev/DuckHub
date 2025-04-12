import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Image
          source={require("../assets/QuackUpLogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <AppText style={styles.appName}>QuackUp</AppText>
      </View>
      <View style={styles.separatorLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    position: "absolute",
    top: 50,
    zIndex: 10,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  logo: {
    width: 64,
    height: 64,
  },
  appName: {
    fontSize: 18,
    color: "#EFEFEF",
    fontFamily: "Inter_400Regular",
  },
  separatorLine: {
    height: 1,
    width: "100%",
    backgroundColor: "#D98324",
    opacity: 0.5,
  },
});
