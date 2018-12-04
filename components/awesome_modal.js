import React, { Component } from 'react';
import { InputGroup, Input, Container, Header, Content, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import DatePicker from './date_picker';


export class BaseModalScreen extends Component {
  constructor () {
    super();

    this.state = {
      title: 'Enter a title!',
      description: 'Enter a description!',
      date : new Date(Date.now()),
    }

    this.saveToDoData = this.saveToDoData.bind(this);
  }

  saveToDoData (todo) {
    let verified = this.verifyToDo(todo);
    if (verified){
      this.addNewToDo(show = false);
      this.props.addTodo(todo); 
    }   
  }
  
  verifyToDo (todo) {
    let verified = true;
    // Empty title check
    if (todo.title.trim() == '') {
      Alert.alert ("Hey!","Add a title, dummy!", [{text: 'My bad.', onPress: ()=> {}}]);
      verified = false;
    }

    return verified;
  }

  updateInput (input, value) {
    this.setState( prevState => {
      newState = prevState;
      newState[input] = value;
      console.log ("New State: ");
      console.log(newState);
      return newState;
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
        <Input
        onChangeText={(text) => this.updateInput('title', text)}
        placeholder = "Title"/>
        <Input
        style={{ width: 200, height: 100 }}
        onChangeText={(text) => this.updateInput('description', text)}
        multiline={true}
        placeholder='Description'/>

          <DatePicker setDate={(date) => this.updateInput('date', date )}/>
          <Button full success onPress={ () => {}}>
            <Text>SAVE</Text>
          </Button>
          <Button full danger onPress={ () => { this.props.navigation.goBack() }}>
          <Text>CANCEL</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export const ModalScreen = withNavigation(BaseModalScreen);
