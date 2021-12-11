import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
          <Button
              title="GO to Home"
              onPress={()=> navigation.navigate('Home')}
          />
           <Button
              title="GO back to first screen in stack"
              onPress={()=> navigation.popToTop('Home')}
          />
  
          
      </View>
    );
  }


const Stack = createNativeStackNavigator();

function AppHomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: 'blue',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }} 
        />
        <Stack.Screen name="Details" component={DetailScreen}
        options={{
            title: 'Detail',
            headerStyle: {
                backgroundColor: 'blue',
            },
            headerTintColor: 'blue',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppHomeScreen;