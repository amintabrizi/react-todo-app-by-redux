import * as types from './../types/index';

let initState = {
    show: false,
    title: null,
    body: null,
    time: null,
}

export default function toastReducer(state = initState,action){
    switch (action.type) {

        case types.HANDLE_TOAST:
            return {...action.payload}

        case types.HANDLE_TOAST_CLOSE:
            return {...state,show:false}

        default:
            return state
    }
}