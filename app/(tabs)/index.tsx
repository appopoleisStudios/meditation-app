import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>

      <Text style={styles.text}>Silent</Text>
      <Image
        style={styles.logoImg}
        source={require('@/assets/images/logo.png')}
        />
      <Text style={styles.text}>Moon</Text>
        </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    padding: 3
  },
  text: {
    color: "black",
    fontWeight: 500,
    fontSize: 20
  },
  logoImg: {
    height: 20,
    width: 20
  },
  logo: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    gap: 4,
    height: 22,
    alignItems: "center"
  }
});