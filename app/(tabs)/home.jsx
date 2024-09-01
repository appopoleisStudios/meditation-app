import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
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
          <View style={[styles.card, { backgroundColor: "#8E97FD" }]}>
            {/* <Image
            style={styles.cardImg}
            source={require("@/assets/images/Basics.png")}
            height={100}
          /> */}
            <ImageBackground
              source={require("@/assets/images/Basics.png")}
              resizeMode="contain"
              style={styles.imageBG}
            >
              {/* <View>
                <Text style={styles.cardHeading}>Basics</Text>
                <Text style={styles.cardText}>COURSE</Text>
            </View> */}
            </ImageBackground>
          </View>
          <View style={[styles.card, { backgroundColor: "#FFC97E" }]}>
            <ImageBackground
              source={require("@/assets/images/Relaxation.png")}
              resizeMode="cover"
              style={styles.imageBG}
            >
              {/* <View>
                <Text style={styles.cardHeading}>Realaxtion</Text>
                <Text style={styles.cardText}>MUSIC</Text>
            </View> */}
            </ImageBackground>
          </View>
        </View>
        <View style={styles.card2}>
          <View>
            <Text style={styles.cardHeading}>Daily Though</Text>
            <Text style={styles.cardText}>MEDITATION . 3-10 MIN</Text>
          </View>
          <Image
            // style={styles.logoImg}
            source={require("@/assets/images/Group 6.png")}
          />
        </View>
        <Text style={styles.heading2}>Recommended for you</Text>
        <ScrollView horizontal={true}>
          <View style={styles.card3}>
            <Image
              style={{ width: "100%" }}
              source={require("@/assets/images/Group 24.png")}
            />
            <View style={{padding: 5}}>
              <Text style={styles.card3Heading}>Focus</Text>
              <Text style={styles.card3Text}>MEDITATION . 3-10 MIN</Text>
            </View>
          </View>
          <View style={styles.card3}>
            <Image
              style={{ width: "100%" }}
              source={require("@/assets/images/Group 24.png")}
            />
            <View style={{padding: 5}}>
              <Text style={styles.card3Heading}>Happpiness</Text>
              <Text style={styles.card3Text}>MEDITATION . 3-10 MIN</Text>
            </View>
          </View>
          <View style={styles.card3}>
            <Image
              style={{ width: "100%" }}
              source={require("@/assets/images/Group 24.png")}
            />
            <View style={{padding: 5}}>
              <Text style={styles.card3Heading}>Focus</Text>
              <Text style={styles.card3Text}>MEDITATION . 3-10 MIN</Text>
            </View>
          </View>
          <View style={styles.card3}>
            <Image
              style={{ width: "100%" }}
              source={require("@/assets/images/Group 24.png")}
            />
            <View style={{padding: 5}}>
              <Text style={styles.card3Heading}>Happpiness</Text>
              <Text style={styles.card3Text}>MEDITATION . 3-10 MIN</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // minHeight: "140vh",
    paddingHorizontal: 10,
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
    position: "relative",
  },
  group1: {
    marginTop: 20,
    paddingVertical: 25,
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: "row",
    gap: 25,
    justifyContent: "center",
  },
  card2: {
    backgroundColor: "#333242",
    marginHorizontal: 5,
    height: 30,
    marginTop: 120,
    borderRadius: 12,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 700,
    color: "#fff",
  },
  cardText: {
    fontSize: 12,
    color: "#fff",
  },
  card3Heading: {
    fontSize: 24,
    fontWeight: 700,
    color: "#3c3e3f",
    lineHeight: 17
  },
  card3Text: {
    marginTop: 12,
    fontSize: 12,
    color: "#A1A4B2",
    fontWeight: 500

  },
  heading2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3c3e3f",
    marginTop: 30,
    marginBottom: 20,
  },
  cardImg: {
    borderRadius: 12,
  },
  imageBG: {
    flex: 1,
    position: "relative",
    left: 20,
    height: 100,
  },
  card3: {
    width: 162,
    height: 161,
    borderRadius: 12,
    marginRight: 15,
  },
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
