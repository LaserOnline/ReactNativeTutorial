import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Component from './Apphistory';
import AppSkill from './AppSkill';

  
function Feed() {
  return (
    <Component/>
  );
}

function Profile() {
  return (
    <Text>Hello</Text>
  );
}

function Notifications() {
  return (
    <AppSkill/>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    
<Tab.Navigator
      initialRouteName="Feed"
      activeColor="#FFFFFF"
      barStyle={{ backgroundColor: '#000000' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={31} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Skill',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={31} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppProfile() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}