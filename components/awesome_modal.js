import React, { Component } from 'react';
import { InputGroup, Input, Container, Header, Content, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import DatePickerExample from './date_picker';
export class BaseModalScreen extends Component {

  saveToDoData = (todo) => {
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


  render() {
    return (
      <Container>
        <Content>
        <Input placeholder = "Title"/>
        <InputGroup borderType='regular'>
                        <Input style={{
                            width: 200, height: 100
                        }}  multiline={true} placeholder='Description'/>
                    </InputGroup>
          <DatePickerExample />
        </Content>
      </Container>
    );
  }
}

export const ModalScreen = withNavigation(BaseModalScreen);
