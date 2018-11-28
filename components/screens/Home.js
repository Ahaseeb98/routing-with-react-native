import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
// import {} from 'react-navigation'

export default class Home extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
   
      return (
        <View style={styles.container}>
          <Text>
            Home
          </Text>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate("Login")}
            style={styles.nxtBtn}
            >
             <Text>
            Login
          </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> this.props.navigation.toggleDrawer()}
            style={styles.nxtBtn}
            >
             <Text>
            Toggle
          </Text>
            </TouchableOpacity>
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
  nxtBtn: {
    width: 'auto',
    padding: 12,
    backgroundColor: 'gray',
    justifyContent: 'flex-start',
    margin: 5,
    elevation: 20,
    marginStart: 20,
    marginEnd: 30,
    borderRadius: 10
  },
});
