/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {WebView,Dimensions, StyleSheet, View} from 'react-native';

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height


export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>

              {/* BEGIN WEBVIEW FOR SEARCH RESULT IN GOOGLE */}
              <WebView
              ref="WebView"
              scalesPageToFit={true}
              source = {{ uri:"https://www.google.com/search?q="+this.props.navigation.getParam('search_text', '')}}
              style={{width:deviceW , height:deviceH ,margin:2,backgroundColor: 'transparent'}}/>
              {/* END WEBVIEW FOR SEARCH RESULT IN GOOGLE */}

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
