import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../redux/Users/types';
import { AppDispatch, RootState } from '../../redux/store';
import './UserPage.scss';
import { useEffect, useState } from 'react';
import { getById, getUserslist, setUserAuth, updateUser } from '../../redux/Users';
import { useParams } from 'react-router-dom';

const initialState = { username: '', password: '', email: '', birthday: '' };

const UserPage = () => {
    const [formValues, setFormValues] = useState(initialState);
    const currentUser = useSelector((state: RootState) => state.users.currentUser);
    const dispatch = useDispatch<AppDispatch>();
    const usersList = useSelector((state: RootState) => state.users.usersList);
    const { username } = useParams<{ username: string }>();

    const user: any = usersList.find((user: IUser) => user.username === username);

    useEffect(() => {
        const id = localStorage.getItem('userId');
        if (id) {
            dispatch(setUserAuth(true));
        }
        dispatch(getById(id));
        dispatch(getUserslist());
    }, []);

    const onChangeUserData = async () => {
        const payload: any = {
            username: formValues.username ? formValues.username : currentUser?.username,
            email: formValues.email ? formValues.email : currentUser?.email,
            birthday: formValues.birthday ? formValues.birthday : currentUser?.birthday,
        };

        dispatch(updateUser(payload));
    };

    const onchange = (event: any) => {
        const key = event.target.name;
        const value = event.target.value;
        setFormValues({ ...formValues, [key]: value });
    };

    return (
        <>
            {user ? (
                <>
                    <div className="userPage">
                        <div className="userPage__info">
                            <div className="userPage__banner">
                                <div className="userPage__banner-info">
                                    <img src="https://avatars.akamai.steamstatic.com/bf9c5efeb726c14f07e66c408424067149a97724.jpg" className="userPage__logo" />
                                    <div className="userPage__banner-info-date">
                                        <span className="username">{user?.username}</span>
                                        <span className="email">{user?.email}</span>
                                        <span className="birthdate">20.05.1998</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {currentUser.id === user.id ? (
                            <>
                                <div className="userPage__changes">
                                    <input type="text" placeholder="Username" value={formValues.username} name="username" onChange={onchange} />
                                    <input type="text" placeholder="Password" value={formValues.password} name="password" onChange={onchange} />
                                    <input type="text" placeholder="Email" value={formValues.email} name="email" onChange={onchange} />
                                    <input type="date" placeholder="Birthday" value={formValues.birthday} name="birthday" onChange={onchange} />
                                    <button onClick={onChangeUserData}>Сохранить</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <span>Нет возможности редактирования, так как страница другого пользователя</span>
                            </>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <h1>Такого пользователя не существует!</h1>
                </>
            )}
        </>
    );
};

export default UserPage;
