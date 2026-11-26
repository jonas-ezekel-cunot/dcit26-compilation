import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Jonas Ezekel D. Cunot</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>20</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Course/Year/Section:</Text>
        <Text style={styles.value}>BS Computer Science, 3rd Year, Section 4</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>About Me:</Text>
        <Text style={styles.value}>
          I love sleeping and playing video games. I have a lot of pets including
          dogs, cats, hamsters, fish, and chickens.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Achievements:</Text>
        <Text style={styles.value}>- Graduated Elementary With High Honor</Text>
        <Text style={styles.value}>- Graduated Junior High School With High Honor</Text>
        <Text style={styles.value}>- Graduated Senior High School With High Honor</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Skills:</Text>
        <Text style={styles.value}>- JavaScript</Text>
        <Text style={styles.value}>- HTML/CSS</Text>
        <Text style={styles.value}>- Java</Text>
        <Text style={styles.value}>- Game Development</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    color: '#333333',
  },
});
