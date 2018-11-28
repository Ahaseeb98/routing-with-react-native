import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {} from 'react-navigation'

export default class Login extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
   
      return (
        <View style={styles.container}>
          <Text>
            Login
          </Text>
        </View>
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
