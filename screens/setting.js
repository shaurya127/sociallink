import { View, Text,Dimensions, Button } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height,width} = Dimensions.get('window')
const Setting = ({navigation}) => {

  // clear AsyncStorage

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      // show a alert if clear success
     if(AsyncStorage.getItem('userdata')==null){
      alert('clear success')
     }

    } catch (e) {
      console.log(e)
      // clear error
    }
  }

  return (
    <View style={{flex:1}}>
        <View style={{backgroundColor:'white'}}>
        <View style={{flexDirection:'row',marginLeft:10,marginTop:10,marginRight:10,backgroundColor:'white'}}>
      <View style={{alignItems:'center', flexDirection:'row',justifyContent:'space-between',flexGrow:1}}>
      <View style={{flexDirection:'row'}}>
      
       <Icons name='chevron-back' size={24} />
      <Text style={{marginLeft:24,fontWeight:'500',fontSize:16}}>
        Settings
      </Text>

      </View>
      <View>
        <Text style={{fontWeight:'400',fontSize:10}}>
            V.1.0.1
        </Text>
      </View>
      </View>
       </View>
       

  <View style={{marginLeft: 17,marginTop: 16,marginRight: 25,marginBottom: 18}}>
    <Text style={{color:'red',fontWeight:'600',fontSize:16,lineHeight:24}}>
        What is Link ?
    </Text>
        
    <Text style={{
        fontSize:14,
        lineHeight:20,
        fontWeight:'400',
        color:'black'


    }}>
    NGL in a fun way to get anonymous messages from your  friends.
    </Text>
  </View>


  <View style={{marginLeft: 17,marginRight: 25,marginBottom: 31}}>
    <Text style={{color:'red',fontWeight:'600',fontSize:16,lineHeight:24}}>
    How does it work?
    </Text>
        
    <Text style={{
        fontSize:14,
        lineHeight:20,
        fontWeight:'400',
        color:'black'


    }}>
    You can get messages by sharing your NGL link on your story or adding it to ypur bio
You can share it any whare on the internet!
    </Text>
  </View>
  </View>
  <View style={{width,height:8,backgroundColor:'#F9FAFB'}} />

<View style={{backgroundColor:'white',paddingTop:13,paddingBottom:13}}>
    <Text style={{
        fontWeight:'400',
        fontSize:12,
        lineHeight:18,
        color:'#667085',
        marginLeft:17,
        
}}>
        Feedback
    </Text>
    <View style={{
        marginTop:18,
        marginLeft:17,
        marginRight:16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
        }}>
      <View style={{justifyContent:'center',flexDirection:'row'}}>

      
         <LinearGradient
          colors={ ['#0099FF', '#A033FF','#FF5280','#FF7061']}
          style={{
            height:28,
            width:28,
            
            justifyContent:'center',
            alignItems:'center',
            borderRadius:28
            }}
           
          
          >
        <Icons name='star' color={'white'} size={18}/>
            </LinearGradient>
       <Text style={{
        marginLeft:10,
        color:'#344054',
        fontWeight:'500',
        }}>
        Rate Us
       </Text>
       </View>

       <View>
        <Icons name='chevron-forward' size={24} />
       </View>
    </View>
</View>
<View style={{width,height:8,backgroundColor:'#F9FAFB'}} />
    
<View style={{backgroundColor:'white',paddingTop:13,paddingBottom:13}}>
    <Text style={{
        fontWeight:'400',
        fontSize:12,
        lineHeight:18,
        color:'#667085',
        marginLeft:17,
        
}}>
        App
    </Text>
    <View style={{
        marginTop:18,
        marginLeft:17,
        marginRight:16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
        }}>
      <View style={{justifyContent:'center',flexDirection:'row'}}>

      
         <LinearGradient
          colors={ ['#0099FF', '#A033FF','#FF5280','#FF7061']}
          style={{
            height:28,
            width:28,
            
            justifyContent:'center',
            alignItems:'center',
            borderRadius:28
            }}
           
          
          >
        <Icons name='help' color={'white'} size={18}/>
            </LinearGradient>
       <Text style={{
        marginLeft:10,
        color:'#344054',
        fontWeight:'500',
        }}>
        I need help
       </Text>
       </View>

       <View>
        <Icons name='chevron-forward' size={24} />
       </View>

       
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between',flexGrow:1,paddingTop:26,paddingLeft:17,paddingRight:16}}>
    <View style={{justifyContent:'center',flexDirection:'row'}}>

      
<LinearGradient
 colors={ ['#0099FF', '#A033FF','#FF5280','#FF7061']}
 style={{
   height:28,
   width:28,
   
   justifyContent:'center',
   alignItems:'center',
   borderRadius:28
   }}
  
 
 >
<Icons name='lock-closed' color={'white'} size={18}/>
   </LinearGradient>
<Text style={{
marginLeft:10,
color:'#344054',
fontWeight:'500',
}}>
Privacy policy
</Text>
</View>

<View>
<Icons name='chevron-forward' size={24} />
</View>
</View>
</View>
<View style={{width,height:8,backgroundColor:'#F9FAFB'}} />

<View style={{backgroundColor:'white',paddingTop:13,paddingBottom:13,flexGrow:1}}>
    <Text style={{
        fontWeight:'400',
        fontSize:12,
        lineHeight:18,
        color:'#667085',
        marginLeft:17,
        
}}>
        Feedback
    </Text>
    <View style={{
        marginTop:18,
        marginLeft:17,
        marginRight:16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
        }}>
      <View style={{justifyContent:'center',flexDirection:'row'}}>

      
         <LinearGradient
          colors={ ['#0099FF', '#A033FF','#FF5280','#FF7061']}
          style={{
            height:28,
            width:28,
            
            justifyContent:'center',
            alignItems:'center',
            borderRadius:28
            }}
           
          
          >
        <Icons name='arrow-back' color={'white'} size={18}/>
            </LinearGradient>
            
            {/* <Button title='Logout' onPress={()=>{
                clearAsyncStorage();
                // redirect to username screen
                navigation.navigate('username');
            }
            }
            /> */}
            

       <Text  style={{
        marginLeft:10,
        color:'#344054',
        fontWeight:'500',
        }} onPress={()=>{
          clearAsyncStorage();
          // redirect to username screen
          navigation.navigate('username');
      }}>
       Log out
       </Text>
       </View>

       <View>
        <Icons name='chevron-forward' size={24}  onPress={()=>{
                clearAsyncStorage();
                // redirect to username screen
                navigation.navigate('username');
            }}/>
       </View>
    </View>
</View> 
    </View>
  )
}

export default Setting