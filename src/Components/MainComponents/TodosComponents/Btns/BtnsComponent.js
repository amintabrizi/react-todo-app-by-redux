import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteTodoAction,editTodoStatusAction,modalAction,selectTodoAction } from './../../../../actions';


class BtnsComponent extends React.Component {

    handleEditTodo = (todo) => {
        this.props.selectTodoAction(todo);
        this.props.modalAction();
    }

    render() {
        return (
            <>
                <Button onClick={() => this.props.deleteTodoAction(this.props.item.todoID)} variant="danger" className="btn-sm ml-2">پاک کردن</Button>
                <Button onClick={() => this.handleEditTodo(this.props.item)} variant="info" className="btn-sm ml-2">ویرایش</Button>
                <Button onClick={() => this.props.editTodoStatusAction(this.props.item)} className={`btn-sm ml-2 ${this.props.item.todoStatus ? 'btn-success' : 'btn-warning'}`}>{this.props.item.todoStatus ? 'انجام شده' : 'انجام نشده'}</Button>
            </>
        )
    }
    
}

export default connect(null,{deleteTodoAction,editTodoStatusAction,modalAction,selectTodoAction})(BtnsComponent);