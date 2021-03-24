import * as types from './../types/index';

export default function todoReducer(state = [],action){
    switch (action.type) {

        case types.ADD_TODO:
            return [...state,{...action.payload}]

        case types.GET_TODO:
            return [...action.payload]

        case types.DELETE_TODO:
            let otherTodos = state.filter(item => item.todoID !== action.payload)
            return [...otherTodos];

        case types.EDIT_TODO_STATUS:
            const findTodo = state.find(item => item.todoID === action.payload.todoID);
            let other_Todos = state.filter(item => item.todoID !== action.payload.todoID)
            findTodo.todoStatus = !action.payload.todoStatus

            return [...other_Todos,findTodo];
        
        case types.EDIT_TODO_TITLE:
            let other_Todo = state.filter(item => item.todoID !== action.payload.todoID)
            return [...other_Todo,action.payload];

        default:
            return state
    }
}