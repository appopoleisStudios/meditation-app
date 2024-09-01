import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "expo-router";
import Checkbox from "expo-checkbox";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import imageBG from "@/assets/images/Group 6800.png";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import googleLogo from "@/assets/images/Google.png"
export default function SignUp() {
  const navigation = useNavigation()

  const [isChecked, setChecked] = useState(false);
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={imageBG}
          resizeMode="cover"
          style={styles.imageBG}
        >
          
            <Pressable onPress={() => navigation.navigate('SignUpandSignIn')} style={styles.backButton}>
              <AntDesign name="arrowleft" size={24} color="#3F414E" />
            </Pressable>
          
          <Text style={styles.headingText}>Create your account</Text>

          <Pressable style={styles.button} onPress={() => console.log("tap")}>
            <FontAwesome name="facebook-f" size={24} color="#fff" />
            <Text style={styles.buttonText}>CONTINUE WITH FACEBOOK</Text>
          </Pressable>

          <Pressable
            style={styles.buttonSecond}
            onPress={() => console.log("tap")}
          >
            <Image
              style={styles.logoImg}
              source={require("@/assets/images/Google.png")}
            />
            <Text style={styles.buttonSecondText}>CONTINUE WITH GOOGLE</Text>
          </Pressable>

          <Text style={styles.text2}>OR LOGIN WITH EMAIL</Text>
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Email Address" style={styles.input} />
          <View style={styles.input}>
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              style={styles.inputPassword}
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>
          <View style={styles.policy}>
            <Text style={styles.bottomText}>
              I have read the Privacy Policy
            </Text>
            <Checkbox
              //   style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4630EB" : undefined}
            />
          </View>
          

          <Pressable
            style={styles.LoginButton}
            onPress={()=>navigation.navigate('WelcomeScreen')}
            >
            <Text style={styles.LoginButtonText}>Get Started</Text>
          </Pressable>
        
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  icon: {
    marginLeft: 10,
  },
  imageBG: {
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
    alignItems: "center",
  },
  backButton: {
    position: "relative",
    right: "38%",
    flex: 1,
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#EBEAEC",
    borderRadius: "100%",
  },
  headingText: {
    fontSize: 35,
    fontWeight: 700,
    color: "#3c3e3f",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#7583CA",
    width: 340,
    paddingVertical: 20,
    borderRadius: 38,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonText: {
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 2,
  },
  buttonSecond: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EBEAEC",
    width: 340,
    paddingVertical: 20,
    borderRadius: 38,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonSecondText: {
    fontWeight: "700",
    color: "#3F414E",
    letterSpacing: 2,
  },
  text2: {
    fontSize: 16,
    fontWeight: 700,
    color: "#A1A4B2",
    letterSpacing: 1.5,
  },
  input: {
    backgroundColor: "#F2F3F7",
    width: 340,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    color: "#A1A4B2",
    fontWeight: 400,
    fontSize: 16,
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputPassword: {
    backgroundColor: "#F2F3F7",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    color: "#A1A4B2",
    fontWeight: 400,
    fontSize: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  LoginButton: {
    backgroundColor: "#8E97FD",
    width: 340,
    paddingVertical: 20,
    borderRadius: 38,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  LoginButtonText: {
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 2,
    fontSize: 16,
  },
  text3: {
    fontWeight: 500,
    color: "#3F414E",
  },
  bottomText: {
    fontSize: 15,
    fontWeight: 500,
    color: "#787e80",
    marginTop: 30,
  },
  policy: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 80,
    marginVertical: 20,
  },
});
