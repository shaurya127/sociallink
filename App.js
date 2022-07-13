import { View, Text } from 'react-native'
import React from 'react'
import Username from './screens/username'
import Play from './screens/play'
import Play_tab from './screens/play_tab'
import { NavigationContainer } from '@react-navigation/native';
import Fetch from './screens/Fetch'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from './screens/setting'
import Splash_Screen from "./screens/Spalsh_Screen.js"

const Stack = createNativeStackNavigator();
const App = () => {

  


  return (
    // use spalsh screen to show the app is loading

    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash_Screen" component={Splash_Screen} />
        <Stack.Screen name="username" component={Username} />
        <Stack.Screen name="play" component={Play} />
        <Stack.Screen name="setting" component={Setting} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App