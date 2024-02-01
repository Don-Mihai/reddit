import Button from '@mui/material/Button';
import './Nav.scss';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { games, sports, businesses, cryptos, televisions, celebrities, subTopics, resources, subResources, languages } from './utils';

const Nav = () => {
    const [open, setOpen] = useState(true);
    const [openSubGame, setOpenSubGame] = useState(false);
    const [openSubSport, setOpenSubSport] = useState(false);
    const [openSubBusiness, setOpenSubBusiness] = useState(false);
    const [openSubCrypto, setOpenSubCrypto] = useState(false);
    const [openSubTv, setOpenSubTv] = useState(false);
    const [openSubCelebrity, setOpenSubCelebrity] = useState(false);
    const [openResource, setOpenResource] = useState(true);
    const [openLang, setOpenLang] = useState(true);
    const [openSubTopics, setOpenSubTopics] = useState(false);
    const [openSubResources, setOpenSubResources] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickSubGame = () => {
        setOpenSubGame(!openSubGame);
    };

    const handleClickSubSport = () => {
        setOpenSubSport(!openSubSport);
    };

    const handleClickSubBusiness = () => {
        setOpenSubBusiness(!openSubBusiness);
    };

    const handleClickSubCrypto = () => {
        setOpenSubCrypto(!openSubCrypto);
    };

    const handleClickSubTv = () => {
        setOpenSubTv(!openSubTv);
    };

    const handleClickSubCelebrity = () => {
        setOpenSubCelebrity(!openSubCelebrity);
    };

    const handleClickResource = () => {
        setOpenResource(!openResource);
    };

    const handleClickLang = () => {
        setOpenLang(!openLang);
    };

    const handleClickSubTopics = () => {
        setOpenSubTopics(!openSubTopics);
    };

    const handleClickSubResources = () => {
        setOpenSubResources(!openSubResources);
    };

    return (
        <div className="nav">
            <List className="nav__list" sx={{ width: '100%', maxWidth: 220 }}>
                <ListItemButton className="nav__title" onClick={handleClick}>
                    <ListItemText primary="Topics" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={handleClickSubGame}>
                            <img className="nav__icon" src={require('./img/joystick.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Gaming" />
                            {openSubGame ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {games.map(item => {
                            return (
                                <Collapse in={openSubGame} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={handleClickSubSport}>
                            <img className="nav__icon" src={require('./img/tennisball.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Sports" />
                            {openSubSport ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {sports.map(item => {
                            return (
                                <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={handleClickSubBusiness}>
                            <img className="nav__icon" src={require('./img/graphics.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Business" />
                            {openSubBusiness ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {businesses.map(item => {
                            return (
                                <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={handleClickSubCrypto}>
                            <img className="nav__icon" src={require('./img/crypto.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Crypto" />
                            {openSubCrypto ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {cryptos.map(item => {
                            return (
                                <Collapse in={openSubCrypto} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={handleClickSubTv}>
                            <img className="nav__icon" src={require('./img/tv.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Television" />
                            {openSubTv ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {televisions.map(item => {
                            return (
                                <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={handleClickSubCelebrity}>
                            <img className="nav__icon" src={require('./img/star.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Celebrity" />
                            {openSubCelebrity ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {celebrities.map(item => {
                            return (
                                <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>
            </List>

            <List className="nav__list" sx={{ width: '100%', maxWidth: 220 }}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subTopics.map(item => {
                            return (
                                <Collapse in={openSubTopics} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <img className="nav__icon" src={item.src} alt="" width={30} height={30} />
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>
                <Button className="nav__button" onClick={handleClickSubTopics} variant="contained">
                    See more
                </Button>
            </List>

            <List className="nav__list" sx={{ width: '100%', maxWidth: 220 }}>
                <ListItemButton className="nav__title" onClick={handleClickResource}>
                    <ListItemText primary="Resources" />
                    {openResource ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openResource} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {resources.map(item => {
                            return (
                                <Collapse in={openResource} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <img className="nav__icon" src={item.src} alt="" width={30} height={30} />
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>
            </List>

            <List className="nav__list" sx={{ width: '100%', maxWidth: 220 }}>
                <Collapse in={openSubResources} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subResources.map(item => {
                            return (
                                <Collapse in={openSubResources} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <img className="nav__icon" src={item.src} alt="" width={30} height={30} />
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>
                <Button className="nav__button" onClick={handleClickSubResources} variant="contained">
                    See more
                </Button>
            </List>

            <List className="nav__list" sx={{ width: '100%', maxWidth: 220 }}>
                <ListItemButton className="nav__title" onClick={handleClickLang}>
                    <ListItemText primary="Popular posts" />
                    {openLang ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openLang} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {languages.map(item => {
                            return (
                                <Collapse in={openLang} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>
            </List>
        </div>
    );
};

export default Nav;
