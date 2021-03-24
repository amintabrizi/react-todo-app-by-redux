import { TOGGLE_LOGIN } from './../types/index';

export default function loginReducer(loginState = false,action){
    switch (action.type) {
        case TOGGLE_LOGIN:
            return !loginState;

        default:
            return loginState;
    }
}