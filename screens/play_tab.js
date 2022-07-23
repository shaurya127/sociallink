import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  Image,
} from 'react-native';
import { Linking } from 'react-native';
import React, { useEffect,useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-vector-icons/Icon';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';
const {height, width} = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-clipboard/clipboard';
import Share from 'react-native-share';
const Play_tab = ({route,navigation}) => {


  
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };




  const [my_token,settokan] = useState();
    const {user} = route.params;
    console.log(route.params.user);
    
  const url="nocapp.link";

  useEffect(()=>{
    
    messaging().getToken().then(t=>{
      settokan(t)
      
    })
  },[])

  
  const myCustomShare = async() => {
    const shareOptions = {
      message: 'nocap is a new way to get trusted and verified information from the public.\n\nDownload nocap from the link below and get started.\n\n'+url,
      url: `${url}/${user}`,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };


  
  const send_msg = async ()=>{
    try {
     
      const response = await fetch('https://1559-2409-4055-202-875b-81-c377-293d-1245.ngrok.io/alert', {
        method: 'post',
        headers: {
          
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         'tokan':my_token
        })
      })

      const json = await response.json()
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    send_msg()
  },[])
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{flexDirection: 'row', paddingTop: 18, width: width * 0.92}}>
          <Text style={{fontWeight: '800', color: 'black',fontSize:16}}>Step 1 :</Text>
          <Text style={{color: 'black', marginLeft: 5,fontSize:16}}>Copy your link</Text>
        </View>
        <View
          style={{
            width: width * 0.92,
            backgroundColor: '#EAECF0',
            marginTop: 10,
            borderRadius: 50,
            paddingLeft: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            alignItems: 'center',
            paddingVertical: 2,
          }}>
         <Text onPress={() => Linking.openURL(`nocapp.link/${user}`)}>{`nocapp.link/${user}`}</Text>
          
        </View>
        <LinearGradient
            colors={['#0099FF', '#A033FF', '#FF5280', '#FF7061']}
            style={{
              height: height * 0.05,
              width: width * 0.28,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: '700'}} selectable={true}>Copy link</Text>
          </LinearGradient>

        <View style={{width: width * 0.92, marginTop: 30}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: '800', color: 'black',fontSize:16}}>Step 2 :</Text>
            <Text style={{color: 'black', marginLeft: 5,fontSize:16}}>
              Share link on your Instagram Story
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              width: 343,
              height: 359,
              backgroundColor: '#F2F4F7',
              padding: 15,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <LinearGradient
                colors={['#0099FF', '#A033FF', '#FF5280', '#FF7061']}
                style={{
                  height: 30,
                  width: 30,
                  rotation: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white', rotation: -50}}>1</Text>
              </LinearGradient>
              <Text style={{marginLeft: 15, width: width * 0.8}}>
                Click the Sticker Button
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 25,
              }}>
              <LinearGradient
                colors={['#0099FF', '#A033FF', '#FF5280', '#FF7061']}
                style={{
                  height: 30,
                  width: 30,
                  rotation: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white', rotation: -50}}>2</Text>
              </LinearGradient>
              <Text style={{marginLeft: 15, width: width * 0.8}}>
                Click the link sticker
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 25,
              }}>
              <LinearGradient
                colors={['#0099FF', '#A033FF', '#FF5280', '#FF7061']}
                style={{
                  height: 30,
                  width: 30,
                  rotation: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white', rotation: -50}}>3</Text>
              </LinearGradient>
              <Text style={{marginLeft: 15, width: width * 0.8}}>
                Paste your Link!
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 25,
              }}>
              <LinearGradient
                colors={['#0099FF', '#A033FF', '#FF5280', '#FF7061']}
                style={{
                  height: 30,
                  width: 30,
                  rotation: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: 'white',
                    rotation: -50,
                    justifyContent: 'center',
                  }}>
                  4
                </Text>
              </LinearGradient>
              <Text style={{marginLeft: 15, width: width * 0.8}}>
                Frame The link
              </Text>
            </View>

                  <View style={{marginTop:20}}>
                  <LinearGradient
              colors={['#0099FF', '#A033FF', '#FF5280', '#FF7061']}
              style={{
                padding: 10,
                width: 311,
                height: 58,
                borderRadius: 100,
                top: 19,
              }}>
              <Text style={{fontSize:24,fontWeight:'700',color:'#FFFFFF',display:'flex',alignItems:'center',lineHeight:24,marginLeft:'auto',marginRight:'auto',top:10}} onPress={myCustomShare}> Share!</Text>
            </LinearGradient>
                  </View>
          
          </View>
        </View>
      </View>
    </View>
  );
};

export default Play_tab;

const styles = StyleSheet.create({
  sharebutton: {
    marginTop: 20,
  },
});
