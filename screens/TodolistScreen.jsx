import { useContext, useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { CounterContext } from '../context/CounterContext';

export default function TodolistScreen({ navigation }) {
  const { count, tambah } = useContext(CounterContext);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  // GET: ambil data todo dari JSONPlaceholder saat screen muncul
  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const response = await fetch('http://192.168.56.1:3001/todos');
    const data = await response.json();
    setTodos(data);
  }
  async function addTodos() {
    await fetch('http://192.168.56.1:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed }),
    });
    getTodos();
  }
  async function deleteTodos(id) {
    await fetch(`http://192.168.56.1:3001/todos/${id}`, {
      method: 'DELETE',
    });
    getTodos();
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ textAlign: 'center' }}>To Do List</Text>
      <Text style={{ textAlign: 'center' }}>Counter: {count}</Text>
      <Button title="Tambah" onPress={tambah} />

      {/* Form input + tombol submit (POST) */}
      <TextInput
        placeholder="Tulis todo..."
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}
      />
      <Button title="Submit" onPress={() => addTodos()} />

      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.completed ? '[x]' : '[ ]'} {item.title}{' '}
            <Button title="Hapus" onPress={() => deleteTodos(item.id)} />
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
