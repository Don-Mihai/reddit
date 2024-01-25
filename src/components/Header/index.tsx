import { Button, IconButton, Dialog, Modal, TextField } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import './Header.scss';

const Header = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
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
                <Dialog open={open} onClose={onClose}>
                    <div className="modal__wrap">
                        <h2 className="modal__title">Log In</h2>
                        <div className="modal__inputs">
                            <TextField label="Username" variant="filled" fullWidth />
                            <TextField label="Password" variant="filled" fullWidth />
                        </div>
                        <Button className="modal__button" variant="contained" fullWidth>
                            Log In
                        </Button>
                    </div>
                </Dialog>
            </div>
        </header>
    );
};

export default Header;
