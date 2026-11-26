import React from 'react';
import { View, Button, Platform, StyleSheet } from 'react-native';

const COLOR = '#2196F3';

export default function AppButton({ title, onPress }) {
  return (
    <View style={styles.wrapper}>
      <Button
        title={title}
        color={Platform.OS === 'ios' ? '#FFFFFF' : COLOR}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    minWidth: 120,
    height: 40,
    justifyContent: 'center',
    backgroundColor: COLOR,
    borderRadius: 4,
    overflow: 'hidden',
  },
});