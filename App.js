import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen"
import {AppTabNavigator} from "./components/AppTabNavigator"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import TestScreen from "./screens/TestScreen"


export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator },
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)
