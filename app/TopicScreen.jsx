import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

export default function TopicScreen() {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <ImageBackground
        source={require("@/assets/images/Union.png")}
        resizeMode="cover"
        style={styles.imageBG}
      >
        <View style={styles.textBox}>
          <Text style={styles.headingText}>What Brings you</Text>

          <Text style={styles.headingText2}>to Silent Moon?</Text>
          <Text style={styles.paraText}>choose a topic to focuse on:</Text>

          {/* <TouchableOpacity>
            <Pressable style={styles.button} onPress={()=>console.log("tap")}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </Pressable>
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
      <View style={styles.cardContainer}>
        <View style={{ width: "50%", gap: 30 }}>
          <View onPress={()=>navigation.navigate('(tabs)/home')} style={styles.longCard}></View>
          <View onPress={()=>navigation.navigate('home')} style={styles.smallCard}></View>
          <View style={styles.longCard}></View>
          <View style={styles.smallCard}></View>
          <View style={styles.longCard}></View>
          <View style={styles.smallCard}></View>
        </View>
        <View style={{ width: "50%", gap: 30 }}>
          <View onPress={()=>navigation.navigate('home')} style={styles.smallCard}></View>
          <View onPress={()=>navigation.navigate('home')} style={styles.longCard}></View>
          <View style={styles.smallCard}></View>
          <View style={styles.longCard}></View>
          <View style={styles.smallCard}></View>
          <View style={styles.longCard}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  longCard: {
    width: "100%",
    height: 210,
    backgroundColor: "#FFCF86",
    borderRadius: 12,
  },
  smallCard: {
    width: "100%",
    height: 167,
    backgroundColor: "#8E97FD",
    borderRadius: 12,
  },
  cardContainer: {
    overflow: "scroll",
    minHeight: "100vh",
    flex: 1,
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#8e97f3",
    alignItems: "center",
    minHeight: "150vh",
  },
  imageBG: {
    width: "100%",
    //   paddingHorizontal: 25,
    marginTop: 10,
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
    color: "#3F414E",
    lineHeight: 20,
  },
  headingText2: {
    fontSize: 35,
    fontWeight: 400,
    color: "#3F414E",
    marginBottom: 10,
  },
  paraText: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "#A1A4B2",
  },
  textBox: {
    paddingTop: 60,
    flex: 1,
    alignItems: "left",
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
    fontWeight: 500,
  },
  bottomText: {
    fontSize: 15,
    fontWeight: 500,
    color: "#787e80",
  },
});
