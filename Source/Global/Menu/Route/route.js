import React from "react";
import { Root } from "native-base";
import { createStackNavigator } from "react-navigation";

import Tab from "../Tab/tab.js";

  const AppNavigator = createStackNavigator(
    {
         Tab: { screen: Tab, navigationOptions: {
          headerBackTitle: ' ',
          headerTintColor: 'black',
          header: null,
          headerStyle: {backgroundColor:'white'},
        } } //Tab Route with StackNavigator
    },
    {
    initialRouteName: "Tab", //Write here route name for first screen which you have to open.
    backButtonTitle: ' ' // Write have back button title when you navigate other screen.
    });

export default () =>(

  <Root>
    <AppNavigator />
  </Root>
);
