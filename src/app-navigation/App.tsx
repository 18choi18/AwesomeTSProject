import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import HomeScreen from './home/HomeScreen';
import DetailScreen from './detail/DetailScreen';
import Headerless from './detail/Headerless';
import MainScreen from './main/MainScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{}}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({route}) => ({
            title: `상세 정보 - ${route.params.id}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
