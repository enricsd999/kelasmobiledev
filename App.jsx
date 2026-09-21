import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    {
      key: 1,
      id: 1,
      label: 'Benda 2',
    },
    {
      key: 2,
      id: 2,
      label: 'Benda 3',
    },
  ]);
  const addItems = (txt) => {
    setItems([
      ...items,
      {
        key: Date.now(),
        id: Date.now(),
        label: txt,
      },
    ]);
  };
  const removeItem = (id) => {
    setItems(items.filter((item)=>item.id!==id))
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Item</Text>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            onSubmitEditing={() => addItems(text)}
            placeholder="Enter an item"
            placeholderTextColor="#8A8F98"
            returnKeyType="done"
          />
          <Pressable style={styles.addButton} onPress={() => addItems(text)}>
            <Text style={styles.addButtonText}>Add</Text>
          </Pressable>
        </View>

        <FlatList
          data={items}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No items yet</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.itemRow}>
              <Text style={styles.itemText}>{item.label}</Text>
              <Text style={styles.itemText}>{item.id}</Text>
              <Pressable onPress={()=>removeItem(item.id)}>
                <Text style={styles.removeText}>Remove</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1D29',
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1A1D29',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#5B6CF9',
    borderRadius: 10,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  list: {
    paddingBottom: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#8A8F98',
    marginTop: 24,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 15,
    color: '#1A1D29',
    flex: 1,
    marginRight: 10,
  },
  removeText: {
    color: '#E5484D',
    fontWeight: '600',
    fontSize: 13,
  },
});
