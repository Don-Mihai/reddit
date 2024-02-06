import { Button, IconButton, Dialog, TextField, dividerClasses, Tooltip, MenuItem, Menu } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import  BasicMenu   from './Menu'


import { useState } from 'react';
import './Header.scss';
import Register from './Register';
import Auth from './Auth';
import React from 'react';
const Header = () => {
    
    const [open, setOpen] = useState(false);
    const [isReg, setIsReg] = useState(true);
    

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openn = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const changeMode = () => {
        setIsReg(!isReg);
        console.log(isReg);
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
                <IconButton className="actions__icon-btn btn" onClick={handleClick}>
                    {' '}
                    <MoreHorizIcon />{' '}
                </IconButton>
                <Dialog className="modal" open={open} onClose={onClose}>
                    <div className="modal__wrap">{isReg ? <Auth changeMode={changeMode} /> : <Register changeMode={changeMode} />}</div>
                </Dialog>









                <div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openn}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Log In / Sign Up</MenuItem>
                        <MenuItem onClick={handleClose}>Advertise on Reddit</MenuItem>
                        <MenuItem onClick={handleClose}>Shop Collectible Avatars</MenuItem>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
