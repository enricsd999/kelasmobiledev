import { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function App() {
  const [kata, setKata] = useState('Kelas Mobile A');
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 32,
          }}
        >
          {kata}
        </Text>
        <Button
          onPress={() => {
            if (kata === 'Mobile A') {
              setKata('Mobile B');
            } else {
              setKata('Mobile A');
            }
          }}
          title="Press this"
        />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 80,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    height: 80,
  },
});
