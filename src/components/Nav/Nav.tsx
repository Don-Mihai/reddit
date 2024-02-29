import './Nav.scss';
import { useState, memo } from 'react';
import { List } from '@mui/material';
import { INavState, initialState, Topics } from './utils';
import LinkComponent from '../LinkComponent';

const Nav = memo(() => {
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

            <a href="https://www.redditinc.com/" className="nav__copyright">
                Reddit, Inc. &copy; 2024. All rights reserved.
            </a>
        </div>
    );
});

export default Nav;
