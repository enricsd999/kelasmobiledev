import { Button, ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Buka Todolist" />
      <Text style={{ textAlign: 'center' }}>Belajar Fetch API</Text>
    </View>
  );
}
