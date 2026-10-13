import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';

export default function TodolistScreen() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

 

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ textAlign: 'center' }}>To Do List</Text>
      <Button title="Kembali ke Home" />
    </View>
  );
}
