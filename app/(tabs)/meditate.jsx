import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";

export default function meditate() {
  return (
    <View>
      <View style={styles.textBox}>
        <Text style={styles.headingText}>Meditate</Text>
        <Text style={styles.paraText}>
          we can learn how to recognize when our minds are doing their normal
          everyday acrobatics.
        </Text>
      </View>
      <ScrollView horizontal={true} style={styles.menu}>
        <View>
          <View style={styles.menuButton}>
          <Image
            // style={styles.logoImg}
            source={require("@/assets/images/all.png")}
          />
          </View>
          <Text style={styles.menuText}>All</Text>
        </View>
        <View>
          <View style={styles.menuButton}>
          <Image
            // style={styles.logoImg}
            source={require("@/assets/images/my.png")}
          />
          </View>
          <Text style={styles.menuText}>My</Text>
        </View>
        <View>
          <View style={styles.menuButton}>
          <Image
            // style={styles.logoImg}
            source={require("@/assets/images/anxious.png")}
          />
          </View>
          <Text style={styles.menuText}>Anxious</Text>
        </View>
        <View>
          <View style={styles.menuButton}>
          <Image
            // style={styles.logoImg}
            source={require("@/assets/images/sleep.png")}
          />
          </View>
          <Text style={styles.menuText}>Sleep</Text>
        </View>
        <View>
          <View style={styles.menuButton}>
          <Image
            // style={styles.logoImg}
            source={require("@/assets/images/kids.png")}
          />
          </View>
          <Text style={styles.menuText}>Kids</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    fontWeight: 700,
    color: "#3c3e3f",
  },
  textBox: {
    padding: 30,
    flex: 1,
    alignItems: "center",
    gap: 5,
  },
  paraText: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#A1A4B2",
    textAlign: "center",
  },
  menu: {
    // flex: 1,
    // flexDirection: "row",
    // width: "100%",
    // justifyContent: "space-evenly",
    paddingHorizontal: 15,
    marginTop: 70
  },
  menuButton: {
    height: 60,
    width: 90,
    backgroundColor: "#A0A3B1",
    borderRadius: 15,
    flex: 1,
    justifyContent: "center",
    alignItems :"center",
    marginRight: 15
  },
  menuText: {
    color: "#A1A4B2",
    textAlign: "center"
  }
});
