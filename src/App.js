import React from 'react';
import './App.css';
import { connect } from 'react-redux';

//components
import NavbarComponent from './Components/HeaderComponents/Navbar/NavbarComponent';
import FormComponent from './Components/HeaderComponents/FormSection/FormComponent';
import TodosListComponent from './Components/MainComponents/TodosComponents/TodosList';
import ModalComponent from './Components/GeneralComponents/Modal/ModalComponent';
import LoginFormComponent from './Components/GeneralComponents/LoginForm/LoginFormComponent';
import ToastComponent from './Components/GeneralComponents/Toast/ToastComponent';
import Loading from './Components/GeneralComponents/Loading/Loading';

//actions
import { toggleLoginAction,toastAction } from './actions'

class App extends React.Component {

  render() {
    return (
      <>
        <Loading />
        {
          this.props.loginState
            ?
            <>
              <NavbarComponent actions={this.props} />
              <FormComponent />
              <TodosListComponent />
              <ModalComponent />
            </>
            :
            <LoginFormComponent actions={this.props} />
        }
        <ToastComponent />
      </>
    );
  }

}

const mapStateToProps = state => {
  return {
      loginState: state.loginReducer
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    loginDispatch: () => dispatch(toggleLoginAction()),
    toastDispatch: (toastStatus,toastTitle,toastBody,toastBg) => dispatch(toastAction(toastStatus,toastTitle,toastBody,toastBg))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
