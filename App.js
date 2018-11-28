import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Navigator from './components/navigator/navigator'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
   
      return (
        <Navigator/>
      );
    }
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#222',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
});
