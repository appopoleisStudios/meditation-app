import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  Dimensions
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import imageBG from "@/assets/images/Group 6800.png";
// import googleLogo from "@/assets/images/Google.png"
export default function SignIn() {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <ImageBackground
        source={imageBG}
        resizeMode="cover"
        style={styles.imageBG}
      >
        <Pressable style={styles.backButton} onPress={() => navigation.navigate('SignUp')}>
          <AntDesign name="arrowleft" size={24} color="#3F414E" />
        </Pressable>
        <Text style={styles.headingText}>Welcome Back!</Text>
       
          <Pressable style={styles.button} onPress={() => console.log("tap")}>
          <FontAwesome name="facebook-f" size={24} color="#fff" />
            <Text style={styles.buttonText}>CONTINUE WITH FACEBOOK</Text>
          </Pressable>
        
        
          <Pressable style={styles.buttonSecond} onPress={() => console.log("tap")}>
          <Image
            style={styles.logoImg}
            source={require("@/assets/images/Google.png")}
          />
            <Text style={styles.buttonSecondText}>CONTINUE WITH GOOGLE</Text>
          </Pressable>
        
        <Text style={styles.text2} >OR LOGIN WITH EMAIL</Text>
        <TextInput placeholder="Email Address" style={styles.input}/>
        <TextInput placeholder="Password" style={styles.input}/>
        
          <Pressable style={styles.LoginButton} onPress={() => navigation.navigate('WelcomeScreen')}>
            <Text style={styles.LoginButtonText}>Login</Text>
          </Pressable>
        
        <Text style={styles.text3}>Forgot Password?</Text>
        <Text style={styles.bottomText}>
          DON'T HAVE AN ACCOUNT?<Text onPress={()=>navigation.navigate('SignUp')} style={styles.link}> SIGN UP</Text>
        </Text>
      </ImageBackground>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    minHeight: Dimensions.get("window").height
  },
  imageBG: {
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
    alignItems: "center"
  },
  backButton: {
    position: "relative",
    right: 150,
    flex: 1,
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
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
    backgroundColor:  "#fff",
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
    letterSpacing: 1.5
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
    color: "#3F414E"
  },
  bottomText: {
    fontSize: 15,
    fontWeight: 500,
    color: "#787e80",
    marginTop: 30,
    marginBottom: 20
  },
  link: {
    color: "#8E97FD"
  }
});
