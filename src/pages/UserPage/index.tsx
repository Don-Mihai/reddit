import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../redux/Users/types';
import { AppDispatch, RootState } from '../../redux/store';
import './UserPage.scss';
import { useEffect, useState } from 'react';
import { getById, getUserslist, setUserAuth, updateUser } from '../../redux/Users';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import InputMask from 'react-input-mask';

const initialState = {} as IUser;

const UserPage = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { currentUser, isUserAuth } = useSelector((state: RootState) => state.users);
  const [user, setUser] = useState(null as IUser | null);

  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const getUser = async () => {
    const user = (await axios.get(`/user/${userId}`)).data;
    setUser(user);
  };

  useEffect(() => {
    getUser();

    if (userId) {
      dispatch(setUserAuth(true));
    }
    dispatch(getById(userId || null));
  }, []);

  const onChangeUserData = async () => {
    const payload: Partial<IUser> = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      avatarUrl: formValues.avatarUrl,
      birthdate: formValues.birthdate,
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
                  <img src="https://avatars.akamai.steamstatic.com/bf9c5efeb726c14f07e66c408424067149a97724.jpg" className="userPage__logo" alt="Popular" />
                  <div className="userPage__banner-info-date">
                    <span className="username">{user?.username}</span>
                    <span className="email">{user?.email}</span>
                    <span className="birthdate">{user?.birthdate}</span>
                  </div>
                </div>
              </div>
            </div>
            {isUserAuth && currentUser.id === user.id ? (
              <>
                <div className="userPage__changes">
                  <input type="text" placeholder="Username" value={formValues.username} name="username" onChange={onchange} />
                  <input type="text" placeholder="Password" value={formValues.password} name="password" onChange={onchange} />
                  <input type="text" placeholder="Email" value={formValues.email} name="email" onChange={onchange} />
                  {/* <InputMask
                                        type="text"
                                        placeholder="Birthdate"
                                        value={formValues.birthdate}
                                        name="birthdate"
                                        onChange={onchange}
                                        mask="99.99.9999"
                                    /> */}
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
