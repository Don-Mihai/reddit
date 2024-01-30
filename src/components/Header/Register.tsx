import { TextField, Button } from '@mui/material';

const Register = ({ changeMode }) => {
    return (
        <>
            <h2 className="modal__title">Sign Up</h2>
            <div className="modal__inputs">
                <TextField label="Username" variant="filled" fullWidth />
                <TextField label="Password" variant="filled" fullWidth />
            </div>
            <div className="modal__link-wrap">
                Already a redditor?
                <span onClick={changeMode} className="modal__link">
                    Log In
                </span>
            </div>

            <Button className="modal__button" variant="contained" fullWidth>
                Continue
            </Button>
        </>
    );
};

export default Register;
