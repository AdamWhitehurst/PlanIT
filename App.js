import React, {Component} from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import TabNavigator from './main_navigation';
import { Provider } from 'react-redux';
import store from './store/create_store';

Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Start.");
  }
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}
export default withAuthenticator(App);