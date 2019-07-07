
'use strict';
import React, { Component } from 'react';
import {  Text, View,Image,YellowBox,AsyncStorage } from 'react-native';
import {Button,Footer,Content,FooterTab,Container} from 'native-base';
import {createStackNavigator,TabNavigator} from "react-navigation";
import { BackHandler } from 'react-native';


// ALL SCREEN IMPORT FOR MAKE ROUTE
import Barcode from '../../../View/Barcode/barcode.js'
import BarcodeCamera from '../../../View/BarcodeCamera/barcodecamera.js'
import BarcodeMainView from '../../../View/BarcodeMainView/barcodemainview.js'
import QRMainView from '../../../View/QRMainView/qrmainview.js'

import QRGenerate from '../../../View/QRGenerate/qrgenerate.js'
import QRCamera from '../../../View/BarcodeCamera/barcodecamera.js'
import GlobalInclude from "../../GlobalInclude/globalinclude.js";
import WebViewFromBarcode from '../../../View/WebView/webview.js'
import WebViewFromQr from '../../../View/WebView/webview.js'
import ScanResultFromBarcode from '../../../View/ScanResult/scanresult.js'
import ScanResultFromQR from '../../../View/ScanResult/scanresult.js'
import Contact from '../../../View/Contact/contact.js'

// REMOVE WARNING
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module createTabNavigator']);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module TabBarBottom']);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module TabNavigator']);


// TAB BUTTON NAME
let menu_1 = 'Barcode'
let menu_2 = 'QR'
let menu_3 = 'Contact'

const TabSelectColor = '#FF5000' // SELECTED TAB COLOR
const TabDeselectColor = 'blue' // DESELECTED TAB COLOR
console.disableYellowBox = true;


//BEGIN BARCODE TAB ROUTE
const BarcodeStack = createStackNavigator({
  BarcodeMainView: { screen: BarcodeMainView ,navigationOptions: {
  headerTitle: (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Barcode</Text>
    </View>
  ),
  headerBackTitle: '',
  headerTintColor: 'black',
  headerStyle: {backgroundColor:'white'},
  }},

  Barcode: { screen: Barcode ,navigationOptions: {
  headerTitle: (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Genarate Barcode</Text>
    </View>
  ),
  headerBackTitle: '',
  headerTintColor: 'black',
  headerStyle: {backgroundColor:'white'},
  headerRight: <GlobalInclude.FontAwesome style={{marginRight: 10,width:30,color:"transparent"}} size={0} name={"filter"}/>
  }},

  BarcodeCamera: { screen: BarcodeCamera ,navigationOptions: {
  headerTitle: (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Scan Barcode</Text>
    </View>
  ),
  headerBackTitle: '',
  headerTintColor: 'black',
  headerStyle: {backgroundColor:'white'},
  headerRight: <GlobalInclude.FontAwesome style={{marginRight: 10,width:30,color:"transparent"}} size={0} name={"filter"}/>
  }},

  ScanResultFromBarcode: { screen: ScanResultFromBarcode ,navigationOptions: {
  headerTitle: (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Scan Barcode</Text>
    </View>
  ),
  headerBackTitle: '',
  headerTintColor: 'black',
  headerStyle: {backgroundColor:'white'},
  headerRight: <GlobalInclude.FontAwesome style={{marginRight: 10,width:30,color:"transparent"}} size={0} name={"filter"}/>

  }},

  WebViewFromBarcode: { screen: WebViewFromBarcode ,navigationOptions: {
  headerTitle: (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Google Search</Text>
    </View>
  ),
  headerBackTitle: '',
  headerTintColor: 'black',
  headerStyle: {backgroundColor:'white'},
  headerRight: <GlobalInclude.FontAwesome style={{marginRight: 10,width:30,color:"transparent"}} size={0} name={"filter"}/>
  }},
});
//END BARCODE TAB ROUTE

//BEGIN QR TAB ROUTE
const QRStack = createStackNavigator({
  QRMainView: { screen: QRMainView ,navigationOptions: {
  headerTitle: (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:20}}>QR</Text>
    </View>
  ),
  headerBackTitle: '',
  headerTintColor: 'black',
  headerStyle: {backgroundColor:'white'},
  }},

  QRGenerate: { screen: QRGenerate ,navigationOptions: {
  headerTitle: (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Genarate QR</Text>
    </View>
  ),
  headerBackTitle: '',
  headerTintColor: 'black',
  headerStyle: {backgroundColor:'white'},
  headerRight: <GlobalInclude.FontAwesome style={{marginRight: 10,width:30,color:"transparent"}} size={0} name={"filter"}/>
  }},
  QRCamera: { screen: QRCamera ,navigationOptions: {
  headerTitle: (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Scan QR</Text>
    </View>
  ),
  headerBackTitle: '',
  headerTintColor: 'black',
  headerStyle: {backgroundColor:'white'},
  headerRight: <GlobalInclude.FontAwesome style={{marginRight: 10,width:30,color:"transparent"}} size={0} name={"filter"}/>
  }},

  ScanResultFromQR: { screen: ScanResultFromQR ,navigationOptions: {
  headerTitle: (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Scan QR</Text>
    </View>
  ),
  headerBackTitle: '',
  headerTintColor: 'black',
  headerStyle: {backgroundColor:'white'},
  headerRight: <GlobalInclude.FontAwesome style={{marginRight: 10,width:30,color:"transparent"}} size={0} name={"filter"}/>
  }},

  WebViewFromQr: { screen: WebViewFromQr ,navigationOptions: {
  headerTitle: (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:20}}>Google Search</Text>
    </View>
  ),
  headerBackTitle: '',
  headerTintColor: 'black',
  headerStyle: {backgroundColor:'white'},
  headerRight: <GlobalInclude.FontAwesome style={{marginRight: 10,width:30,color:"transparent"}} size={0} name={"filter"}/>
  }},
});
//END QR TAB ROUTE

// BEGIN CONTACT TAB ROUTE
const ContactStack = createStackNavigator({
    Contact: { screen: Contact,navigationOptions: {
    headerTitle: (
      <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
      <Text style={{fontSize:20}}>Contact</Text>
      </View>
    ),
    headerBackTitle: '',
    headerTintColor: 'black',
    headerStyle: {backgroundColor:'white'},

    }},

});
// END CONTACT TAB ROUTE

// BEGIN SETUP TAB
const MainScreenNavigator = TabNavigator(
  { // SETUP ALL TAB WITH ROUTE
    BarcodeMainView: { screen: BarcodeStack }, //BARCODE TAB NAVIGATOR
    QRMainView:{screen:QRStack}, //QR TAB NAVIGATOR
    Contact: {screen : ContactStack}, //CONTACT TAB NAVIGATOR
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {

      return (

        <Footer style={{backgroundColor:"white",color:"white"}}>
          <FooterTab style={{backgroundColor:"white",color:"white"}}>

          {/* BEGIN BARCODE TAB SETUP */}
          <Button style={{backgroundColor:"transparent"}} vertical
          active={props.navigationState.index === 0}
          onPress={() => props.navigation.navigate("BarcodeMainView")}>
           <GlobalInclude.FontAwesome
             size={20} color={props.navigationState.index === 0 ? TabSelectColor  : TabDeselectColor}
             name="barcode"/>
             <Text style={{fontSize: 10,color:props.navigationState.index === 0 ? TabSelectColor  : TabDeselectColor}} uppercase={false}>{menu_1}</Text>
           </Button>
           {/* END BARCODE TAB SETUP */}


           {/* BEGIN QR TAB SETUP */}
            <Button style={{backgroundColor:"transparent"}}
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("QRMainView")}>
              <GlobalInclude.FontAwesome
                size={20} color={props.navigationState.index === 1 ? TabSelectColor  : TabDeselectColor}
                name="qrcode"/>
                <Text style={{fontSize: 10,color:props.navigationState.index === 1 ? TabSelectColor  : TabDeselectColor}} uppercase={false}>{menu_2}</Text>
            </Button>
            {/* END QR TAB SETUP */}


            {/* BEGIN CONTACT TAB SETUP */}
            <Button style={{backgroundColor:"transparent"}}
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Contact")}>
              <GlobalInclude.FontAwesome
                size={20} color={props.navigationState.index === 2 ? TabSelectColor  : TabDeselectColor}
                name="phone"/>
                <Text style={{fontSize: 10,color:props.navigationState.index === 2 ? TabSelectColor  : TabDeselectColor}} uppercase={false}>{menu_3}</Text>
            </Button>
            {/* END CONTACT TAB SETUP */}

          </FooterTab>
        </Footer>

      );
    }
  });
// END SETUP TAB

export default class App extends React.Component {
  static router = MainScreenNavigator.router;
     constructor(props){
       super(props);
       this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     }

     componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick); // REMOVE ANDROID HARDWARE BACK BUTTON LISTENER
     }
     handleBackButtonClick() {
     return true; // ANDROID HARDWARE BACK BUTTON DISABLE
     }

     componentWillMount() {
       console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed']; //REMOVE WARNING
       BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick); // ADD ANDROID HARDWARE BACK BUTTON LISTENER
     }

     render() {

      return (
          <MainScreenNavigator navigation={this.props.navigation}/>
      );

  }
  }
