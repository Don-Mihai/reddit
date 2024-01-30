import { TextField, Button } from "@mui/material";

const Auth = ({changeMode} ) => {
    return (  <>
        <h2 className="modal__title">Log In</h2>

        <div className="modal__inputs">
            <TextField label="Username" variant="filled" fullWidth />
            <TextField label="Password" variant="filled" fullWidth />
        </div>

        <div className="modal__link-wrap">
            New to Reddit?{' '}
            <span onClick={changeMode} className="modal__link">
                Sign Up
            </span>
        </div>

        <Button className="modal__button" variant="contained" fullWidth>
            Log In
        </Button>
    </> );
}
 
export default Auth;