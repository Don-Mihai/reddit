import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../redux/Users/types';
import { AppDispatch, RootState } from '../../redux/store';
import './UserPage.scss';
import { useEffect, useState } from 'react';
import { getById, getUserslist, setUserAuth, updateUser } from '../../redux/Users';
import { useParams } from 'react-router-dom';
import { Avatar } from '@mui/material';
// import InputMask from 'react-input-mask';

const initialState = {} as IUser;

const UserPage = () => {
  const [formValues, setFormValues] = useState(initialState);
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const dispatch = useDispatch<AppDispatch>();
  const usersList = useSelector((state: RootState) => state.users.usersList);
  const { username } = useParams<{ username: string }>();
  const isUserAuth = useSelector((state: RootState) => state.users.isUserAuth);
  const user: any = usersList.find((user: IUser) => user.username === username);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (id) {
      dispatch(setUserAuth(true));
    }
    dispatch(getById(id));
    dispatch(getUserslist());
  }, [dispatch]);

  const onChangeUserData = async () => {
    const payload: Partial<IUser> = {
      username: formValues.username ? formValues.username : currentUser.username,
      email: formValues.email ? formValues.email : currentUser.email,
      password: formValues.password ? formValues.password : currentUser.password,
      avatarUrl: formValues.avatarUrl ? formValues.avatarUrl : currentUser.avatarUrl,
      birthdate: formValues.birthdate ? formValues.birthdate : currentUser.birthdate,
    };
    console.log(2);

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
                <Avatar src="https://avatars.akamai.steamstatic.com/bf9c5efeb726c14f07e66c408424067149a97724.jpg" alt="" />
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
