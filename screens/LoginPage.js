import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.titleTop}>UNKLAB</Text>
        <Text style={styles.titleSecond}>Perwalian</Text>
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.fullTextInput} placeholder="Value" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.fullTextInput} placeholder="Value" />
        {/* <Button buttonStyle={styles.button} title="Press"/> */}
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#ddd" : "#0c1650",
              borderColor: pressed ? "#ddd" : "#fdec00",
              // transform: [{ scale: pressed ? 0.95 : 1 }],
            },
            styles.button,
          ]}
          onPress={() => {navigation.navigate("Home")}}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.allText}>Copyright Universitas Klabat</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0c1650",
    alignItems: "center",
    padding: 20,
    // justifyContent: "center",
  },
  topContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  midContainer: {
    width: "100%",
    flexDirection: "column",
    // justifyContent: "space-between",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 16,
    color: "#fdec00",
    paddingTop: 15,
  },
  titleTop: {
    fontSize: 72,
    paddingTop: 100,
    fontWeight: 900,
    color: "#Fff",
  },
  titleSecond: {
    fontSize: 32,
    fontWeight: 400,
    color: "#fff",
  },
  fullTextInput: {
    // width: "80%",
    // marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 8,
  },
  button: {
    // backgroundColor: "#0c1650",
    // borderColor: "#fdec00",
    borderWidth: 2,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    padding: 8,
  },
  buttonText: {
    // fontSize:
    color: "#fdec00",
  },
  allText: {
    color: "#fff",
  },
});
