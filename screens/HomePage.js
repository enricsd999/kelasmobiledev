import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.titleTop}>Welcome</Text>
        <Text style={styles.titleSecond}>Enrico!</Text>
      </View>
      <View style={styles.midContainer}></View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomMenu}>
          <Text style={styles.allText}>Copyright Universitas Klabat</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0c1650',
    alignItems: 'center',
    // padding: 20,
    // justifyContent: "center",
  },
  topContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  midContainer: {
    width: '100%',
    flexDirection: 'column',
    // justifyContent: "space-between",
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomMenu: {
    height:'10%',
    width:'100%',
    flexDirection: 'row',
    backgroundColor: '#000',
    // alignItems: 'center',
    justifyContent: 'center',//Jika direction row, maka ini h align
  },
  label: {
    fontSize: 16,
    color: '#fdec00',
    paddingTop: 15,
  },
  titleTop: {
    fontSize: 72,
    paddingTop: 100,
    fontWeight: 900,
    color: '#Fff',
  },
  titleSecond: {
    fontSize: 32,
    fontWeight: 400,
    color: '#fff',
  },
  fullTextInput: {
    // width: "80%",
    // marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 8,
  },
  button: {
    // backgroundColor: "#0c1650",
    // borderColor: "#fdec00",
    borderWidth: 2,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    padding: 8,
  },
  buttonText: {
    // fontSize:
    color: '#fdec00',
  },
  allText: {
    color: '#fff',
  },
});
