import React, { Component } from 'react';
import { Input, Container, Header, Content, Button, Text } from 'native-base';
// Navigation Imports
import { withNavigation } from 'react-navigation';
import DatePicker from './date_picker';
// Redux Imports
import { connect } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../store/todo_reducer';

class BaseModalScreen extends Component {
  constructor () {
    super();

    this.state = {
      todo: {
        title: '',
        description: '',
        date : undefined,
        color: undefined,
        priority: undefined,
        completed: false,
        createdAt: new Date(Date.now()),
      },
    }
  }

  saveToDo = () => {
    let verified = this.verifyToDo();
    if (verified){
      this.props.navigation.goBack();
      this.props.addTodo(this.state.todo);
    }   
  }
  
  verifyToDo () {
    let verified = true;
    let todo = this.state.todo;
    // Empty title check
    if (todo.title.trim() == '') {
      Alert.alert ("Hey!","Add a title, dummy!", [{text: 'My bad.', onPress: ()=> {}}]);
      verified = false;
    }

    return verified;
  }

  updateInput = (property, value) => {
    this.setState((prevState) => {
      newState = prevState;
      newState.todo[property] = value;
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
          placeholder = "Enter a title!"
          />

          <Input
          style={{ width: 200, height: 100 }}
          onChangeText={(text) => this.updateInput('description', text)}
          multiline={true}
          placeholder='Enter a description!'
          />

          <DatePicker setDate={(date) => this.updateInput('date', date )}/>

          <Button full success onPress={ this.saveToDo }>
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

function mapStateToProps (state) {    
  return {
      todos: state.todo_reducer.todos
  }
}

function mapDispatchToProps (dispatch) {    
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
  }
}

const ModalScreen = withNavigation(BaseModalScreen);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalScreen);
