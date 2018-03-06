import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


// dispatch functions
// ADD_TODO
const addTodo = ({text = '',completed = false,createdAt = ''} = {}) => ({
    type: 'ADD_TODO',
    todo: {
        id: uuid(),
        text,
        completed,
        createdAt,
    }
})
// REMOVE_TODO
const removeTodo = ({id}) => ({
    type: 'REMOVE_TODO',
    id,
})
// EDIT_TODO
const editTodo = (id, edit) => {
    return {
        type: 'EDIT_TODO',
        id,
        edit
    }
}
// SET_TEXT_FILTER
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
})
// SHOW_ALL
const showAllFilter = () => ({
    type: 'SHOW_ALL',
    show: 'all'
})
// SHOW_COMPLETED
const showCompleted = () => ({
    type: 'SHOW_COMPLETED',
    show: 'completed'
})
// SHOW_UNCOMPLETED
const showUnCompleted = () => ({
    type: 'SHOW_UNCOMPLETED',
    show: 'uncompleted'
})

// 

// Reducers
const todoReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ]
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id != action.id);
        case 'EDIT_TODO':
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return {
                        ...todo,
                        ...action.edit
                    }
                } else {
                    return todo
                }
            })
        default: 
            return state;
    }
}
const filterReducerState = {
    text: '',
    show: 'all',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SHOW_ALL':
            return {
                ...state,
                show: action.show
            }
        case 'SHOW_COMPLETED':
            return {
                ...state,
                show: action.show
            }
        case 'SHOW_UNCOMPLETED':
            return {
                ...state,
                show: action.show
            }
        default: 
            return state;
    }
}
//
// store creation
    const store = createStore(
        combineReducers({
            todo: todoReducer,
            filter: filterReducer
        })
    )
// 
const getVisiableTodo = (todos, {text, show, startDate, endDate}) => {
    return todos.filter((todo) => {
        const startDate = typeof startDate !== 'number';
        const endDate = typeof endDate !== 'number';
        const textMatch = todo.text.includes(text) || todo.text.toLowerCase().includes(text);
        
        return startDate && endDate && textMatch;
    }).filter((Todo) => {
        if(show == 'all') {
            return Todo;
        } else if(show == 'completed') {
            return Todo.completed == true;
        } else if(show == 'uncompleted') {
            return Todo.completed == false;
        }
    })
}
//subscribe 
    store.subscribe(() => {
        let todo = store.getState()
        let visiableTodo = getVisiableTodo(todo.todo, todo.filter)
        console.log(visiableTodo);
    })
// 
// dispatchs
const one = store.dispatch(addTodo({text: 'hello'}))
store.dispatch(addTodo({text: 'working'}))
store.dispatch(addTodo({text: 'node course', completed: true}))
// // store.dispatch(removeTodo({id: one.todo.id}))
// store.dispatch(editTodo(one.todo.id, {text: 'Must edit', completed: true}))

// store.dispatch(setTextFilter('hello'));
store.dispatch(showAllFilter());
store.dispatch(showCompleted());
store.dispatch(showUnCompleted())
// 

