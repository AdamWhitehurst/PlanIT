import React, {Component} from 'react';
import {Alert} from 'react-native';
import { Container, Header, Title, Content, Body, Text, Icon } from 'native-base';
import NewToDo from './new_todo';
import AddToDoButton from './add_todo_button';
import ToDoItem from './todo_item';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../store/todo_reducer';

class ToDoAll extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        new_todo: false,
    };
  }

  saveToDoData = (todo) => {
    let verified = this.verifyToDo(todo);
    if (verified){
      this.addNewToDo(show = false);
      this.props.addTodo(todo); 
    }   
  }

  addNewToDo = (show) => {
    this.setState({
      new_todo: show
    });
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

  screenFilterTodos = () => {
    const{ screen, todos } = this.props;
    if( screen == "Active"){
      return todos.filter(function(todo) {
        return !todo.completed;
      })
    }else if(screen == "Completed" ){
      return todos.filter(function(todo) {
        return todo.completed;
      })
    }else{
      return todos;
    }
  }

  render() {
    const { new_todo } = this.state;    
    const { todos, show_new_todo, screen, deleteTodo, updateTodo } = this.props;

    let listItem = [];
    if(todos.length > 0){      
      let scrTodos = this.screenFilterTodos();
      listItem = scrTodos.map( (todo, index) => 
        <ToDoItem 
          key = { index } 
          todo = { todo } 
          deleteTodo = { deleteTodo } 
          updateTodo = { updateTodo }
          />        
      );
    }    

    return (
        <Container>
            <Header>                
                <Body>
                    <Title>{ screen }</Title>
                </Body>                
            </Header>
            <Content>  
              { listItem }
              {new_todo && 
                <NewToDo 
                  onPress = {
                    this.saveToDoData
                    }
                  onCancel = { this.addNewToDo }
                />
              }
            </Content>             
            {show_new_todo && 
              <AddToDoButton onAddNewToDo = { this.addNewToDo }  />
            }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoAll)
