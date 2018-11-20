const ADD_TODO = 'TODO/TODO/ADD_TODO';
const UPDATE_TODO = 'TODO/TODO/UPDATE_TODO';
const DELETE_TODO = 'TODO/TODO/DELETE_TODO';
const LOAD_SAVED_TODOS = 'TODO/TODO/LOAD_SAVED_TODOS';

const initialState = {
    todos: [],
};

export default function todo_reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    action.todo
                ],
            };
        case UPDATE_TODO:
            let todos = [...state.todos];
            let indexOfUpdate = todos.findIndex((todo) => {
                return todo.title == action.todo.title;
            });
            todos[indexOfUpdate] = action.todo;
            return {
                ...state,
                todos: todos,
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter(function (todo) {
                    return todo.title != action.todo.title;
                })
            }
        case LOAD_SAVED_TODOS:
            console.log(action, state);
            return {
                ...state,
                todos:action.todos,
            }
        default:
            return state;
    }
}


export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
    };
}

export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        todo,
    }
}

export function deleteTodo(todo) {
    return {
        type: DELETE_TODO,
        todo,
    }
}

export function loadSavedTodos(todos) {
    return {
        type: LOAD_SAVED_TODOS,
        todos,
    }
}