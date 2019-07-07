/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View,TouchableOpacity} from 'react-native';


export default class App extends Component<Props> {

    constructor(props) {
          super(props);
          this.state = {
                        text:this.props.navigation.getParam('scan_result', '')
                       };
          this.openlink = this.openlink.bind(this);
    }

    // BEGIN OPEN URL IN GOOGLE
    openlink=(event) => {
      
          if (this.props.navigation.getParam('view', '') == 'Qr') {
            this.props.navigation.navigate('WebViewFromQr',{
                         search_text:this.state.text
            });
          }else {
            this.props.navigation.navigate('WebViewFromBarcode',{
                         search_text:this.state.text
            });
          }
    }
    // END OPEN URL IN GOOGLE


    render() {
    return (
          <View style={styles.container}>

                    {/* BEGIN BARCODE OR QR RESULT */}
                    <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    underlineColorAndroid='transparent'
                    placeholder="Result"
                    />
                    {/* END BARCODE OR QR RESULT */}

                    {/* BEGIN GOOGLE SEARCH BUTTON */}
                    <TouchableOpacity style={{margin: 10, marginBottom: 0,backgroundColor:'#FF5000',borderRadius:10,height:40,width:200}} activeOpacity = { 1 } onPress={this.openlink} >
                      <Text style={{color:'white',fontSize:15,textAlign:'center',marginTop:10}}>Search in Google</Text>
                    </TouchableOpacity>
                    {/* END GOOGLE SEARCH BUTTON */}

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
  },
  input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
        width:200
    }
});
