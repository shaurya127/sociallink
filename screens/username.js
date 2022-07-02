import { View, Text,Dimensions ,StatusBar,Pressable,TextInput} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const {height,width} = Dimensions.get('screen')
const Username = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor={'#FF0B55'} />
        <LinearGradient
  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
  locations={[0,0.5,0.6]}
  colors={['#FF0B55', '#FB400E']}
  style={{height,width}}
  >

    <View style={{justifyContent:'center',alignItems:'center',width,height:height*.7}}>
    <Text style={{
      color:'white',fontSize:50,textShadowColor: 'black', textShadowRadius: 2, textShadowOffset: {width: 4, height: -3}}}>
      link
      </Text>

      <View>
        <Text style={{color:'white',fontSize:18,fontWeight:'700'}}>
          Whats your Instagram Username
        </Text>

        <Text style={{color:'#FFFFFF',fontWeight:'400',textAlign:'center',paddingTop:5}}>
        Ex: @sahilalisalmani
        </Text>

      </View>

      <Pressable style={{backgroundColor:'white',borderRadius:50,width:width*.8,height:53,alignItems:'center',justifyContent:'center',marginTop:19}} >
  <TextInput placeholderTextColor={'#9EA8B1'} placeholder='@' style={{color:'black',fontWeight:'600',fontSize:16,textAlign:'center',width:width*.6
}}>
  
  </TextInput>
</Pressable>

<Pressable style={{backgroundColor:'black',borderRadius:50,width:width*.8,height:53,alignItems:'center',justifyContent:'center',marginTop:19}} >
  <Text style={{color:'#FFFFFF',fontWeight:'700'
}}>
   Continue
  </Text>
</Pressable>
 
    </View>
      

      </LinearGradient>
    </View>
  )
}

export default Username