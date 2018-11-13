import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import ToDoAll from './components/todo_all';

class CompletedToDoTab extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = { false } screen = "Completed" />
    );
  }
}

class ActiveToDoTab extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = { false } screen = "Active" />
    );
  }
}

class AllToDoTab extends React.Component {   
  render() {    
    return (
      <ToDoAll show_new_todo = { true } screen = "All" />
    );
  }
}

export default TabNavigator({
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

const Theme = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
});