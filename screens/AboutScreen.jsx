import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Kembali"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={{ textAlign: 'center' }}>About</Text>
    </View>
  );
}
