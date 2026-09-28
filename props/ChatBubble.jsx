import { StyleSheet, View, Text } from 'react-native';

// ChatBubble tidak punya state sendiri. Semua yang ditampilkan
// (teks pesan & posisi bubble) datang dari props yang dikirim App.jsx.
export default function ChatBubble({ text, fromMe }) {
  return (
    <View style={[styles.row, fromMe && styles.rowFromMe]}>
      <View
        style={[
          styles.bubble,
          fromMe ? styles.bubbleFromMe : styles.bubbleFromOther,
        ]}>
        <Text style={[styles.text, fromMe && styles.textFromMe]}>Ada text disini</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  rowFromMe: {
    justifyContent: 'flex-end',
  },
  bubble: {
    maxWidth: '75%',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  bubbleFromOther: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 4,
  },
  bubbleFromMe: {
    backgroundColor: '#5B6CF9',
    borderBottomRightRadius: 4,
  },
  text: {
    fontSize: 15,
    color: '#1A1D29',
  },
  textFromMe: {
    color: '#FFFFFF',
  },
});
