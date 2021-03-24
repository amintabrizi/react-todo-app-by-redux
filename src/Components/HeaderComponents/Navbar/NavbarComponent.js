import React from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';

class NavbarComponent extends React.Component{

    handleClick = () => {
        this.props.actions.loginDispatch();
        this.props.actions.toastDispatch(true,'وضعیت ورود','خارج شدید','bg-danger');
    }

    render(){
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Todos Manager</Navbar.Brand>
                <Nav className="ml-auto mr-1">
                    <Nav.Link href="#home">صفحه اصلی</Nav.Link>
                    <Nav.Link href="#about-us">درباره ما</Nav.Link>
                    <Nav.Link href="#contact-us">تماس با ما</Nav.Link>
                </Nav>
                <Button onClick={this.handleClick} variant="primary" className={`btn-sm ${this.props.loginState ? 'btn-danger' : 'btn-success'}`}>{this.props.loginState ? 'خارج شوید' : 'وارد به سایت'}</Button>
            </Navbar>
        )    
    }
}

export default NavbarComponent;