import Button from '@mui/material/Button';
import './Nav.scss';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { games } from './utils';

const Nav = () => {
    const [open, setOpen] = useState(true);
    const [openSubGame, setOpenSubGame] = useState(false);
    const [openSubSport, setOpenSubSport] = useState(false);
    const [openSubBusiness, setOpenSubBusiness] = useState(false);
    const [openSubCrypto, setOpenSubCrypto] = useState(false);
    const [openSubTv, setOpenSubTv] = useState(false);
    const [openSubCelebrity, setOpenSubCelebrity] = useState(false);

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

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 220, bgcolor: 'aqua', borderRadius: '10px' }}>
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Topics" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleClickSubGame}>
                            <img className="nav__icon" src={require('./img/joystick.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Gaming" />
                            {openSubGame ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {games.map(item => {
                            return (
                                <Collapse in={openSubGame} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
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
                        <ListItemButton onClick={handleClickSubSport}>
                            <img className="nav__icon" src={require('./img/tennisball.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Sports" />
                            {openSubSport ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="NFL" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="NBA" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Megan Anderson" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Atlanta Hawks" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Los Angeles Lakers" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Boston Celtics" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Arsenal F.C." />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Philadelphia 76ers" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Premier League" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubSport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="UFC" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleClickSubBusiness}>
                            <img className="nav__icon" src={require('./img/graphics.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Business" />
                            {openSubBusiness ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="GameStop" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Moderna" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Pfizer" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Johnson & Johnson" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="AstraZeneca" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Walgreens" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Best Buy" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Novavax" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="SpaceX" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubBusiness} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Tesla" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleClickSubCrypto}>
                            <img className="nav__icon" src={require('./img/crypto.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Crypto" />
                            {openSubCrypto ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openSubCrypto} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Cardano" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCrypto} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Dogecoin" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCrypto} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Algorand" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCrypto} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Bitcoin" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCrypto} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Litecoin" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCrypto} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Basic Attention Token" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCrypto} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Bitcoin Cash" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleClickSubTv}>
                            <img className="nav__icon" src={require('./img/tv.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Television" />
                            {openSubTv ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="The Real Housewives of Atlanta" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="The Bachelor" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Sister Wives" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="90 Day Fiance" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Wife Swap" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="The Amazing Race Australia" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Married at First Sight" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="The Real Housewives of Dallas" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="My 600-lb Life" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubTv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Last Week Tonight with John Oliver" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={handleClickSubCelebrity}>
                            <img className="nav__icon" src={require('./img/star.png')} alt="" width={30} height={30} />
                            <ListItemText primary="Celebrity" />
                            {openSubCelebrity ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Kim Kardashian" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Doja Cat" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Iggy Azalea" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Jamie Lee Curtis" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Natalie Portman" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Henry Cavill" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Millie Bobby Brown" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Tom Hiddleston" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Keanu Reeves" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openSubCelebrity} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Keanu Reeves" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>
            </List>

            <nav className="nav">
                <div className="nav__wrap">
                    {/* <h3 className="nav__title" onClick={'myFunction()'}>
Topics
</h3> */}
                    {/* <Button onClick={onscroll} variant="contained">
                        Topics
                    </Button> */}

                    <ul className="nav__list">
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/pets.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Animals & Pets
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/anime.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Anime
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/art.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Art
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/wheel.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Cars and Motor Vehicles
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/tractor.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Crafts and DIY
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/race.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Culture, Race, and Ethnicity
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/philosophy.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Ethics & Philosophy
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/fashion.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Fashion
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/history.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    History
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/law.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Law
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/education.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Learning and Education
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/military.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Military
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/movie.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Movie
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/music.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Music
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/place.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Place
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/podcast.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Podcasts and Streamers
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/politics.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Politics
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/programming.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Programming
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/book.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Reading, Writing, and Literature
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/candle.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Religion and Spirituality
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/flask.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Science
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/technology.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Technology
                                </a>
                            </div>
                        </li>
                        <li className="nav__item">
                            <div className="nav__wrapper">
                                <img className="nav__icon" src={require('./img/travel.png')} alt="" width={30} height={30} />
                                <a href="#" className="nav__link">
                                    Travel
                                </a>
                            </div>
                        </li>
                    </ul>

                    <Button variant="contained">See more</Button>
                </div>
                <div className="nav__list">
                    <div className="nav__wrap">
                        {<Button variant="contained">Resources</Button>}
                        <ul className="nav__list">
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/about.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        About Reddit
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/advertise.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        Advertise
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/help.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        Help
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/blog.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        Blog
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/career.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        Careers
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/micro.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        Press
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/communities.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        Communities
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/hourglass.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        Best of Reddit
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/topics.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        Topics
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/content.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        Content Policy
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/privacy.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        Privacy Policy
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item">
                                <div className="nav__wrapper">
                                    <img className="nav__icon" src={require('./img/agree.png')} alt="" width={30} height={30} />
                                    <a href="#" className="nav__link">
                                        User Agreement
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <Button variant="contained">See more</Button>
                    </div>
                </div>
                <div className="nav__list">
                    <div className="nav__wrap">
                        {<Button variant="contained">Popular posts</Button>}
                        <ul className="nav__list">
                            <li className="nav__item-lang">
                                <div className="nav__wrapper">
                                    <a href="#" className="nav__link">
                                        English / Global
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item-lang">
                                <div className="nav__wrapper">
                                    <a href="#" className="nav__link">
                                        Deutsch
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item-lang">
                                <div className="nav__wrapper">
                                    <a href="#" className="nav__link">
                                        Español
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item-lang">
                                <div className="nav__wrapper">
                                    <a href="#" className="nav__link">
                                        Français
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item-lang">
                                <div className="nav__wrapper">
                                    <a href="#" className="nav__link">
                                        Italiano
                                    </a>
                                </div>
                            </li>
                            <li className="nav__item-lang">
                                <div className="nav__wrapper">
                                    <a href="#" className="nav__link">
                                        Português
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
