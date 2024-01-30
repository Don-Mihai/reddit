import { TextField, Button } from "@mui/material";

const Auth = ({changeMode}) => {
    return ( 
        <>
    <h2 className="modal__title" >Log In</h2>
    <h3 className="modal__descr" >By continuing, you agree to our <a className="modal__descr-agreement" href="#">User Agreement</a>  and acknowledge that you understand the <a className="modal__descr-agreement" href="#">Privacy Policy</a>.</h3>
    <div className="line"> <span>OR</span> </div>
    
    

    <div className="modal__inputs">
        <TextField label="Username *" variant="filled" fullWidth />
        <TextField label="Password *" variant="filled" fullWidth />
    </div>
    <div className="modal__link-recovery">
    Forgot your <span className="modal__link" >username</span>  or <span className="modal__link" >password</span> ?
    </div>
    <div className="modal__link-wrap">
    New to Reddit? <span onClick={changeMode} className="modal__link">Sign Up</span>
    </div>
    <Button className="modal__button" variant="contained" fullWidth >
        Log In
</Button> 
</>
    );
}
 
export default Auth;
