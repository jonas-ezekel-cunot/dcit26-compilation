import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet } from 'react-native';
import SampleModal from './components/SampleModal';

const ACCENT = '#2196F3';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button
          title="CLICK ME"
          color={Platform.OS === 'ios' ? '#FFFFFF' : ACCENT}
          onPress={() => setModalVisible(true)}
        />
      </View>

      <SampleModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonWrapper: {
    width: 110,
    height: 44,
    justifyContent: 'center',
    backgroundColor: ACCENT,
    borderRadius: 4,
    overflow: 'hidden',
  },
});