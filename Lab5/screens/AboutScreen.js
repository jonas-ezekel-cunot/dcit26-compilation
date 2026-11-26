import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppButton
        title="GO BACK"
        onPress={() => navigation.navigate('HomeStack', { screen: 'Home' })}
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