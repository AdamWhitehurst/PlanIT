import React from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Body, Text, Icon } from 'native-base';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import AddToDo from './add_todo';
import AddToDoButton from './add_todo_button';

class AllToDo extends React.Component {    
  render() {    
    return (
        <Container>
          <Header><Body><Title>All</Title></Body></Header>
          <Content><AddToDo /></Content>
          <AddToDoButton style={Theme.fab}/>           
        </Container>
    );
  }
}

class ActiveToDo extends React.Component {
  render() {
    return (
      <Container>
        <Header><Body><Title>Active</Title></Body></Header>
        <Content></Content>    
      </Container>
    );
  }
}

class CompletedToDo extends React.Component {
  render() {
    return (
        <Container>
          <Header><Body><Title>Completed</Title></Body></Header>
          <Content></Content>
        </Container>
    );
  }
}

export default TabNavigator({
  All: { screen: AllToDo },
  Active: { screen: ActiveToDo },
  Completed: { screen: CompletedToDo },
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