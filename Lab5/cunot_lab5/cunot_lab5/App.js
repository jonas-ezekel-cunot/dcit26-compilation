import { Text, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const stackOptions = { headerTitleAlign: 'left' };

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>Home</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        screenOptions={{ headerShown: false }}
        drawerContentOptions={{
          activeTintColor: '#2196F3',
          activeBackgroundColor: '#E3F2FD',
        }}
      >
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
          options={{ drawerLabel: 'About' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}