import * as types from '../types/index';

let initState = {}

export default function selectedTodoReducer(state = initState,action){
    switch (action.type) {

        case types.HANDLE_SELECT_TODO:
            console.log(action);
            return {...action.todo}

        default:
            return state
    }
}