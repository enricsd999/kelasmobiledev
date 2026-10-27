import { useContext, useEffect, useState } from 'react';
import { Button, FlatList, Switch, Text, TextInput, View } from 'react-native';
import { CounterContext } from '../context/CounterContext';

export default function TodolistScreen({ navigation }) {
  const { count, tambah } = useContext(CounterContext);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  // State untuk form edit: id todo yang sedang diedit (null = tidak ada)
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editCompleted, setEditCompleted] = useState(false);

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

  // Tombol Edit ditekan: isi form edit dengan data item tersebut
  function startEdit(item) {
    setEditId(item.id);
    setEditTitle(item.title);
    setEditCompleted(item.completed);
  }
  function cancelEdit() {
    setEditId(null);
    setEditTitle('');
    setEditCompleted(false);
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

      {/* Form edit (PUT), hanya muncul saat tombol Edit ditekan */}
      {editId !== null && (
        <View style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}>
          <Text>Edit Todo #{editId}</Text>
          <TextInput
            placeholder="Judul todo..."
            value={editTitle}
            onChangeText={setEditTitle}
            style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Selesai</Text>
            <Switch value={editCompleted} onValueChange={setEditCompleted} />
          </View>
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
            <Button title="Simpan"  />
            <Button title="Batal" color="gray" onPress={cancelEdit} />
          </View>
        </View>
      )}

      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginVertical: 4,
            }}
          >
            <Text style={{ flex: 1 }}>
              {item.completed ? '[x]' : '[ ]'} {item.title}
            </Text>
            <Button title="Edit" onPress={() => startEdit(item)} />
            <Button title="Hapus" onPress={() => deleteTodos(item.id)} />
          </View>
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
