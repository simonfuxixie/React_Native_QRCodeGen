/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//this
import SplashScreen from './Source/View/SplashScreen/splashscreen.js';
//not this
//import {SplashScreen} from './Source/View/SplashScreen/splashscreen.js';

AppRegistry.registerComponent(appName, () => SplashScreen);
