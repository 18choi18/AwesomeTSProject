import React, {useCallback, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function MainScreen({navigation}) {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({color, size}) => (
            <Icon name="message" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({}) {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      console.log('mounted');
      return () => {
        console.log('unmounted');
      };
    }, []),
  );
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="open detail 1"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
    </View>
  );
}

function SearchScreen({navigation}) {
  return (
    <View>
      <Text>Search</Text>
      <Button
        title="open detail 1"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
    </View>
  );
}

function NotificationScreen({navigation}) {
  return (
    <View>
      <Text>Notofication</Text>
      <Button
        title="open detail 1"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
    </View>
  );
}

function MessageScreen({navigation}) {
  return (
    <View>
      <Text>Message</Text>
      <Button
        title="open detail 1"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
    </View>
  );
}
