import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { CounterContext } from '../context/CounterContext';

export default function HomeScreen({ navigation }) {
  const { count, tambah, kurang } = useContext(CounterContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center' }}>Counter: {count}</Text>
      <Button title="Tambah" onPress={tambah} />
      <Button title="Kurang" onPress={kurang} />
      <Button
        title="Buka Todolist"
        onPress={() => {
          navigation.navigate('Todolist');
        }}
      />
      <Button
        title="Buka About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
    </View>
  );
}
