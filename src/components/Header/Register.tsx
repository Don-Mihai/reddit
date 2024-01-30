import { TextField, Button } from "@mui/material";

const Register = ({changeMode}) => {
    return ( <>
        <h2 className="modal__title">Sing up</h2>
        
        <div className="modal__inputs">
            <TextField label="Email" variant="filled" fullWidth />
        </div>
        
        <div className="modal__link-wrap">
            Already a redditor?{' '}
            <span onClick={changeMode} className="modal__link">
                Log in
            </span>
        </div>
        
        <Button className="modal__button" variant="contained" fullWidth>
            Log In
        </Button>
        </> );
}
export default Register;

