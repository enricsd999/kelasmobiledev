import { useContext, useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { CounterContext } from '../context/CounterContext';

export default function TodolistScreen({ navigation }) {
  const { count, tambah } = useContext(CounterContext);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  // GET: ambil data todo dari JSONPlaceholder saat screen muncul
  useEffect(() => {
    async function getTodos() {
      const response = await fetch('http://192.168.56.1:3001/todos');
      const data = await response.json();
      setTodos(data);
    }
    getTodos();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ textAlign: 'center' }}>To Do List</Text>
      <Text style={{ textAlign: 'center' }}>Counter: {count}</Text>
      <Button title="Tambah" onPress={tambah} />

      {/* Form input + tombol submit (POST) */}
      <TextInput
        placeholder="Tulis todo..."
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}
      />
      <Button title="Submit" />

      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.completed ? '[x]' : '[ ]'} {item.title}
          </Text>
        )}
      />

      <Button
        title="Kembali ke Home"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
