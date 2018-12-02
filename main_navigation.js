import React, { Component } from 'react';
import { TabBarBottom, createStackNavigator, TabNavigator } from 'react-navigation';
import ToDoAll from './components/todo_all';
import {Icon} from 'native-base';
import { ModalScreen } from './components/awesome_modal';

class CompletedToDoTab extends Component {
  render() {
    return (
      <ToDoAll show_new_todo = { false } screen = "Completed" />
    );
  }
}

class ActiveToDoTab extends Component {
  render() {
    return (
      <ToDoAll show_new_todo = { false } screen = "Active" />
    );
  }
}

class AllToDoTab extends Component {   
  render() {    
    return (
      <ToDoAll show_new_todo = { true } screen = "All" />
    );
  }
}

const MainTabNavigator = TabNavigator({
  All: { screen: AllToDoTab },
  Active: { screen: ActiveToDoTab },
  Completed: { screen: CompletedToDoTab },
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'All') {
        iconName = `list`;
      } else if (routeName === 'Active') {
        iconName = `unlock`;
      } else{
        iconName = `checkmark`;
      }
  
      return <Icon name= { iconName } color = { 'red' } active = { true } />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
});

export const RootStack = createStackNavigator(
  {
    MainTabNavigator: {
      screen: MainTabNavigator,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
