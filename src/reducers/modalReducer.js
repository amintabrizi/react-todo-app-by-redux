import * as types from './../types/index';

export default function modalReducer(state = false,action){
    switch (action.type) {

        case types.HANDLE_MODAL:
            return !state

        default:
            return state
    }
}