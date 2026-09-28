import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatBubble from './props/ChatBubble';

// Contoh: Chat App sederhana dengan useState + props
//
// - `text`     : state untuk pesan yang sedang diketik di TextInput.
// - `messages` : state array of object, setiap object = satu pesan
//                ({ id, text, fromMe }).
// - Setiap pesan dikirim ke komponen anak <ChatBubble /> lewat props,
//   jadi ChatBubble tidak perlu tahu dari mana data itu berasal,
//   dia cuma menampilkan apa yang diterima lewat props.

export default function App() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Halo, maaf mengganggu waktunya.',
      fromMe: false,
    },
    {
      id: 2,
      text: 'Halo, ada yang bisa dibantu?',
      fromMe: true,
    },
    {
      id: 3,
      text: 'Saya mau reset password SIU.',
      fromMe: false,
    },
  ]);

  const sendMessage = () => {
    if (!text.trim()) return;

    // State array of object tidak diubah langsung, tapi diganti dengan
    // array baru berisi pesan-pesan lama + satu pesan baru (immutability).
    setText('');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Text style={styles.title}>Simple Chat</Text>

        <FlatList
          data={messages}
          keyExtractor={item => String(item.id)}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            // Tiap ChatBubble hanya menerima apa yang diberikan lewat props ini.
            <ChatBubble fromMe={item.fromMe} />
          )}
        />

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            onSubmitEditing={sendMessage}
            placeholder="Ketik pesan..."
            placeholderTextColor="#8A8F98"
            returnKeyType="send"
          />
          <Pressable style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Kirim</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
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
  list: {
    paddingBottom: 16,
    flexGrow: 1,
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: 8,
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
  sendButton: {
    backgroundColor: '#5B6CF9',
    borderRadius: 10,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
});
