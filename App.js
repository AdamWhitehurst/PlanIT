import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import TabNavigator from './main_navigation';
import { Container } from 'native-base';


Amplify.configure(aws_exports);

//Authenticate first
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Start.");
  }
  render() {
    return (
      <TabNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default withAuthenticator(App);