import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import React from 'react';
import ReviewDetails from './screens/reviewdetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './screens/about';




//default App
export default function App(){
  
  return(

<NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>


  )
}


//import HomeStack to navigate
function HomeStack() {
  return (
          <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ title: 'GameZone', headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        }, }}  />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review Details', headerStyle: {
          backgroundColor: '#eee',
          height: 60,

        }, }}  />
<Stack.Screen name="About" component={About} options={{ title: 'About', headerStyle: {
          backgroundColor: '#eee',
          height: 60,

        }, }}  />
        
  </Stack.Navigator>

  );
}

//import AboutStack to navigate
function AboutStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="About" component={About} options={{ title: 'About', headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        }, }}  />
  </Stack.Navigator>

  );
}




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

