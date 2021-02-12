import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import React from 'react';
import ReviewDetails from './screens/reviewdetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './screens/about';
import Header from './shared/header';



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
function HomeStack({ navigation }) {
  return (
          <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}  options={{ headerTitle: () => <Header navigation={navigation} title='GameZone'/> , headerStyle: {
          height: 60,
        }, }}  />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'ReviewDetails' , headerStyle: {
          backgroundColor: '#eee',
          height: 60,
          backgroundColor: '#eee',
          height: 60,
        }, }}  />

        
  </Stack.Navigator>

  );
}

//import AboutStack to navigate
function AboutStack({ navigation }) {
  return (
    <Stack.Navigator>
    <Stack.Screen name="About" component={About} options={{ headerTitle: () => <Header navigation={navigation} title='About GameZone' />, headerStyle: {
          height: 60,
        }, }}  />
  </Stack.Navigator>

  );
}




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();