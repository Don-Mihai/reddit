import Button from '@mui/material/Button';
import './Nav.scss';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import {
    mainNav,
    games,
    sports,
    businesses,
    cryptos,
    televisions,
    celebrities,
    subTopics,
    resources,
    subResources,
    languages,
    INavState,
    initialState,
} from './utils';

const Nav = () => {
    const [nav, setNav] = useState<INavState>(initialState);

    const changeNav = (key: keyof INavState) => {
        setNav({ ...nav, [key]: !nav[key] });
    };

    return (
        <div className="nav">
            <List className="nav__list nav__list-border" sx={{ width: '100%', maxWidth: 220 }}>
                <Collapse in={nav.openTopMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {mainNav.map(item => {
                            return (
                                <Collapse in={nav.openTopMenu} timeout="auto" unmountOnExit>
                                    <List className="nav__list" component="div" disablePadding>
                                        <ListItemButton className="nav__item" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <img className="nav__icon" src={item.src} alt="" width={20} height={20} />
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>
            </List>

            <List className="nav__list nav__list-padding" sx={{ width: '100%', maxWidth: 220 }}>
                <ListItemButton className="nav__title" onClick={() => changeNav('open')}>
                    <ListItemText className="nav__text-title" primary="Topics" />
                    {nav.open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={nav.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={() => changeNav('openSubGame')}>
                            <img className="nav__icon" src={require('./img/joystick.png')} alt="" width={20} height={20} />
                            <ListItemText className="nav__text" primary="Gaming" />
                            {nav.openSubGame ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {games.map(item => {
                            return (
                                <Collapse in={nav.openSubGame} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist nav__sublist-topics" component="div" disablePadding>
                                        <ListItemButton
                                            className="nav__subitem nav__subitem-topics"
                                            sx={{ pl: 4 }}
                                            onClick={() => window.open(item.url, '_blank')}
                                        >
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>

                <Collapse in={nav.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={() => changeNav('openSubSport')}>
                            <img className="nav__icon" src={require('./img/tennisball.png')} alt="" width={20} height={20} />
                            <ListItemText className="nav__text" primary="Sports" />
                            {nav.openSubSport ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {sports.map(item => {
                            return (
                                <Collapse in={nav.openSubSport} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist nav__sublist-topics" component="div" disablePadding>
                                        <ListItemButton
                                            className="nav__subitem nav__subitem-topics"
                                            sx={{ pl: 4 }}
                                            onClick={() => window.open(item.url, '_blank')}
                                        >
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>

                <Collapse in={nav.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={() => changeNav('openSubBusiness')}>
                            <img className="nav__icon" src={require('./img/graphics.png')} alt="" width={20} height={20} />
                            <ListItemText className="nav__text" primary="Business" />
                            {nav.openSubBusiness ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {businesses.map(item => {
                            return (
                                <Collapse in={nav.openSubBusiness} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist nav__sublist-topics" component="div" disablePadding>
                                        <ListItemButton
                                            className="nav__subitem nav__subitem-topics"
                                            sx={{ pl: 4 }}
                                            onClick={() => window.open(item.url, '_blank')}
                                        >
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>

                <Collapse in={nav.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={() => changeNav('openSubCrypto')}>
                            <img className="nav__icon" src={require('./img/crypto.png')} alt="" width={20} height={20} />
                            <ListItemText className="nav__text" primary="Crypto" />
                            {nav.openSubCrypto ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {cryptos.map(item => {
                            return (
                                <Collapse in={nav.openSubCrypto} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist nav__sublist-topics" component="div" disablePadding>
                                        <ListItemButton
                                            className="nav__subitem nav__subitem-topics"
                                            sx={{ pl: 4 }}
                                            onClick={() => window.open(item.url, '_blank')}
                                        >
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>

                <Collapse in={nav.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={() => changeNav('openSubTv')}>
                            <img className="nav__icon" src={require('./img/tv.png')} alt="" width={20} height={20} />
                            <ListItemText className="nav__text" primary="Television" />
                            {nav.openSubTv ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {televisions.map(item => {
                            return (
                                <Collapse in={nav.openSubTv} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist nav__sublist-topics" component="div" disablePadding>
                                        <ListItemButton
                                            className="nav__subitem nav__subitem-topics"
                                            sx={{ pl: 4 }}
                                            onClick={() => window.open(item.url, '_blank')}
                                        >
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>

                <Collapse in={nav.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton className="nav__item" onClick={() => changeNav('openSubCelebrity')}>
                            <img className="nav__icon" src={require('./img/star.png')} alt="" width={20} height={20} />
                            <ListItemText className="nav__text" primary="Celebrity" />
                            {nav.openSubCelebrity ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        {celebrities.map(item => {
                            return (
                                <Collapse in={nav.openSubCelebrity} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist nav__sublist-topics" component="div" disablePadding>
                                        <ListItemButton
                                            className="nav__subitem nav__subitem-topics"
                                            sx={{ pl: 4 }}
                                            onClick={() => window.open(item.url, '_blank')}
                                        >
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>
            </List>

            <List className="nav__list nav__list-subpadding nav__list-border" sx={{ width: '100%', maxWidth: 220 }}>
                <Collapse in={nav.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subTopics.map(item => {
                            return (
                                <Collapse in={nav.openSubTopics} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <img className="nav__icon" src={item.src} alt="" width={20} height={20} />
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                    <Button className="nav__button" onClick={() => changeNav('openSubTopics')} variant="contained">
                        {nav.openSubTopics ? 'See less' : 'See more'}
                    </Button>
                </Collapse>
            </List>

            <List className="nav__list nav__list-padding" sx={{ width: '100%', maxWidth: 220 }}>
                <ListItemButton className="nav__title" onClick={() => changeNav('openResource')}>
                    <ListItemText className="nav__text-title" primary="Resources" />
                    {nav.openResource ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={nav.openResource} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {resources.map(item => {
                            return (
                                <Collapse in={nav.openResource} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <img className="nav__icon" src={item.src} alt="" width={20} height={20} />
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>
            </List>

            <List className="nav__list nav__list-subpadding" sx={{ width: '100%', maxWidth: 220 }}>
                <Collapse in={nav.openResource} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subResources.map(item => {
                            return (
                                <Collapse in={nav.openSubResources} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <img className="nav__icon" src={item.src} alt="" width={20} height={20} />
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                    <Button className="nav__button" onClick={() => changeNav('openSubResources')} variant="contained">
                        {nav.openSubResources ? 'See less' : 'See more'}
                    </Button>
                </Collapse>
            </List>

            <List className="nav__list" sx={{ width: '100%', maxWidth: 220 }}>
                <ListItemButton className="nav__title" onClick={() => changeNav('openLang')}>
                    <ListItemText className="nav__text-title" primary="Popular posts" />
                    {nav.openLang ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={nav.openLang} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {languages.map(item => {
                            return (
                                <Collapse in={nav.openLang} timeout="auto" unmountOnExit>
                                    <List className="nav__sublist" component="div" disablePadding>
                                        <ListItemButton className="nav__subitem" sx={{ pl: 4 }} onClick={() => window.open(item.url, '_blank')}>
                                            <ListItemText className="nav__text" primary={item.name} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            );
                        })}
                    </List>
                </Collapse>
            </List>
            <a href="https://www.redditinc.com/" className="nav__copyright">
                Reddit, Inc. &copy; 2024. All rights reserved.
            </a>
        </div>
    );
};

export default Nav;
