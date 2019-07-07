/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';


export default class App extends Component<Props> {


    constructor(props) {
      super(props);

    }

    // BEGIN CAMERA OPEN
    openCameraForQr=(event) => {
        this.props.navigation.navigate('QRCamera',{ fromview:'qr',
        });
    }
    // END CAMERA OPEN

    // BEGIN GENERATE QR SCREEN OPEN
    opengeneratebarcode=(event) => {
        this.props.navigation.navigate('QRGenerate');
    }
    // END GENERATE QR SCREEN OPEN

    render() {

    return (
      <View style={styles.container}>

          {/* BEGIN OPEN CAMERA BUTTON */}
          <TouchableOpacity style={{margin: 10, marginBottom: 0,backgroundColor:'#FF5000',height:40,width:200, borderRadius:10}} activeOpacity = { 1 } onPress={this.openCameraForQr} >
              <Text style={{color:'white',fontSize:15,textAlign:'center',marginTop:10}}>Scan QR</Text>
          </TouchableOpacity>
          {/* END OPEN CAMERA BUTTON */}

          {/* BEGIN GENERATE QR BUTTON */}
          <TouchableOpacity style={{margin: 10, marginBottom: 0,backgroundColor:'#FF5000',height:40,width:200, borderRadius:10}} activeOpacity = { 1 } onPress={this.opengeneratebarcode} >
              <Text style={{color:'white',fontSize:15,textAlign:'center',marginTop:10}}>Generate QR</Text>
          </TouchableOpacity>
          {/* END GENERATE QR BUTTON */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
