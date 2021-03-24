import * as types from './../types/index';
import AxiosConfig from './../Axios/AxiosConfig';
import { showLoading, hideLoading } from 'react-redux-loading-bar'


export const toggleLoginAction = () => dispatch => {
    dispatch(showLoading())
    setTimeout(() => {
        dispatch({type: types.TOGGLE_LOGIN});
        dispatch(hideLoading())
    }, 1000);
    
}


export const toastAction = (showStatus, toastTitle, toastBody, toastBg) => ({
    type: types.HANDLE_TOAST,
    payload: {
        'show': showStatus,
        'time': 'لحظاتی پیش',
        'title': toastTitle,
        'body': toastBody,
        'bg': toastBg
    }
})

export const toastCloseAction = (showStatus, toastTitle, toastBody, toastBg) => ({
    type: types.HANDLE_TOAST_CLOSE,
})

export const modalAction = () => ({
    type: types.HANDLE_MODAL
})

export const selectTodoAction = (todo) => ({
    type: types.HANDLE_SELECT_TODO,
    todo
})

// export const addTodoAction = (todo) => async dispatch => {

//     try{
//         const res = await AxiosConfig.post('/todos.json',todo)
//         dispatch( {
//             type: types.ADD_TODO,
//             payload: {todoID:res.data.name,...todo}
//         })
//     }

//     catch(e){
//         dispatch( {
//             type: types.ADD_TODO_ERROR,
//             payload: console.log(e),
//         })
//     }

// }

export const addTodoAction = (todo) => dispatch => {
    dispatch(showLoading());
    AxiosConfig.post('/todos.json', todo)
        .then(response => {
            dispatch({
                type: types.ADD_TODO,
                payload: { todoID: response.data.name, ...todo }
            })
            dispatch(toastAction(true, 'وضعیت ایجاد وظیفه', 'وظیفه ایجاد شد', 'bg-success') )
            dispatch(hideLoading())
        })
        .catch(error => {
            dispatch(toastAction(true, 'وضعیت ایجاد وظیفه', 'وظیفه ایجاد نشد', 'bg-danger') )
            dispatch(hideLoading())
        })
}

export const getTodosAction = () => dispatch => {
    AxiosConfig.get('/todos.json')
        .then(response => {
            let todos = [];
            let data = response.data;
            for (const item in data) {
                todos.push({
                    todoID: item,
                    todoTitle: data[item].todoTitle,
                    todoStatus: data[item].todoStatus,
                })
            }
            dispatch({
                type: types.GET_TODO,
                payload: todos
            })
        })
        .catch(error => {
            dispatch(toastAction(true, 'وضعیت درخواست', 'درخواست با مشکل مواجه شد', 'bg-danger') )
        })
}

export const deleteTodoAction = (todoID) => dispatch => {
    dispatch({
        type: types.DELETE_TODO,
        payload: todoID
    })
    AxiosConfig.delete(`/todos/${todoID}.json`)
        .then(response => {
            dispatch(toastAction(true, 'وضعیت درخواست', 'درخواست حذف با موفقیت انجام شد', 'bg-success') )
        })
        .catch(error => {
            dispatch(toastAction(true, 'وضعیت درخواست', 'درخواست حذف با مشکل مواجه شد', 'bg-danger') )
        })
}

export const editTodoStatusAction = (todo) => dispatch => {

    const { todoID, ...todoInfo } = todo;

    dispatch({
        type: types.EDIT_TODO_STATUS,
        payload: todo
    })

    AxiosConfig.put(`/todos/${todo.todoID}.json`, { ...todoInfo, todoStatus: todo.todoStatus })
        .then(response => {
            dispatch(toastAction(true, 'وضعیت درخواست', 'درخواست ویرایش وضعیت با موفقیت انجام شد', 'bg-success') )
        })
        .catch(error => {
            dispatch(toastAction(true, 'وضعیت درخواست', 'درخواست ویرایش وضعیت با موفقیت انجام نشد', 'bg-danger') )
        })
}

export const editTodoTitleAction = (todo) => dispatch => {

    const { todoID, ...todoInfo } = todo;

    dispatch({
        type: types.EDIT_TODO_TITLE,
        payload: todo
    })

    AxiosConfig.put(`/todos/${todo.todoID}.json`, { ...todoInfo, todoTitle: todo.todoTitle })
        .then(response => {
            dispatch(toastAction(true, 'وضعیت درخواست', 'درخواست ویرایش وضعیت با موفقیت انجام شد', 'bg-success') )
        })
        .catch(error => {
            dispatch(toastAction(true, 'وضعیت درخواست', 'درخواست ویرایش وضعیت با موفقیت انجام نشد', 'bg-danger') )
        })
}

