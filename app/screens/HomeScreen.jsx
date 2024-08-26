import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";

import React from "react";
import imageBG from "@/assets/images/Frame.png";
export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBG}
        resizeMode="cover"
        style={styles.imageBG}
      >
        <View style={styles.logo}>
          <Text style={styles.text}>Silent</Text>
          <Image
            style={styles.logoImg}
            source={require("@/assets/images/logo.png")}
          ></Image>
          <Text style={styles.text}>Moon</Text>
        </View>
        <Image
          style={styles.GroupImg}
          source={require("@/assets/images/Group.png")}
        />
      </ImageBackground>
      <View style={styles.textBox}>
        <Text style={styles.headingText}>We are what we Do</Text>
        <Text style={styles.paraText}>
          Thousand of people are using silent moon for small meditation
        </Text>
        <TouchableOpacity>
          <Pressable style={styles.button} onPress={()=>console.log("tap")}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </Pressable>
        </TouchableOpacity>
        <Text style={styles.bottomText}>
          ALREADY HAVE AN ACCOUNT? LOG IN
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    minHeight: Dimensions.get("screen").height,
  },
  imageBG: {
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  text: {
    color: "#3c3e3f",
    fontWeight: 700,
    fontSize: 20,
    letterSpacing: 2,
    // fontWeight: "semibold"
  },
  logoImg: {
    height: 35,
    width: 35,
  },
  logo: {
    marginTop: 29,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 7,
    maxHeight: 25,
    alignItems: "center",
  },
  GroupImg: {
    marginTop: 100,
    width: "100%",
  },
  headingText: {
    fontSize: 35,
    fontWeight: 700,
    color: "#3c3e3f",
  },
  paraText: {
    fontSize: 15,
    fontWeight: "semibold",
    textAlign: "center",
    color: "#787e80",
  },
  textBox: {
    paddingTop: 100,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    gap: 5,
  },
  button: {
    backgroundColor: "#8E97FD",
    width: 340,
    paddingVertical: 20,
    borderRadius: 38,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
  },
  bottomText: {
    fontSize: 15,
    fontWeight: 500,
    color: "#787e80",
  }
});
