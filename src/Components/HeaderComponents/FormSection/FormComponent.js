import React from 'react';
import './FormComponent.css';
import { Form, FormControl, Button,InputGroup} from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTodoAction } from './../../../actions';

class FormComponent extends React.Component {
    
    state = {
        inputValue: ''
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addTodoAction({todoTitle: this.state.inputValue,todoStatus: false});
    }

    render() {
        return (
            <section className="form-wrapper">
                <div className="container d-flex justify-content-center align-items-center">
                    <Form onSubmit={(e) => this.submitHandler(e)} inline className="flex-row-reverse w-100 justify-content-center direction-ltr">
                        <InputGroup size="lg" className="mb-3">
                            <InputGroup.Prepend>
                                <Button type="submit" className="bg-primary">!اضافه کن</Button>
                            </InputGroup.Prepend>
                            <FormControl onChange={(e) => this.setState({inputValue:e.target.value})} className="text-right add-todo" aria-describedby="basic-addon1" />
                        </InputGroup>
                    </Form>
                </div>
            </section>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return{
//         addTodoDispatch : (todoTitle) => dispatch(addTodoAction(todoTitle))
//     }
// }

export default connect(null,{addTodoAction})(FormComponent);