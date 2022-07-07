import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  Image
  
} from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-vector-icons/Icon';

const {height, width} = Dimensions.get('window');
const Play_tab = () => {

  const send_msg = async ()=>{
    try {
      console.log('start alerting')
      const response = await fetch('https://834d-2409-4055-202-875b-9cea-aa33-bcb8-4d9d.ngrok.io/alert', {
        method: 'post',
        headers: {
          
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstParam: 'yourValue',
          secondParam: 'yourOtherValue'
        })
      })

      const json = await response.json()
      console.log(json)
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
          <TextInput
            placeholder="tre.link/sahil"
            style={{color: 'red', width: width * .6, fontWeight: '600',}}
          />
          <LinearGradient
            colors={['#0099FF', '#A033FF', '#FF5280', '#FF7061']}
            style={{
              height: height * 0.05,
              width: width * 0.28,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: '700'}}>Copy link</Text>
          </LinearGradient>
        </View>

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
              <Text style={{fontSize:24,fontWeight:'700',color:'#FFFFFF',display:'flex',alignItems:'center',lineHeight:24,marginLeft:'auto',marginRight:'auto',top:10}}> Share!</Text>
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
