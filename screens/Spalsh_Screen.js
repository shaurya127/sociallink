import React ,{useEffect} from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,StatusBar,SafeAreaView } from 'react-native';
import SplashScreen from "../screens/images/SplashScreen.jpg";
const Splash_Screen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('username');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <ImageBackground source={SplashScreen} style={styles.image}>
       
        </ImageBackground>
    </SafeAreaView>
    );
   
};



export default Splash_Screen;

// add styles
const styles = StyleSheet.create({
    image: {
        width: '100%',
        
        height: '100%',
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },


            

}
);


