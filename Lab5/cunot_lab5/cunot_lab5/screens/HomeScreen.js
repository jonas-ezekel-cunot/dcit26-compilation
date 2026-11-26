import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppButton
        title="PROFILE"
        onPress={() => navigation.navigate('Profile')}
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

