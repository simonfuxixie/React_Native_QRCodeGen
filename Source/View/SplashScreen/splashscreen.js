import React, { Component } from 'react';
import { Button,Linking,YellowBox,View, ScrollView,Image,Text,
Platform,StyleSheet, 
Animated,AsyncStorage,
ListView,Alert } from 'react-native';


import { NavigationEvents } from 'react-navigation';
import { PermissionsAndroid } from 'react-native';

import Route from "../../Global/Menu/Route/route.js";


import GlobalInclude from "../../Global/GlobalInclude/globalinclude.js";

// BEGIN REMOVE WARNING
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module WhatsAppShare']);
YellowBox.ignoreWarnings(['Class WhatsAppShare']);
// END REMOVE WARNING



  // BEGIN LOGO ANIMATION
  class ImageLoader extends React.Component {
        state = {
              opacity: new Animated.Value(0),
        }

        onLoad = () => {
          Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
         }

        render() {
          return (
            <Animated.Image
              onLoad={this.onLoad}
              {...this.props}
              style={[
                {
                  opacity: this.state.opacity,
                  transform: [
                    {
                      scale: this.state.opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.85, 1],
                      })
                    },
                  ],
                },
                this.props.style,
              ]}
            />
            );
          }
    }
   // END LOGO ANIMATION

class SplashScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            LoginPage: 0,
            is_loading: 0,
      };

    }

    //BEGIN ANDROID CAMERA PERMISSION
    async requestCameraPermission() {
        try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    'title': 'Barcode Camera Permission',
                    'message': 'Barcode App needs access to your camera '
                }
              )
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("You can use the camera")
              }
              else {
                    console.log("Camera permission denied")
              }
              setTimeout(() => {
                  this.setState({
                                LoginPage : 1,
                                })
              },50);

            } catch (err) {
              console.log("errorrr",err)
            }
    }
    //END ANDROID CAMERA PERMISSION



    componentWillMount(){
          console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed']; // REMOVE WARNING


          let platform = '';
          // BEGIN IOS APP START
          if (Platform.OS == 'ios') {
                setTimeout(() => {
                    this.setState({
                                  LoginPage : 1,
                                  })
                },2000);
          } // END IOS APP START
          else {
                setTimeout(() => {
                this.requestCameraPermission() // FOR ANDROID CAMERA PERMISSION
                },50);
          }
        }


  render() {


    if( this.state.LoginPage == 0 ){
                return (
                  <View style={styles.container}>

                    {/* BEGIN LOGO ANIMATED */}
                    <ImageLoader
                    style={styles.image}
                    source={GlobalInclude.MainLogo}/>
                    {/* END LOGO ANIMATED */}

                  </View>

              );
      }

          else {
            // BEGIN APP
            return <Route />
              }

      }
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:200,
    height: 130,
    resizeMode:'contain',

  }
});
module.exports = SplashScreen;
