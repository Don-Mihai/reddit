import { VisibilityOff, Visibility } from '@mui/icons-material';
import { TextField, Button, FormControl, OutlinedInput, IconButton, InputAdornment, InputLabel, FilledInput } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from 'react';
import { IUser } from '../../pages/Home/utils';
import { useDispatch } from 'react-redux';
import { regUser } from '../../redux/Post';
import { AppDispatch } from '../../redux/store';
const EMAILREGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const initialState = { email: '', username: '', password: '' };

const Register = (props: any) => {
    const [disabled, setDisabled] = useState(true);
    const [regMail, setRegMail] = useState(true);
    const [formValues, setFormValues] = useState(initialState);
    function isEmailValid(value: string) {
        return EMAILREGEXP.test(value);
    }
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(show => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const isValid = isEmailValid(formValues.email);
        console.log(isValid);
        if (!isValid) setDisabled(true);
        else setDisabled(false);
    }, [formValues.email]);

    const onchange = (event: any) => {
        const key = event.target.name;
        const value = event.target.value;
        setFormValues({ ...formValues, [key]: value });
    };

    const registerEmail = () => {
        setRegMail(!regMail);
    };

    const close = props.changeMode;
    const isLogin = props.onIsLogin;

    const onRegUser = async () => {
        const payload: IUser = {
            email: formValues.email,
            username: formValues.username,
            password: formValues.password,
            id: 0,
            avatarUrl: '',
        };

        dispatch(regUser(payload));
        close();
        isLogin(true);
    };

    return (
        <>
            {' '}
            {regMail ? (
                <>
                    <h2 className="modal__title">Sign up</h2>
                    <h3>
                        By continuing, you agree to our <a href="#">User Agreement</a> and acknowledge that you understand the <a href="#">Privacy Policy.</a>.
                    </h3>

                    <button className="authorization">
                        <span>Continue with Google</span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="authorization_icon">
                            <g>
                                <path
                                    fill="#EA4335"
                                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                ></path>
                                <path
                                    fill="#4285F4"
                                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                ></path>
                                <path
                                    fill="#FBBC05"
                                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                ></path>
                                <path
                                    fill="#34A853"
                                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                ></path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                            </g>
                        </svg>
                    </button>

                    <div className="line">
                        <span className="line_border"></span>
                        <span className="line_text">OR</span>
                        <span className="line_border"></span>
                    </div>

                    <div className="modal__inputs">
                        <TextField value={formValues.email} name="email" onChange={onchange} label="E-mail" variant="filled" fullWidth />
                    </div>

                    <div className="modal__link-wrap">
                        Already a redditor?
                        <span onClick={props.changeMode} className="modal__link">
                            log in
                        </span>
                    </div>

                    {disabled ? (
                        <Button className="modal__button_disabled" variant="contained" fullWidth>
                            Continue
                        </Button>
                    ) : (
                        <Button className="modal__button" onClick={registerEmail} variant="contained" fullWidth>
                            Continue
                        </Button>
                    )}
                </>
            ) : (
                <>
                    <IconButton aria-label="back-reg" size="large" onClick={registerEmail}>
                        <ArrowBackIcon fontSize="inherit" />
                    </IconButton>
                    <h2 className="modal__title">Create your username and password</h2>
                    <h5>Reddit is anonymous, so your username is what you’ll go by here. Choose wisely—because once you get a name, you can’t change it.</h5>

                    <div className="modal__inputs">
                        <TextField value={formValues.username} onChange={onchange} name="username" label="Username*" variant="filled" fullWidth />
                    </div>

                    <div className="modal__inputs">
                        <FormControl variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Password*</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                value={formValues.password}
                                onChange={onchange}
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>

                    <Button className="modal__button_disabled" onClick={onRegUser} variant="contained" fullWidth>
                        Continue
                    </Button>
                </>
            )}
        </>
    );
};

export default Register;
function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
