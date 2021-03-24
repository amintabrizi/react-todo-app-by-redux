import React from 'react';
import { Toast,Row,Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toastCloseAction } from './../../../actions';

class ToastComponent extends React.Component{
    render() {
        return(
            <Row>
                <Col xs={6}>
                    <Toast onClose={() => this.props.toastDispatch()} show={this.props.toastInfo.show} delay={1500} autohide>
                        <Toast.Header className={`${this.props.toastInfo.bg} text-white`}>
                            <strong className="ml-auto ml-1">{this.props.toastInfo.title}</strong>
                        </Toast.Header>
                        <Toast.Body className="d-flex flex-column">
                            {this.props.toastInfo.body}
                            <small className="mr-auto">{this.props.toastInfo.time}</small>
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        );

    }
}

const mapStateToProps = state => {
    return {
        toastInfo : state.toastReducer
    }
}

const mapDisatchToProps = dispatch => {
    return {
        toastDispatch: () => dispatch(toastCloseAction())
    }
}

export default connect(mapStateToProps,mapDisatchToProps)(ToastComponent);