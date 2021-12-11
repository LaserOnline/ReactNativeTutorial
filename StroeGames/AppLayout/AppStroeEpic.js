import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppLayoutStroe from './AppLayoutStroe';
import AppLayoutProfile from './AppLayoutProfile';
import AppLayoutBag from './AppLayoutBag';
  
function Feed() {
  return (
    <AppLayoutStroe/>
  );
}

function Profile() {
  return (
    <AppLayoutProfile/>
  );
}

function Notifications() {
  return (
    <AppLayoutBag/>
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
          tabBarLabel: 'Stroe',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={31} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Bag',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={31} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={31} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default function AppStroeEpic() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}