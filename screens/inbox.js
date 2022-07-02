import { View, Text, FlatList,Dimensions, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/Entypo'
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
        colors={ ['#FF0B55', '#FB400E']}
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

      <Text style={{marginTop:40,color:'#98A2B3',fontSize:15}}>
        Your inbox is empty
      </Text>
      <Pressable style={{backgroundColor:'black',width:width*.9,borderRadius:50,height:height*.065,marginTop:height*.2,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontWeight:'700',fontSize:17}}>
          Get Messages
        </Text>
      </Pressable>
    </View>

    </View>
  )
}

const Messages = ()=>{
  const data = [{'test':1,'color':true},{'test':2,'color':true},{'test':3,'color':true},{'test':4,'color':true},{'test':5,'color':true},{'test':6},{'test':7},{'test':8},{'test':9},{'test':10},{'test':11},{'test':12}]
  return (
    <View>
    <Text style={{fontSize:12,fontWeight:'500',color:'#98A2B3'}}>10 Messages</Text>

      <FlatList
      numColumns={3}
       data={data}
       renderItem={({item})=>
        <LinearGradient
        colors={item.color ? ['#FF0B55', '#FB400E']:['#D0D5DD','#D0D5DD']}
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
        
        }
       /> 

</View>

  )
}
const Inbox = () => {
 
  return (
    <View style={{flex:1,padding:15}}>
      

      <Messages/>
    </View>
  )
}

export default Inbox