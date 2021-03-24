import React from 'react';
import { Button, Modal, Form, InputGroup, FormControl } from 'react-bootstrap';
import './ModalComponent.css';
import { connect } from 'react-redux';
import { modalAction,editTodoTitleAction } from './../../../actions';

class ModalComponent extends React.Component {
    
    state = {
        title: ''
    }

    handleEditTodo = (e) => {
        e.preventDefault();
        this.props.editTodoTitleAction(this.props.selectedTodo);
        this.props.modalAction();
    }

    handleOnChange = (e) => {
        this.setState({title:e.target.value});
        this.props.selectedTodo.todoTitle = e.target.value;
    }

    render(){
        return (
            <Modal
                show = {this.props.modalState}
                onHide = {this.props.modalAction}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        ویرایش وظیفه
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => this.handleEditTodo(e)} inline className="flex-row-reverse w-100 justify-content-center direction-ltr">
                        <InputGroup size="md" className="mb-3">
                            <InputGroup.Prepend>
                                <Button type="submit" className="bg-info">ویرایش</Button>
                            </InputGroup.Prepend>
                            <FormControl 
                            onChange={(e) => this.handleOnChange(e)} 
                            defaultValue={this.props.selectedTodo.todoTitle} 
                            className="text-right add-todo" aria-describedby="basic-addon1" />
                        </InputGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.modalAction}>بستن</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalState: state.modalReducer,
        selectedTodo: state.selectedTodoReducer
    }
}

export default connect (mapStateToProps,{modalAction,editTodoTitleAction})(ModalComponent);