// import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView } from "react-native";
// import React from "react";
// import Ionicons from '@expo/vector-icons/Ionicons';
// export default function meditate() {
//   return (
//     <ScrollView >
//       <View style={styles.textBox}>
//         <Text style={styles.headingText}>Meditate</Text>
//         <Text style={styles.paraText}>
//           we can learn how to recognize when our minds are doing their normal
//           everyday acrobatics.
//         </Text>
//       </View>
//       <ScrollView horizontal={true} style={styles.menu}>
//         <View>
//           <View style={styles.menuButton}>
//             <Image
//               // style={styles.logoImg}
//               source={require("@/assets/images/all.png")}
//             />
//           </View>
//           <Text style={styles.menuText}>All</Text>
//         </View>
//         <View>
//           <View style={styles.menuButton}>
//             <Image
//               // style={styles.logoImg}
//               source={require("@/assets/images/my.png")}
//             />
//           </View>
//           <Text style={styles.menuText}>My</Text>
//         </View>
//         <View>
//           <View style={styles.menuButton}>
//             <Image
//               // style={styles.logoImg}
//               source={require("@/assets/images/anxious.png")}
//             />
//           </View>
//           <Text style={styles.menuText}>Anxious</Text>
//         </View>
//         <View>
//           <View style={styles.menuButton}>
//             <Image
//               // style={styles.logoImg}
//               source={require("@/assets/images/sleep.png")}
//             />
//           </View>
//           <Text style={styles.menuText}>Sleep</Text>
//         </View>
//         <View>
//           <View style={styles.menuButton}>
//             <Image
//               // style={styles.logoImg}
//               source={require("@/assets/images/kids.png")}
//             />
//           </View>
//           <Text style={styles.menuText}>Kids</Text>
//         </View>
//       </ScrollView>
//        <View style={styles.card2}>
//         <View>
//           <Text style={styles.cardHeading}>Daily Calm</Text>
//           <Text style={styles.cardText}>APR 30 . PAUSE PRACTICE</Text>
//         </View>
//         <Ionicons name="play-circle" size={50} color="black" />
//       </View>
//       <View style={styles.cardContainer}>
//         <View style={{ width: "50%", gap: 30 }}>
//           <View style={styles.longCard}></View>
//           <View style={styles.smallCard}></View>
//           <View style={styles.longCard}></View>
//           <View style={styles.smallCard}></View>
//           <View style={styles.longCard}></View>
//           <View style={styles.smallCard}></View>
//         </View>
//         <View style={{ width: "50%", gap: 30 }}>
//           <View style={styles.smallCard}></View>
//           <View style={styles.longCard}></View>
//           <View style={styles.smallCard}></View>
//           <View style={styles.longCard}></View>
//           <View style={styles.smallCard}></View>
//           <View style={styles.longCard}></View>
//         </View>
//       </View> 
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 15
//   },
//   headingText: {
//     fontSize: 35,
//     fontWeight: 700,
//     color: "#3c3e3f",
//   },
//   textBox: {
//     padding: 30,
//     flex: 1,
//     alignItems: "center",
//     gap: 5,
//   },
//   paraText: {
//     fontSize: 20,
//     fontWeight: "semibold",
//     color: "#A1A4B2",
//     textAlign: "center",
//   },
//   menu: {
//     paddingHorizontal: 15,
//     marginTop: 70,
//   },
//   menuButton: {
//     maxHeight: 80,
//     width: 90,
//     backgroundColor: "#A0A3B1",
//     borderRadius: 15,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   menuText: {
//     color: "#A1A4B2",
//     textAlign: "center",
//   },
//   card2: {
//     backgroundColor: "#f1ddcf",
//     marginHorizontal: 20,
//     maxHeight: 100,
//     // paddingVertical: 20,
//     marginTop: 20,
//     borderRadius: 12,
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   cardHeading: {
//     fontSize: 24,
//     fontWeight: 700,
//     color: "#3F414E",
//     marginBottom: 10,
//   },
//   cardText: {
//     fontSize: 12,
//     color: "#3F414E",
//   },
//   longCard: {
//     width: "100%",
//     height: 210,
//     backgroundColor: "#FFCF86",
//     borderRadius: 12,
//   },
//   smallCard: {
//     width: "100%",
//     height: 167,
//     backgroundColor: "#8E97FD",
//     borderRadius: 12,
//   },
//   cardContainer: {
//     overflow: "scroll",
//     minHeight: "100vh",
//     flex: 1,
//     flexDirection: "row",
//     gap: 30,
//     justifyContent: "center",
//     paddingVertical: 30,
//     paddingHorizontal: 30,
//   },
// });

import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Meditate() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.textBox}>
          <Text style={styles.headingText}>Meditate</Text>
          <Text style={styles.paraText}>
            We can learn how to recognize when our minds are doing their normal
            everyday acrobatics.
          </Text>
        </View>
        <ScrollView horizontal={true} style={styles.menu}>
          <View>
            <View style={styles.menuButton}>
              <Image
                style={styles.logoImg}
                source={require("@/assets/images/all.png")}
              />
            </View>
            <Text style={styles.menuText}>All</Text>
          </View>
          <View>
            <View style={styles.menuButton}>
              <Image
                style={styles.logoImg}
                source={require("@/assets/images/my.png")}
              />
            </View>
            <Text style={styles.menuText}>My</Text>
          </View>
          <View>
            <View style={styles.menuButton}>
              <Image
                style={styles.logoImg}
                source={require("@/assets/images/anxious.png")}
              />
            </View>
            <Text style={styles.menuText}>Anxious</Text>
          </View>
          <View>
            <View style={styles.menuButton}>
              <Image
                style={styles.logoImg}
                source={require("@/assets/images/sleep.png")}
              />
            </View>
            <Text style={styles.menuText}>Sleep</Text>
          </View>
          <View>
            <View style={styles.menuButton}>
              <Image
                style={styles.logoImg}
                source={require("@/assets/images/kids.png")}
              />
            </View>
            <Text style={styles.menuText}>Kids</Text>
          </View>
        </ScrollView>
        <View style={styles.card2}>
          <View>
            <Text style={styles.cardHeading}>Daily Calm</Text>
            <Text style={styles.cardText}>APR 30 . PAUSE PRACTICE</Text>
          </View>
          <Ionicons name="play-circle" size={50} color="black" />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardColumn}>
            <View style={styles.longCard}></View>
            <View style={styles.smallCard}></View>
            <View style={styles.longCard}></View>
            <View style={styles.smallCard}></View>
            <View style={styles.longCard}></View>
            <View style={styles.smallCard}></View>
          </View>
          <View style={styles.cardColumn}>
            <View style={styles.smallCard}></View>
            <View style={styles.longCard}></View>
            <View style={styles.smallCard}></View>
            <View style={styles.longCard}></View>
            <View style={styles.smallCard}></View>
            <View style={styles.longCard}></View>
          </View>
        </View> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
  headingText: {
    fontSize: 35,
    fontWeight: '700',
    color: "#3c3e3f",
  },
  textBox: {
    padding: 30,
    alignItems: "center",
  },
  paraText: {
    fontSize: 20,
    fontWeight: '600',
    color: "#A1A4B2",
    textAlign: "center",
  },
  menu: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  menuButton: {
    height: 80,
    width: 90,
    backgroundColor: "#A0A3B1",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  menuText: {
    color: "#A1A4B2",
    textAlign: "center",
  },
  card2: {
    backgroundColor: "#f1ddcf",
    marginHorizontal: 20,
    height: 100,
    marginTop: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: '700',
    color: "#3F414E",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 12,
    color: "#3F414E",
  },
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
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    flexWrap: 'wrap',
  },
  cardColumn: {
    width: "48%",
    gap: 20,
  },
});
