import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PRODUCTS = [
  { key: '1', title: 'Xbox', description: 'Built for native 4K gaming at up to 120 FPS with a custom 1TB SSD, backward compatibility across four Xbox generations, and a UHD Blu-ray drive (with a disc-free/digital option also available)', rating: '5/5' },
  { key: '2', title: 'PS5', description: 'Features a compact build, ultra-high-speed SSD, and disc drive support for physical PS5/PS4 games and 4K Blu-rays.', rating: '5/5' },
  { key: '3', title: 'Nintendo Switch', description: 'Nintendo hybrid home and handheld video game console released in June 2025, featuring a larger 7.9-inch 1080p display, magnetic Joy-Con 2 controllers with mouse functionality, and up to 4K 60 fps output when docked.', rating: '4/5' },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Product', { product: item })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ProductScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text>Rating: {product.rating}</Text>
      <Text>{product.description}</Text>
      <Text>Key: {product.key}</Text>
    </View>
  );
}

function Hamburger() {
  return (
    <View style={styles.hamburger}>
      <View style={styles.bar} />
      <View style={styles.bar} />
      <View style={styles.bar} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'left',
            headerLeft: () => <Hamburger />,
          }}
        />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#f2f2f2' },
  item: {
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#eee',
  },
  title: { fontSize: 14, fontWeight: 'bold' },
  hamburger: { justifyContent: 'center', marginRight: 24, marginLeft: 4 },
  bar: { width: 20, height: 2, backgroundColor: '#333', marginVertical: 2.5 },
});