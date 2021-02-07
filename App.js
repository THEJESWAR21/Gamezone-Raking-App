import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import React from 'react';
import ReviewDetails from './screens/reviewdetails';


export default function App(){
  return(
    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const Stack = createStackNavigator();

