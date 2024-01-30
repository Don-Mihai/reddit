import { Button, IconButton, Dialog, Modal, TextField } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import './Header.scss';
import Auth from './Auth';
import Register from './Register';

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
            <div className="logo">
                <img src="" alt="" />
                <span>reddit</span>
            </div>
            <input type="text" placeholder="Search Reddit" />
            <div className="actions">
                <Button variant="contained">Get app</Button>
                <Button onClick={onOpen} variant="contained">
                    Log In
                </Button>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
                <Dialog className="modal" open={open} onClose={onClose}>
                    <div className="modal__wrap">{isReg ? <Auth changeMode={changeMode} /> : <Register changeMode={changeMode} />}</div>
                </Dialog>
            </div>
        </header>
    );
};

export default Header;
