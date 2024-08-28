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
  
  export default function WelcomeScreen() {
    
    return (
      <View style={styles.container}>
        
          <View style={styles.logo}>
          <Text style={styles.text}>Silent</Text>
          <Image
            style={styles.logoImg}
            source={require("@/assets/images/logo2.png")}
          ></Image>
          <Text style={styles.text}>Moon</Text>
          </View>
          
       
        <View style={styles.textBox}>
          <Text style={styles.headingText}>Hii Mridul, Welcome</Text>
          <Text style={styles.headingText2}>to Silent Moon</Text>
          <Text style={styles.paraText}>
          Explore the app, Find some peace of mind to prepare for meditation.
          </Text>
          <Image
            style={styles.GroupImg}
            source={require("@/assets/images/yogaLady.png")}
          />
          <TouchableOpacity>
            <Pressable style={styles.button} onPress={()=>console.log("tap")}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </Pressable>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#8e97f3",
      alignItems: "center",
      minHeight: "150vh",
    },
    imageBG: {
      width: "100%",
      paddingHorizontal: 25,
      paddingTop: 10,
    },
    text: {
      color: "#fff",
      fontWeight: 600,
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
      marginTop: 50,
      marginBottom: 30,
      width: "100%",
    },
    headingText: {
      fontSize: 35,
      fontWeight: 600,
      color: "#FFECCC",
      lineHeight: 20
    },
    headingText2: {
        fontSize: 35,
        fontWeight: 400,
        color: "#FFECCC",
        marginBottom: 30
      },
    paraText: {
      fontSize: 16,
      fontWeight: "semibold",
      textAlign: "center",
      color: "#EBEAEC",
    },
    textBox: {
      paddingTop: 60,
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 25,
      gap: 5,
    },
    button: {
      backgroundColor: "#FFF",
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
      color: "#3F414E",
      letterSpacing: 1,
      fontWeight: 500
    },
    bottomText: {
      fontSize: 15,
      fontWeight: 500,
      color: "#787e80",
    }
  });
  