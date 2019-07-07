/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';



export default class App extends Component<Props> {

      // BEGIN CAMERA OPEN
      openbarcode=(event) => {
          this.props.navigation.navigate('BarcodeCamera');
      }
      // END CAMERA OPEN

      // BEGIN GENERATE BARCODE SCREEN OPEN
      opengeneratebarcode=(event) => {
          this.props.navigation.navigate('Barcode');
      }
      // END GENERATE BARCODE SCREEN OPEN


      render() {
          return (

            <View style={styles.container}>

                {/* BEGIN OPEN CAMERA BUTTON */}
                <TouchableOpacity style={{margin: 10, marginBottom: 0,backgroundColor:'#FF5000',height:40,width:200, borderRadius:10}} activeOpacity = { 1 } onPress={this.openbarcode} >
                  <Text style={{color:'white',fontSize:15,textAlign:'center',marginTop:10}}>Scan Barcode</Text>
                </TouchableOpacity>
                {/* END OPEN CAMERA BUTTON */}

                {/* BEGIN GENERATE BARCODE BUTTON */}
                <TouchableOpacity style={{margin: 10, marginBottom: 0,backgroundColor:'#FF5000',height:40,width:200, borderRadius:10}} activeOpacity = { 1 } onPress={this.opengeneratebarcode} >
                  <Text style={{color:'white',fontSize:15,textAlign:'center',marginTop:10}}>Generate Barcode</Text>
                </TouchableOpacity>
                {/* END GENERATE BARCODE BUTTON */}

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
