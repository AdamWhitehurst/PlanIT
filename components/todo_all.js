import React, {Component} from 'react';
import { Container, Header, Title, Content, Body, View, } from 'native-base';
import SuperFAB from './super_fab';
import ToDoItem from './todo_item';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../store/todo_reducer';
import { withNavigation } from 'react-navigation';
import { FilterPicker } from './filter_picker';
import { Colors } from '../constants/colors';
import { Priorities } from '../constants/priorities';

class ToDoAll extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        showFilter: '',
        colorFilter: undefined,
        priorityFilter: undefined,
    };

    this.fabs = [
      {
        icon: 'add',
        backgroundColor: 'green',
        func: () => {
          this.props.navigation.navigate('MyModal')
        },
      },
      {
        icon: 'ios-star',
        backgroundColor: 'purple',
        func: () => {
          this.toggleFilter('priorities')
        },
      },
      {
        icon: 'ios-color-palette',
        backgroundColor: 'orange',
        func: () => {
          this.toggleFilter('colors')
        },
      },
      {
        icon: 'ios-backspace',
        backgroundColor: 'red',
        func: () => {
          this.toggleFilter('');
          this.setState ({
            colorFilter: undefined,
            priorityFilter: undefined,
          });
        },
      },

    ];
  }

  toggleFilter (filter) {
    if (this.state.showFilter == filter) {
      this.setState({showFilter: ''});
    }
    else {
      this.setState({showFilter: filter});
    }
  }

  screenFilterTodos = () => {
    const{ screen, todos } = this.props;
    // let todos = [];
    // for (let todo in this.props.todos) {
    //   let success = true;
    //   if(this.state.colorFilter) {
    //     success = (this.state.colorFilter == todo.color);
    //   }
    //   if(this.state.priorityFilter) {
    //     success = (this.state.priorityFilter == todo.priority);
    //   }
    //   if (success) {
    //     todos.push(todo);
    //   }
    // }


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

  onUpdateFilters(filter, value) {
    this.setState( prevState => {
      newState = prevState;
      newState[filter] = value;
      return newState;
    });
  }

  render() {  
    const { todos, deleteTodo, updateTodo } = this.props;

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
            <Content>  
              { listItem }
            </Content>
            <View
            style={{height: 50, width: '50%', backgroundColor: '00000000'}}
            >
            { this.state.showFilter == 'colors' && 
              <FilterPicker pickables={Colors} onValueChange={(value) => {this.onUpdateFilters('colorFilter', value)}}/>
            }
            { this.state.showFilter == 'priorities' &&
              <FilterPicker pickables={Priorities} onValueChange={(value) => {this.onUpdateFilters('priorityFilter', value)}}/>
            }
            </View>
            <SuperFAB fabs= {this.fabs} />
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

const withNavigationToDoAll = withNavigation(ToDoAll);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigationToDoAll)
