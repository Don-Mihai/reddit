import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Popular from '../../components/Popular';
import Chat from '../../components/Chat';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MessageIcon from '@mui/icons-material/Message';

const MainPages = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Header />

      <main className="main">
        <Nav />
        <div className="content">
          <Outlet />
        </div>
        <Popular />
      </main>
      {/* <IconButton sx={{ position: 'fixed', bottom: '10px', right: '10px' }} onClick={handleClickOpen} color="primary">
        <MessageIcon />
      </IconButton>
      <Chat open={open} handleClose={handleClose} /> */}
    </div>
  );
};

export default MainPages;
