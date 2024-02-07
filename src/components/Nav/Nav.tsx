import './Nav.scss';
import { useState } from 'react';
import { List } from '@mui/material';
import { INavState, initialState, Topics } from './utils';
import LinkComponent from '../LinkComponent';

const Nav = () => {
    const [nav, setNav] = useState<INavState>(initialState);

    const changeNav = (key: keyof INavState) => {
        setNav({ ...nav, [key]: !nav[key] });
    };

    return (
        <div className="nav">
            <List className="nav__list nav__list-padding" sx={{ width: '100%', maxWidth: 220 }}>
                {Topics.map((data, index) => {
                    return <LinkComponent key={index} data={data} nav={nav} changeNav={changeNav} />;
                })}
            </List>

            <List className="nav__list" sx={{ width: '100%', maxWidth: 220 }}>
                <Collapse in={nav.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subTopics.map(item => {
                            return (
                                <Collapse in={nav.openSubTopics} timeout="auto" unmountOnExit>
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
                <Button className="nav__button" onClick={() => changeNav('openSubTopics')} variant="contained">
                    See more
                </Button>
            </List>

            <List className="nav__list" sx={{ width: '100%', maxWidth: 220 }}>
                <ListItemButton className="nav__title" onClick={() => changeNav('openResource')}>
                    <ListItemText primary="Resources" />
                    {nav.openResource ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={nav.openResource} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {resources.map(item => {
                            return (
                                <Collapse in={nav.openResource} timeout="auto" unmountOnExit>
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
                <Collapse in={nav.openSubResources} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subResources.map(item => {
                            return (
                                <Collapse in={nav.openSubResources} timeout="auto" unmountOnExit>
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
                <Button className="nav__button" onClick={() => changeNav('openSubResources')} variant="contained">
                    See more
                </Button>
            </List>

            <List className="nav__list" sx={{ width: '100%', maxWidth: 220 }}>
                <ListItemButton className="nav__title" onClick={() => changeNav('openLang')}>
                    <ListItemText primary="Popular posts" />
                    {nav.openLang ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={nav.openLang} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {languages.map(item => {
                            return (
                                <Collapse in={nav.openLang} timeout="auto" unmountOnExit>
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
            <a href="https://www.redditinc.com/" className="nav__copyright">
                Reddit, Inc. &copy; 2024. All rights reserved.
            </a>
        </div>
    );
};

export default Nav;

const LinkComponent = ({ data }: any) => {
    return (
        <>
            <h4>{data.name}</h4>
            {data.sublinks && data.sublinks.length > 0 && (
                <ul>
                    {data.sublinks.map((sublink: any, index: any) => (
                        <li key={index}>
                            <LinkComponent data={sublink} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};
