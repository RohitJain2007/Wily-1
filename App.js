
import React from 'react';
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer}from "react-navigation"
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Text>Wily</Text>
      <AppContainer/>
    </View>
  );
}
}
const tabNavigator = createBottomTabNavigator(
  {
    Transaction:{screen:TransactionScreen},
    Search:{screen:SearchScreen}
  }
)
const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
