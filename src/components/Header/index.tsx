import { Button, IconButton, Dialog, TextField, dividerClasses, Tooltip, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import './Header.scss';
import Register from './Register';
import Auth from './Auth';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
const Header = () => {
    const [open, setOpen] = useState(false);
    const [isReg, setIsReg] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const count = useSelector((state: RootState) => state.post.value);

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
                <div className="header__logo">
                    <img className="header__logo__img" src={require('./img/logo.png')} />
                    <img className="header__logo__img-wordmark" src={require('./img/wordmark.png')} />
                </div>
            </Tooltip>
            {count}
            <div className="header__input">
                <input className="input" type="text" placeholder="Search Reddit" />
            </div>
            <div className="actions">
                <Button className="actions__app-btn btn" variant="contained">
                    <img className="actions__app-img" src={require('./img/qr.png')} />
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
            </div>
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
        </header>
    );
};

export default Header;
