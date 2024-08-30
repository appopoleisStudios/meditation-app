import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  
} from "react-native";
import React from "react";

export default function home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.text}>Silent</Text>
          <Image
            style={styles.logoImg}
            source={require("@/assets/images/logo.png")}
          ></Image>
          <Text style={styles.text}>Moon</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.headingText}>Good Morning, Mridul</Text>
          <Text style={styles.paraText}>We wish you have a good day</Text>
        </View>
        {/* <View style={styles.group2}>
            <View style={styles.cards}></View>
            <View style={styles.cards}></View>
        </View> */}
        <View style={styles.group1}>
          <View style={[styles.card, { backgroundColor: "#8E97FD" }]}></View>
          <View style={[styles.card, { backgroundColor: "#FFC97E" }]}></View>
        </View>
        <View style={styles.card2}>
            <View>
                <Text style={styles.cardHeading}>Daily Thought</Text>
                <Text style={styles.cardText}>MEDITATION . 3-10 MIN</Text>
            </View>
            <Image
            // style={styles.logoImg}
            source={require("@/assets/images/Group 6.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // minHeight: "140vh",
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: "center",
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
  headingText: {
    fontSize: 35,
    fontWeight: 700,
    color: "#3c3e3f",
  },
  textBox: {
    paddingTop: 30,
    flex: 1,
    alignItems: "left",
    gap: 5,
  },
  paraText: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#A1A4B2",
  },
  card: {
    height: 210,
    borderRadius: 12,
    width: "50%",
  },
  group1: {
    padding: 25,
    flex: 1,
    flexDirection: "row",
    gap: 25,
    justifyContent: "center"
  },
  card2: {
    backgroundColor: "#333242",
    marginHorizontal: 14,
    height: 30,
    marginTop: 100,
    borderRadius: 12,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20

  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 700,
    color: "#fff"
  },
  cardText: {
    marginTop: 12,
    fontSize: 12,
    color: "#fff"
  }
// group2: {
//     padding: 25,
//     flex: 1,
//     flexDirection: "row",
//     gap: 25,
//     justifyContent: "center"
// },
// cards: {
//     width: "50%",
//     backgroundColor: "red",
//     height: 10
// }
});
