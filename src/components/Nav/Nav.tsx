import './Nav.scss';
import { useState, memo } from 'react';
import { Avatar, List } from '@mui/material';
import { INavState, initialState, Topics } from './utils';
import LinkComponent from '../LinkComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IUser } from '../../redux/Users/types';
import { Link } from 'react-router-dom';

const Nav = memo(() => {
    const [nav, setNav] = useState<INavState>(initialState);
    const isUserAuth = useSelector((state: RootState) => state.users.isUserAuth);
    const user: IUser = useSelector((state: RootState) => state.users.currentUser);

    const changeNav = (key: keyof INavState) => {
        setNav({ ...nav, [key]: !nav[key] });
    };

    return (
        <div className="nav">
            <List className="nav__list nav__list-padding" sx={{ width: '100%', maxWidth: 220 }}>
                {isUserAuth ? (
                    <>
                        <Link to={`/${user?.username}`} className="user">
                            <div className="user__logo">
                                <Avatar src="https://avatars.akamai.steamstatic.com/bf9c5efeb726c14f07e66c408424067149a97724.jpg" alt="" />
                            </div>
                            <div className="user__name">{user?.username}</div>
                        </Link>
                    </>
                ) : (
                    ''
                )}

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
