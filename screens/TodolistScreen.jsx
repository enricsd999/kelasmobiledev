import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { CounterContext } from '../context/CounterContext';

export default function TodolistScreen({ navigation }) {
  const { count, tambah } = useContext(CounterContext);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ textAlign: 'center' }}>To Do List</Text>
      <Text style={{ textAlign: 'center' }}>Counter: {count}</Text>
      <Button title="Tambah" onPress={tambah} />
      <Button
        title="Kembali ke Home"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
