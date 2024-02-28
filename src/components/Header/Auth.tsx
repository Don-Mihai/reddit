import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import axios from 'axios';
import { authUser } from '../../redux/Users';
import { PAuthUser } from '../../redux/Users/types';

const Auth = (props: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formFilled, setFormFilled] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const isLogin = props.onIsLogin;
    const changeMode = props.changeMode;

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value);
        setFormFilled(event.target.value !== '' && password !== '');
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
        setFormFilled(username !== '' && event.target.value !== '');
    };

    const auth = async () => {
        const payload: PAuthUser = {
            username,
            password,
        };
        dispatch(authUser(payload));
    };

    return (
        <>
            <h2 className="modal__title">Log In</h2>
            <h3 className="modal__descr">
                By continuing, you agree to our{' '}
                <a className="modal__descr-agreement" href="#">
                    User Agreement
                </a>{' '}
                and acknowledge that you understand the{' '}
                <a className="modal__descr-agreement" href="#">
                    Privacy Policy
                </a>
                .
            </h3>
            <div className="line">
                {' '}
                <span>OR</span>{' '}
            </div>

            <div className="modal__inputs">
                <TextField label="Username *" value={username} name="username" onChange={handleUsernameChange} variant="filled" fullWidth />
                <TextField label="Password *" value={password} name="password" onChange={handlePasswordChange} variant="filled" fullWidth />
            </div>
            <div className="modal__link-recovery">
                Forgot your <span className="modal__link">username</span> or <span className="modal__link">password</span> ?
            </div>
            <div className="modal__link-wrap">
                New to Reddit?{' '}
                <span onClick={changeMode} className="modal__link">
                    Sign Up
                </span>
            </div>
            <Button onClick={auth} className={!formFilled ? 'modal__button_disabled' : 'modal__button'} variant="contained" fullWidth>
                Log In
            </Button>
        </>
    );
};

export default Auth;
function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}

function isLogin(arg0: boolean) {
    throw new Error('Function not implemented.');
}
