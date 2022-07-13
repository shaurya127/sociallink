import { View, Text,Dimensions,StatusBar, Pressable ,BackHandler,Alert} from 'react-native'
import React,{useEffect}from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Play_tab from './play_tab';
import Inbox from './inbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createMaterialTopTabNavigator();

function MyTabs({user,tokan}) {
    
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor:'#FF0C54',
      tabBarInactiveTintColor:'#98A2B3',
        tabBarLabel : '',
        showIcon: true,
        showLabel: true,
       
        tabBarItemStyle:{flexDirection:'row',alignItems:'center'}
      }}
    >
      <Tab.Screen name="Play" initialParams={{
        'user':user,tokan:tokan
      }} component={Play_tab} options={{ tabBarLabel: '',    tabBarIcon: ({focused})=> 
      <View style={{flexDirection:'row',alignItems:'center',width:width*.4}}>
        <Icons name='ios-arrow-redo-sharp' size={18} color={focused ?'#FF0B55':'#98A2B3'}  />
        <Text style={{color:focused ?'#FF0B55':'#98A2B3',marginLeft:5}}>
          Play
        </Text>
        </View>
        }} />
      
     
      <Tab.Screen name="Inbox"initialParams={{
        'user':user,tokan:tokan
      }} component={Inbox} options={{  tabBarShowLabel:'true' , tabBarIcon: ({focused})=> 
      <View style={{flexDirection:'row',alignItems:'center',width:width*.4}}>
      <MaterialCommunityIcons name='email' size={18} color={focused ?'#FF0B55':'#98A2B3'} style={{justifyContent:'center',alignSelf:'center',}} />
       <Text style={{color:focused ?'#FF0B55':'#98A2B3',marginLeft:5}}>
         Inbox
        </Text>
        </View>
      }}  />
    </Tab.Navigator>
  );
}
const {height,width} = Dimensions.get('screen')
const Play = ({route,navigation}) => {
const {user,my_token} = route.params;
    

useEffect(() => {
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
}, []);
  return (
    <View style={{flex:1}}>
        <StatusBar backgroundColor={'black'} />
      <LinearGradient
    colors={['#0099FF', '#A033FF','#FF5280','#FF7061']}
  style={{
    height:height*.18,
    width,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems:'center'
    }}
   
  
  >
  <View style={{flexDirection:'row',width:width,paddingHorizontal:16,justifyContent:'space-between',marginTop:12}} >
 
 <Pressable onPress={()=>{
     navigation.navigate('setting')
 }}>
 <View style={{borderRadius:40, height:40,width:40, backgroundColor:'rgba(255, 255, 255, 0.2)',alignItems:'center',justifyContent:'center'}}>
 <Icons name='md-settings-sharp' size={30} color={'white'}  />
 </View>
 </Pressable>
 <View style={{flexDirection:'row'}}>
 <View style={{borderRadius:40, height:40,width:40, backgroundColor:'rgba(255, 255, 255, 0.2)',alignItems:'center',justifyContent:'center'}}>
 <Icons name='notifications' size={30} color={'white'}  />
 </View>
 
 <LinearGradient
  colors={['#E7FF09', '#02EFFA']}
  style={{
    height:13,
    width:13,
    borderRadius:13,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:-18
    }}
   
  
  >

<Text style={{textAlign:'center',fontSize:8,fontWeight:'600'}}>
    5
   </Text>
  </LinearGradient>

  </View>


</View>
<Text style={{color:'white',fontWeight:'700',fontSize:20,textAlign:'center',width:width*.7,marginTop:18}}>
Send me anonymous messages!
</Text>




  </LinearGradient>

<MyTabs user={user} tokan={my_token}/>
    </View>
  )
}

export default Play