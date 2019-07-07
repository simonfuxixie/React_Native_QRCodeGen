/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput,ScrollView,Dimensions,StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { ColorWheel } from 'react-native-color-wheel';
import Share from 'react-native-share';
import ViewShot from "react-native-view-shot";
import QRCode from 'react-native-qrcode';


let shareImageBase64;
let shareOptions;

// BEGIN QR COLOR DROPDOWN DATA
const QRColor = [{
    label:'Black',
    value: 'black',
  }, {
    label:'Red',
    value: 'red',
  }, {
    label:'Purple',
    value: 'purple',
  }, {
    label:'Yellow',
    value: 'yellow',
  }, {
    label:'Blue',
    value: 'blue',
  }];
  // END QR COLOR DROPDOWN DATA

// BEGIN QR SIZE DROPDOWN DATA
const QRSize = [{
      label:'100',
      value: '100',
    },{
        label:'150',
        value: '150',
      },{
        label:'200',
        value: '200',
      },{
        label:'250',
        value: '250',
      }];
// BEGIN QR COLOR SIZE DATA

var colorsys = require('colorsys') // COLOR CONVERTER

export default class App extends Component<Props> {

  constructor(props) {
      super(props);
      this.state = {
            color:'#000000', // DEFAULT COLOR
            size:'150', // DEFUALT SIZE
            text: '',
            is_show_qr:0,
            showpicker : 0
      };
      this.onChangeQRColor = this.onChangeQRColor.bind(this);
      this.onchangeTextfield = this.onchangeTextfield.bind(this);
      this.onChangeQRSize = this.onChangeQRSize.bind(this);
      this.shareimage = this.shareimage.bind(this);
   }

   // BEGIN ON CHANGE QR COLOR DROPDOWN
   onChangeQRColor(text) {
            this.setState({
                          color :colorsys.hsvToHex(text)
                          })
   }
   // END ON CHANGE QR COLOR DROPDOWN

   // BEGIN GENERATE QR IMAGE SHARE
   shareimage=(event) => {
          this.refs.viewShot.capture().then(uri => {
                shareImageBase64 = {
                    title: "",
                    message: "",
                    url:  "data:image/png;base64,"+uri,
                    subject: ""  //  for email
                  };
                  Share.open(shareImageBase64)
           });
    }
    // END GENERATE QR IMAGE SHARE


    // BEGIN ON CHANGE QR SIZE DROPDOWN
    onChangeQRSize(text) {
            this.setState({
                          size :text,
                          })
    }
    // END ON CHANGE QR SIZE DROPDOWN

    // BEGIN ON CHANGE QR TEXTFIELD
    onchangeTextfield(text){
            this.setState({
                          is_show_qr:0,
                          text:text
                          })
    }
    // END ON CHANGE QR TEXTFIELD

    // BEGIN GENERATE QR IMAGE
    ganerateQR=(event) => {
            this.setState({
                          is_show_qr: 1,
                          showpicker:0
                          })
    }
    // END GENERATE QR IMAGE


    // BEGIN COLOR PICKER
    showcolorpicker=(event) => {
            if (this.state.showpicker == 1) {
              this.setState({
                showpicker : 0
              })
            }else {
              this.setState({
                showpicker : 1
              })
            }
    }
    // END COLOR PICKER


  render() {

    let currentcolor = this.state.color; // DEFUALT COLOR SET ON COLOR PICKER

    return (

      <View style={styles.container}>
              <View>
                      <View style={{alignItems:'center',height:40,backgroundColor:'white',margin:10}}>
                          {/* BEGIN QR TEXTFIELD */}
                          <TextInput
                          style={{alignItems:"center",alignSelf:"center",paddingLeft:5,height:40,width:'100%',fontSize:15,color:'black',textAlign:'left',borderColor:'gray',borderWidth:1}}
                          placeholder='Type here text for generate QR'
                          underlineColorAndroid='transparent'
                          onChangeText={(text) => this.onchangeTextfield(text)}
                          value={this.state.text}
                          />
                          {/* BEGIN QR TEXTFIELD */}
                      </View>

                      <View style={{flexDirection:'row',height:70,backgroundColor:'white',margin:10}}>
                          <View style={{width:'40%',backgroundColor:'white',flexDirection:'row'}}>

                                {/* BEGAN SELECTED COLOR DISPLAY BOX */}
                                <View style={{width:20,backgroundColor:currentcolor,height:42,marginTop:20}}>

                                </View>
                                {/* END SELECTED COLOR DISPLAY BOX */}

                                {/* BEGIN COLOR PICKER SELECT BUTTON */}
                                <View style={{width:'90%',backgroundColor:'white'}}>
                                    <TouchableOpacity style={{backgroundColor:'white',height:42,width:'90%',alignSelf:'center',borderColor:'gray',borderWidth:1,position:'absolute',top:20,justifyContent:'center',left:2}} activeOpacity = { 1 } onPress={this.showcolorpicker} >
                                        <Text style={{color:'black',fontSize:15,textAlign:'center',alignSelf:'center'}}>Color</Text>
                                    </TouchableOpacity>
                                </View>
                                {/* END COLOR PICKER SELECT BUTTON */}
                          </View>

                          {/* BEGIN QR SIZE DROPDOWN */}
                          <View style={{width:'60%',backgroundColor:'white'}}>
                                <Dropdown
                                label='QR Size'
                                data={QRSize}
                                value={this.state.size}
                                overlayStyle={{ marginTop:30 }}
                                onChangeText={this.onChangeQRSize}
                                containerStyle={{width:'98%',alignSelf:'flex-end'}}
                                />
                           </View>
                           {/* END QR SIZE DROPDOWN */}
                      </View>

                      {/* BEGIN COLOR PICKER VIEW */}
                      {this.state.showpicker == 1 ?
                        <View style={{width:200,height:200}}>
                              <ColorWheel
                              initialColor={currentcolor}
                              onColorChange={color => this.onChangeQRColor(color)}
                              style={{width: Dimensions.get('window').width}}
                              thumbStyle={{ height: 30, width: 30, borderRadius: 30}} />
                        </View>
                      : null }
                      {/* END COLOR PICKER VIEW */}

                      {/* BEGIN GENERATE QR BUTTON */}
                      <TouchableOpacity style={{margin: 10, marginBottom: 0,backgroundColor:'#FF5000',borderRadius:10,height:40,width:200,alignSelf:'center'}} activeOpacity = { 1 } onPress={this.ganerateQR} >
                          <Text style={{color:'white',fontSize:15,textAlign:'center',marginTop:10}}>Generate QR</Text>
                      </TouchableOpacity>
                      {/* END GENERATE QR BUTTON */}

                      {/* BEGIN GENERATE QR IMAGE VIEW */}
                      <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                            <ScrollView style={{height:190,alignSelf:'center'}}>

                                    {/* BEGIN GENERATE QR IMAGE FULL VIEW */}
                                    {(this.state.is_show_qr == 1 && this.state.showpicker == 0 && this.state.text.length > 0) ?

                                      <ViewShot ref="viewShot" collapsable={false} options={{result :"base64"}} style={{alignSelf:'center',margin:10,backgroundColor:'white'}}>

                                          <View style={{margin:5,backgroundColor:'white',alignSelf:'center',}}>
                                                  {/* BEGIN GENERATE QR IMAGE */}
                                                  <QRCode
                                                    value={this.state.text}
                                                    size={parseInt(this.state.size)}
                                                    bgColor={this.state.color}
                                                    fgColor='white'/>
                                                    {/* BEGIN GENERATE QR IMAGE */}

                                                    {/* BEGIN WRITE QR CODE */}
                                                    <Text style={{fontSize:15,alignSelf:'center',marginTop:10}}>{this.state.text}</Text>
                                                    {/* BEGIN WRITE QR CODE */}
                                          </View>
                                      </ViewShot>

                                    : null }
                                    {/* END GENERATE QR IMAGE FULL VIEW */}
                            </ScrollView>

                      </View>
                      {/* END GENERATE QR IMAGE VIEW */}

                  </View>

                    {/* BEGIN GENERATE QR IMAGE SHARE */}
                    {(this.state.is_show_qr == 1 && this.state.showpicker == 0 && this.state.text.length > 0)  ?
                        <TouchableOpacity style={{ margin:5,marginBottom: 0,backgroundColor:'#FF5000',borderRadius:10,height:40,width:200,alignSelf:'center'}} activeOpacity = { 1 } onPress={this.shareimage} >
                            <Text style={{color:'white',fontSize:15,textAlign:'center',marginTop:10}}>Share QR</Text>
                        </TouchableOpacity>
                    : null }
                    {/* END GENERATE QR IMAGE SHARE */}

              </View>
        );
      }
   }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
