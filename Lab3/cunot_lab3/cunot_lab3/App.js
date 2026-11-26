import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Platform,
  StyleSheet,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

const ACCENT = '#6C63FF';
const ITEM_COLORS = ['#6C63FF', '#FF6B8A', '#1FB6A6', '#E67E22'];

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim() === '') return;

    setItems([...items, { id: Date.now().toString(), text: text.trim() }]);
    setText('');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Enter Item"
              placeholderTextColor="#9A94D6"
              value={text}
              onChangeText={setText}
            />
            <View style={styles.buttonWrapper}>
              <Button
                title="ADD"
                color={Platform.OS === 'ios' ? '#FFFFFF' : ACCENT}
                onPress={addItem}
              />
            </View>
          </View>

          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.item,
                  { backgroundColor: ITEM_COLORS[index % ITEM_COLORS.length] },
                ]}
              >
                <Text style={styles.itemText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F3F0FF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: ACCENT,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  buttonWrapper: {
    width: 72,
    height: 44,
    justifyContent: 'center',
    backgroundColor: ACCENT,
    borderRadius: 8,
    overflow: 'hidden',
  },
  item: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});