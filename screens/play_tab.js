import { StyleSheet, Text, View,Dimensions, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const {height,width} = Dimensions.get('window')
const Play_tab = () => {
  return (
    <View style={{flex:1}}>

        <View style={{alignItems:'center'}}>
     <View style={{flexDirection:'row',paddingTop:18,width:width*.92}}>
        <Text style={{fontWeight:'800',color:'black'}}>
            Step 1 : 
        </Text>
        <Text style={{color:'black',marginLeft:5}}>
            Copy your link
        </Text>
     </View>

     

     <View style={{width:width*.92,backgroundColor:'#EAECF0',marginTop:10,borderRadius:50,paddingLeft:15,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,alignItems:'center',paddingVertical:2}}>
        <TextInput placeholder='link' style={{color:'black',width:width*.6,fontWeight:'600'}}/>
        <LinearGradient
  colors={['#FF0B55', '#FB400E']}
  style={{
    height:height*.05,
    width:width*.28,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    
    }}
   
  
  >
    <Text style={{color:'white',fontWeight:'600'}}> Copy link</Text> 
    </LinearGradient>
     </View>


     <View style={{width:width*.92,marginTop:30}}>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontWeight:'800',color:'black'}}>
            Step 2 : 
        </Text>
        <Text style={{color:'black',marginLeft:5}}>
            Share link on your Instagram Story
        </Text>
      </View>
     
     <View style={{marginTop:15,backgroundColor:'#EAECF0',padding:15,borderRadius:10}}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
       <LinearGradient
  colors={['#FF0B55', '#FB400E']}
  style={{
    height:30,
    width:30,
    rotation:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
    }}
   
  
  >
    <Text style={{color:'white',rotation:-50}}>
      1
    </Text>
    </LinearGradient>
    <Text style={{marginLeft:15,width:width*.8}}>
    Lorem ipsum dolor sit amet , consectetur
    </Text>
        </View>

        <View style={{  flexDirection:'row',alignItems:'center',marginTop:25}}>
       <LinearGradient
  colors={['#FF0B55', '#FB400E']}
  style={{
    height:30,
    width:30,
    rotation:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
    }}
   
  
  >
    <Text style={{color:'white',rotation:-50}}>
      2
    </Text>
    </LinearGradient>
    <Text style={{marginLeft:15,width:width*.8}}>
    Lorem ipsum dolor sit amet , consectetur 
    </Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:25}}>
       <LinearGradient
  colors={['#FF0B55', '#FB400E']}
  style={{
    height:30,
    width:30,
    rotation:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
    }}
   
  
  >
    <Text style={{color:'white',rotation:-50}}>
      3
    </Text>
    </LinearGradient>
    <Text style={{marginLeft:15,width:width*.8}}>
    Lorem ipsum dolor sit amet , consectetur 
    </Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:25}}>
       <LinearGradient
  colors={['#FF0B55', '#FB400E']}
  style={{
    height:30,
    width:30,
    rotation:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
    }}
   
  
  >
    <Text style={{color:'white',rotation:-50, justifyContent:'center'}}>
      4
    </Text>
    </LinearGradient>
    <Text style={{marginLeft:15,width:width*.8}}>
    Lorem ipsum dolor sit amet , consectetur
    </Text>
        </View>
     
     </View>


     </View>
     </View>
    </View>
  )
}

export default Play_tab

const styles = StyleSheet.create({})