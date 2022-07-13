import React ,{useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import SplashScreen from "../screens/images/SplashScreen.png";
const Splash_Screen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('username');
    }, 1000);
  }, []);

  return (
    <View >
      <Text>Splash Screen</Text>
    </View>
  );
};
export default Splash_Screen;


