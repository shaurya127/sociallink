import { View, Text,Dimensions ,StatusBar,Pressable,TextInput,Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';



const store_username = async(user,navigation,my_token)=>{
  

  const is_user = await firestore().collection('userdata').doc(user).get();
 if(!is_user.exists){
  await firestore()
  .collection('userdata')
  .doc(user)
  .set({'user':user,
     'message':[],
     'token':my_token
       
})
  
 }
 navigation.navigate('play',{user,my_token})
}

const {height,width} = Dimensions.get('screen')
const Username = ({navigation}) => {
  const [username,setusername] = useState()
  const [my_token,settokan] = useState()
  
  useEffect(()=>{
    messaging().getToken().then(t=>{
     
      settokan(t)
    })
  },[])
 
  
  
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
  <TextInput value={username} onChangeText={(t)=>setusername(t)} placeholderTextColor={'#9EA8B1'} placeholder='@' style={{color:'black',fontWeight:'600',fontSize:16,textAlign:'center',width:width*.6
}}>
  
  </TextInput>
</Pressable>

<Pressable onPress={username ?()=> {
  store_username(username,navigation,my_token)
  }:()=>Alert.alert('Error','Please Fill your instagram username')} style={{backgroundColor:'black',borderRadius:50,width:width*.8,height:53,alignItems:'center',justifyContent:'center',marginTop:19}} >
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