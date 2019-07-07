/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { ScrollView, Text, View,TextInput,TouchableOpacity} from 'react-native';
import Barcode from 'react-native-barcode-builder';
import { Dropdown } from 'react-native-material-dropdown';
import Share from 'react-native-share';
import {Toast} from "native-base";


import ViewShot from "react-native-view-shot";

      // BEGIN BARCODE LINE WIDTH DROPDOWN DATA
      const BarWidth = [{
          label:'1',
          value: '1',
        }, {
          label:'2',
          value: '2',
        }, {
          label:'3',
          value: '3',
        }];
        // END BARCODE LINE WIDTH DROPDOWN DATA

        // BEGIN BARCODE TYPE DROPDOWN DATA
      const BarcodeType = [{
          label:'EAN 13',
          value: 'EAN13',
        },{
            label:'EAN 8',
            value: 'EAN8',
          },{
            label:'CODE 128',
            value: 'CODE128',
          },{
            label:'CODE 11',
            value: 'CODE11',
          },{
            label:'UPC-A',
            value: 'UPCA',
          },{
            label:'UPC-E',
            value: 'UPCE',
          }];
          // END BARCODE TYPE DROPDOWN DATA


  export default class App extends Component<Props> {
              constructor(props) {
                  super(props);

                    this.onChangeBarcodeWidth = this.onChangeBarcodeWidth.bind(this);
                    this.onerror = this.onerror.bind(this);
                    this.onChangeBarcodeType = this.onChangeBarcodeType.bind(this);
                    this.shareimage = this.shareimage.bind(this);


                    this.state = {
                      line_width:'2', //INITIAL BARCODE LINE WIDTH
                      generate_barcode:'',
                      is_valid_barcode:0,
                      barcode_type:'EAN13', //INITIAL BARCODE TYPE
                      is_show_barcode: 0,
                      is_show_share:0
                    };
                  }

        // BEGIN BARCODE ERROR TOAST
        onerror(){

          this.setState({
                      is_show_share:0,
                      is_valid_barcode: 0
                        })

          Toast.show({
              text: 'Invalid code',
              textStyle:{textAlign:"center",
              color:'#a94442',
              fontSize: 15},
              style:{backgroundColor: "#F2DEDE",yOffset: 40,alignSelf:"center",alignItems:"center"},
          })
        }
        // END BARCODE ERROR TOAST


        // BEGIN BARCODE LINE WIDTH ONCHANGE DROPDOWN
        onChangeBarcodeWidth(text) {
          this.setState({
                        line_width :text
                        })
        }
        // END BARCODE LINE WIDTH ONCHANGE DROPDOWN


        // BEGIN BARCODE TYPE ONCHANGE DROPDOWN
        onChangeBarcodeType(text) {
         this.setState({
                        barcode_type :text,
                        is_show_barcode:0
                      })
        }
        // END BARCODE TYPE ONCHANGE DROPDOWN

        // BEGIN BARCODE TEXTFIELD ONCHANGE EVENT
        barcodetextfield(text) {
         this.setState({
                        is_valid_barcode: 1,
                        generate_barcode:text,
                        is_show_barcode:0
                      })
        }
        // END BARCODE TEXTFIELD ONCHANGE EVENT


        // BEGIN GENERATE BARCODE BUTTON ONCLICK EVENT
        ganerateBarcode=(event) => {
          this.setState({
                        is_show_share:1,
                        is_show_barcode: 1
                        })
        }
        // END GENERATE BARCODE BUTTON ONCLICK EVENT


        // BEGIN GENERATE BARCODE IMAGE SHARE
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
        // END GENERATE BARCODE IMAGE SHARE



  render() {

    return (

      <ScrollView containerStyle={{flex:1}} style={{backgroundColor:'white'}}>
        {/* BEGIN BARCODE TYPE TEXTFIELD  */}
        <View style={{alignItems:'center',height:40,backgroundColor:'white',margin:10}}>
              <TextInput
                  placeholder='Type here barcode'
                  returnKeyType='done'
                  returnKeyLabel='Done'
                  underlineColorAndroid='transparent'
                  defaultValue=''
                  style={{alignItems:"center",alignSelf:"center",paddingLeft:5,height:40,width:'100%',fontSize:15,color:'black',textAlign:'left',borderColor:'gray',borderWidth:1}}
                  onChangeText={(text) => this.barcodetextfield(text)}>
              </TextInput>
        </View>
        {/* END BARCODE TYPE TEXTFIELD  */}

        <View style={{flexDirection:'row',height:70,backgroundColor:'white',margin:10}}>
          <View style={{width:'40%',backgroundColor:'white'}}>
              {/* BEGIN BARCODE LINE WIDTH DROPDOWN  */}
              <Dropdown
              label='Line width'
              data={BarWidth}
              value={this.state.line_width}
              overlayStyle={{ marginTop:30 }}
              onChangeText={this.onChangeBarcodeWidth}
              containerStyle={{width:'98%'}}
              />
              {/* END BARCODE LINE WIDTH DROPDOWN  */}
          </View>
          <View style={{width:'60%',backgroundColor:'white'}}>
              {/* BEGIN BARCODE TYPE DROPDOWN  */}
              <Dropdown
              label='Barcode Type'
              data={BarcodeType}
              value={this.state.barcode_type}
              overlayStyle={{ marginTop:30 }}
              onChangeText={this.onChangeBarcodeType}
              containerStyle={{width:'98%',alignSelf:'flex-end'}}
              />
              {/* END BARCODE TYPE DROPDOWN  */}
          </View>
        </View>


        {/* BEGIN GENERATE BARCODE BUTTON  */}
        <TouchableOpacity style={{margin: 0, marginBottom: 0,backgroundColor:'#FF5000',height:40,width:200,alignSelf:'center', borderRadius:10}} activeOpacity = { 1 } onPress={this.ganerateBarcode} >
            <Text style={{color:'white',fontSize:15,textAlign:'center',marginTop:10}}>Generate Barcode</Text>
        </TouchableOpacity>
        {/* END GENERATE BARCODE BUTTON  */}

        {/* BEGIN GENERATE BARCODE IMAGE DISPLAY  */}
        {this.state.is_show_barcode == 1 ?

          <ViewShot ref="viewShot" collapsable={false} options={{result :"base64"}} >
                <Barcode value={this.state.generate_barcode} width={this.state.line_width} format={this.state.barcode_type} text={this.state.generate_barcode} onError={this.onerror} flat/>
          </ViewShot>
        
        : null }
        {/* END GENERATE BARCODE IMAGE DISPLAY  */}


        {/* BEGIN GENERATE BARCODE IMAGE SHARE  */}
        {this.state.is_show_share == 1 ?
          <TouchableOpacity style={{margin: 10, marginBottom: 0, backgroundColor:'#FF5000', borderRadius:10, height:40,width:200,alignSelf:'center'}} activeOpacity = { 1 } onPress={this.shareimage} >
            <Text style={{color:'white',fontSize:15,textAlign:'center',marginTop:10}}>Share Barcode</Text>
          </TouchableOpacity>
        : null }
        {/* END GENERATE BARCODE IMAGE SHARE  */}

        </ScrollView>

    );
  }
}
