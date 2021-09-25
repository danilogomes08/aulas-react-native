import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import Experiencia from './src/pages/Experiencia';
import Formacao from './src/pages/Formacao';
import Pessoal from './src/pages/Pessoal';

const Tab = createBottomTabNavigator();
const icons = {
  Home: {
    name: 'planet-outline',
  },
  Experiencia: {
    name: 'briefcase-outline',
  },
  Formacao: {
    name: 'school-outline',
  },
  Pessoal: {
    name: 'person-outline',
  }
};

export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      tabBarOptions={{
        style:{
          backgroundColor: '#fff'
        },
        activeTintColor: '##FF8C00	'
      }}
      >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Experiencia' component={Experiencia} />
      <Tab.Screen name='Formacao' component={Formacao} />
      <Tab.Screen name='Pessoal' component={Pessoal} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
