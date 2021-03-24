import { Button } from 'react-bootstrap';


function LoginFormComponent(props) {
    let handleClick = () => {
        props.actions.loginDispatch();
        props.actions.toastDispatch(true,'وضعیت ورود','وارد سایت شدید','bg-success');
    }

    return (
        <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center bg-dark">
            <Button onClick={handleClick} variant="primary" className="btn-lg">ورود به سایت</Button>
        </div>
    )

}

export default LoginFormComponent;