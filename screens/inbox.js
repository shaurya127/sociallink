import { View, Text, FlatList,Dimensions, Pressable,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/Entypo'
import firestore from '@react-native-firebase/firestore';

const {height,width} = Dimensions.get('window')


const Empty_inbox = ()=>{
  return (
    <View style={{flex:1,padding:15}}>
    <Text style={{fontSize:12,fontWeight:'500',color:'#98A2B3'}}>0 Messages</Text>
    <View style={{justifyContent:'center',flexGrow:1,alignItems:'center'}}>
      <View style={{ height:height*.15,width:height*.15, backgroundColor:'white',shadowColor:'grey',elevation:10,borderRadius:10,shadowOffset:{height:1,width:2}}} >
      <View style={{flexGrow:1}}/>
      <View style={{width:height*.15,flexDirection:'row',justifyContent:'flex-end'}}>
      <LinearGradient
        colors={ ['#0099FF', '#A033FF','#FF5280','#FF7061']}
        style={{
          height:30,
          width:30,
          marginRight:-10,
          marginBottom:-10,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:80
          }}
        
        
        >
         <Text style={{fontWeight:'500',color:'white',fontSize:18}}>
          0
         </Text>


        </LinearGradient>
        </View>
      </View>
          
      <Text style={{marginTop:40,color:'#98A2B3',fontSize:15,marginBottom:60}}>
        Your inbox is empty
      </Text>
      <LinearGradient
              colors={['#0099FF', '#A033FF', '#FF5280', '#FF7061']}
              style={{
                padding: 10,
                width: 311,
                height: 58,
                borderRadius: 100,
                top: 19,
              }}>
              <Text style={{fontSize:20,fontWeight:'700',color:'#FFFFFF',display:'flex',alignItems:'center',lineHeight:24,marginLeft:'auto',marginRight:'auto',top:10}}> Get Messages</Text>
            </LinearGradient>
    </View>

    </View>
  )
}

const Messages = ({user})=>{
  const [messages,setmessagess] = useState([])
  console.log(user)
  useEffect(() => {
    const subscriber = firestore()
      .collection('userdata')
      .doc(user)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
        const msg = documentSnapshot.data()
        setmessagess( msg.message ?  msg.message:[])
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);
  const data = [{'test':1,'color':true},{'test':2,'color':true},{'test':3,'color':true},{'test':4,'color':true},{'test':5,'color':true},{'test':6,'color':true}]
  return (
    <View>
    <Text style={{fontSize:12,fontWeight:'500',color:'#98A2B3'}}>{messages.length} Messages</Text>

      <FlatList
      numColumns={3}
       data={messages}
       extraData={messages}
       renderItem={({item,index})=>{
        console.log(item)
        return(
          <Pressable onPress={()=>{Alert.alert('Message',messages[index])}}>
          <LinearGradient
          colors={ ['#0099FF', '#A033FF','#FF5280','#FF7061']}
          style={{
            height:width*.26,
            width:width*.26,
            margin:10,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:8
            }}
           
          
          >
  <MaterialCommunityIcons name='mail-with-circle' size={60} color={'white'} />
            </LinearGradient>
          
            </Pressable>
        )
       }
               }
       /> 

</View>

  )
}
const Inbox = ({route}) => {
  const {user}= route.params
  return (
    <View style={{flex:1,padding:15}}>
      

    <Messages user= {user}/>
      {/* <Empty_inbox/> */}
    </View>
  )
}

export default Inbox