import { Button, IconButton, Dialog, Tooltip, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState, memo, useMemo, useCallback } from 'react';
import './Header.scss';
import Register from './Register';
import Auth from './Auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { logOutUser } from '../../redux/Users';

const Header = memo(() => {
  const [open, setOpen] = useState<boolean>(false);
  const [isReg, setIsReg] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const isUserAuth = useSelector((state: RootState) => state.users.isUserAuth);
  const dispatch = useDispatch<AppDispatch>();

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
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const changeMode = () => {
    setIsReg(!isReg);
    console.log(isReg);
  };

  const onIsReg = () => {
    setIsLogin(true);
    setOpen(false);
  };

  const onLogout = () => {
    localStorage.removeItem('userId');
    dispatch(logOutUser());
    handleClose();
  };

  const logo = useMemo(() => {
    return (
      <Tooltip title="Go to Reddit Home" arrow className="header__tooltip">
        <div className="header__logo">
          <img className="header__logo__img" src={require('./img/logo.png')} alt="Logo" />
          <img className="header__logo__img-wordmark" src={require('./img/wordmark.png')} alt="Logo" />
        </div>
      </Tooltip>
    );
  }, []);

  return (
    <header className="header">
      {logo}
      {!isLogin ? '' : <>Вы успешно зарегистрированы!</>}
      <div className="header__input">
        <input className="input" type="text" placeholder="Search Reddit" />
      </div>
      <div className="actions">
        <Button className="actions__app-btn btn" variant="contained">
          <img className="actions__app-img" src={require('./img/qr.png')} alt="Popular" />
          <div>Get app</div>
        </Button>
        {!isLogin ? '' :
        <Button className="actions__login-btn btn" onClick={onOpen} variant="contained">
          Log in
        </Button>
        }

        <IconButton className="actions__icon-btn btn" onClick={handleClick}>
          {' '}
          <MoreHorizIcon />{' '}
        </IconButton>
        <Dialog className="modal" open={open} onClose={onClose}>
          <div className="modal__wrap">
            {isReg ? <Auth changeMode={changeMode} onClose={setOpen} /> : <Register changeMode={changeMode} onClose={setOpen} onIsReg={onIsReg} />}
          </div>
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
          {isUserAuth ? <MenuItem onClick={onLogout}>LogOut</MenuItem> : ''}
        </Menu>
      </div>
    </header>
  );
});

export default Header;
