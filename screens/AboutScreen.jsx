import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CounterContext } from '../context/CounterContext';

export default function AboutScreen() {
  const navigation = useNavigation();
  const { count, reset } = useContext(CounterContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Kembali"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={{ textAlign: 'center' }}>About</Text>
      <Text style={{ textAlign: 'center' }}>Counter: {count}</Text>
      <Button title="Reset" onPress={reset} />
    </View>
  );
}
