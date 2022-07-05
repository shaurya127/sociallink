import { View, Text } from 'react-native'
import React from 'react'
import Username from './screens/username'
import Play from './screens/play'
import Play_tab from './screens/play_tab'
import { NavigationContainer } from '@react-navigation/native';
import Fetch from './screens/Fetch'
const App = () => {
  return (
    <NavigationContainer>
<Play/> 
  </NavigationContainer>
  )
}

export default App