import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import todoReducer from './todoReducer';
import toastReducer from './toastReducer';
import modalReducer from './modalReducer';
import selectedTodoReducer from './selectedTodoReducer';
import { loadingBarReducer } from 'react-redux-loading-bar'


export default combineReducers({
    loginReducer,
    todoReducer,
    toastReducer,
    modalReducer,
    selectedTodoReducer,
    loadingBar: loadingBarReducer,
})