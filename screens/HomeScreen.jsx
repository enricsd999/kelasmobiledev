import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
      <Text style={{ textAlign: 'center' }}>Belajar Fetch API</Text>
    </View>
  );
}
