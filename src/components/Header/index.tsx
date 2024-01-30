import { Button, IconButton, Dialog, TextField, dividerClasses, Tooltip } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import './Header.scss';
import Register from './Register';
import Auth from './Auth';
const Header = () => {
    const [open, setOpen] = useState(false);
    const [isReg, setIsReg] = useState(true);

    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const changeMode = () => {
        setIsReg(!isReg);
    };

    return (
        <header className="header">
            <Tooltip title="Go to Reddit Home" arrow className="header__tooltip">
                <div className="logo">
                    <img className="logo__img" src={require('./logo.png')} />
                    <img className="logo__img-wordmark" src={require('./wordmark.png')} />
                </div>
            </Tooltip>
            <div className="header__input">
                <input className="input" type="text" placeholder="Search Reddit" />
            </div>
            <div className="actions">
                <Button className="actions__app-btn btn" variant="contained">
                    <img className="actions__app-img" src={require('./qr.png')} />
                    <div>Get app</div>
                </Button>
                <Button className="actions__login-btn btn" onClick={onOpen} variant="contained">
                    Log in
                </Button>
                <IconButton className="actions__icon-btn btn">
                    {' '}
                    <MoreHorizIcon />{' '}
                </IconButton>
                <Dialog className="modal" open={open} onClose={onClose}>
                    <div className="modal__wrap">{isReg ? <Auth changeMode={changeMode} /> : <Register changeMode={changeMode} />}</div>
                </Dialog>
            </div>
        </header>
    );
};

export default Header;
