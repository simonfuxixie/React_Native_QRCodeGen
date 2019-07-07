/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component ,PureComponent} from "react";
import { Dimensions,Text,StyleSheet, View,Platform } from "react-native";
import { NavigationEvents } from 'react-navigation';
import Camera from 'react-native-camera';
import { RNCamera } from 'react-native-camera';
const CAMERA_REF = 'camera';

  class CameraView extends React.Component {

      constructor() {
           super();
           this.state = {
                         is_camera : 1, // START CAMERA
                         barcode_text :''
                        }
                    }

      // BEGIN BARCODE READ DATA METHOD
      onBarCodeReads=(data) => {

          // IF USER COME FROM QR SCREEN
          if (this.props.navigation.getParam('fromview', '') == 'qr') {
                  this.props.navigation.navigate('ScanResultFromQR',{
                                                                     scan_result:data.data,
                                                                     view:'Qr'
                                                                    });
          }else {
              // IF USER COME FROM BARCODE SCREEN
                  this.props.navigation.navigate('ScanResultFromBarcode',{
                                                                         scan_result:data.data,
                                                                         view:'Barcode'
                                                                       });
          }

      }
      // END BARCODE READ DATA METHOD


      render() {

        const { height, width } = Dimensions.get('window');
        const maskRowHeight = 20;
        const maskColWidth = (width - 300) / 2;

        return(
          <View style={[BarcodeStyles.container,{position:'absolute',top:0,right:0,bottom:0,left:0}]}>

            {/* BEGIN ONLOAD VIEW METHOD FOR RESTART CAMERA */}
            <NavigationEvents
                onWillFocus={payload =>
                    setTimeout(() => {
        
                                                          this.setState({
                                                                        is_camera : 1
                                                                        })

                                      },50)
                } // ON VIEW FOCUS EVENT

                onWillBlur={payload =>
                    setTimeout(() => {
                                      this.setState({
                                                    is_camera : 0
                                                    })
                                     },50)
               } // ON VIEW BLUR EVENT
               />
              {/* END ONLOAD VIEW METHOD FOR RESTART CAMERA */}


                      {/* BEGIN CAMERA VIEW FOR IOS */}
                      {(this.state.is_camera == 1 && Platform.OS == 'ios') ?
                        <Camera
                                ref={cam => {
                                            this.camera = cam;
                                            }}
                                onBarCodeRead={this.onBarCodeReads}
                                style={BarcodeStyles.cameraView}
                                aspect={Camera.constants.Aspect.fill}
                                playSoundOnCapture
                        >

                            <View style={BarcodeStyles.maskOutter}>
                              <View style={[{ flex: maskRowHeight  }, BarcodeStyles.maskRow, BarcodeStyles.maskFrame]} />
                              <View style={[{ flex: 30 }, BarcodeStyles.maskCenter]}>
                              <View style={[{ width: maskColWidth }, BarcodeStyles.maskFrame]} />
                              <View style={BarcodeStyles.maskInner} />
                              <View style={[{ width: maskColWidth }, BarcodeStyles.maskFrame]} />
                            </View>

                            <View style={[{ flex: maskRowHeight }, BarcodeStyles.maskRow, BarcodeStyles.maskFrame]} />
                            </View>
                      </Camera> : null}
                    {/* END CAMERA VIEW FOR IOS */}

                    {/* BEGIN CAMERA VIEW FOR ANDROID */}
                    {(this.state.is_camera == 1 && Platform.OS == 'android') ?
                    <RNCamera
                        ref={cam => {
                                    this.camera = cam;
                                    }}
                        onGoogleVisionBarcodesDetected={({ barcodes }) => {this.onBarCodeReads(barcodes[0])}}
                        style={BarcodeStyles.cameraView}
                        aspect={Camera.constants.Aspect.fill}
                        playSoundOnCapture
                    >
                          <View style={BarcodeStyles.maskOutter}>
                            <View style={[{ flex: maskRowHeight  }, BarcodeStyles.maskRow, BarcodeStyles.maskFrame]} />
                            <View style={[{ flex: 30 }, BarcodeStyles.maskCenter]}>
                            <View style={[{ width: maskColWidth }, BarcodeStyles.maskFrame]} />
                            <View style={BarcodeStyles.maskInner} />
                            <View style={[{ width: maskColWidth }, BarcodeStyles.maskFrame]} />
                          </View>

                          <View style={[{ flex: maskRowHeight }, BarcodeStyles.maskRow, BarcodeStyles.maskFrame]} />
                          </View>
                    </RNCamera> : null}
                    {/* END CAMERA VIEW FOR ANDROID */}

              {/* BEGIN BARCODE READ DATA VIEW */}
              <View style={{position:'absolute',top:0,right:0,left:0,justifyContent:'center',alignItems:'center'}}>
                <View style={{margin:5}}>
                  <Text style={{color:'white',fontSize:25}}>{this.state.barcode_text}</Text>
                </View>
              </View>
              {/* END BARCODE READ DATA VIEW */}
           </View>
        );
   }
 }

 const BarcodeStyles = StyleSheet.create({
   container: {
     flex: 1,
   },
   cameraView: {
     flex: 1,
     justifyContent: 'flex-start',
   },
   maskOutter: {
     position: 'absolute',
     top: 0,
     left: 0,
     width: '100%',
     height: '100%',
     alignItems: 'center',
     justifyContent: 'space-around',
   },
   maskInner: {
     width: 300,
     backgroundColor: 'transparent',
     borderColor: 'white',
     borderWidth: 1,
   },
   maskFrame: {
     backgroundColor: 'rgba(1,1,1,0.6)',
   },
   maskRow: {
     width: '100%',
   },
   maskCenter: { flexDirection: 'row' },
 });
 export default CameraView;
