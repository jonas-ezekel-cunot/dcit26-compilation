import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppButton
        title="GO BACK HOME"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});