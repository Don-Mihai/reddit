import './Home.scss';
import Post from '../../components/Post';
import CreatePost from '../../components/CreatePost';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { add, deletePost, get, saveChangesAsync } from '../../redux/Post';
import { AppDispatch, RootState } from '../../redux/store';
import { PCreatePost, categories } from '../../redux/Post/types';

import { getById, setUserAuth } from '../../redux/Users';

import PostSkeleton from '../../components/Post/PostSkeleton';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const initialState = { title: '', text: '', contentUrl: '' };

const Home = () => {
  const [formValues, setFormValues] = useState(initialState);

  const { posts, isLoading } = useSelector((state: RootState) => state.post);

  const isUserAuth = useSelector((state: RootState) => state.users.isUserAuth);
  const user = useSelector((state: RootState) => state.users.currentUser);

  const dispatch = useDispatch<AppDispatch>();
  const getPosts = async () => {
    dispatch(get());
  };

  useEffect(() => {
    getPosts();

    const id = localStorage.getItem('userId');

    if (id) {
      dispatch(setUserAuth(true));
    }

    dispatch(getById(id));
  }, []);

  const clear = () => {
    setFormValues(initialState);
  };

  const addPost = async () => {
    const payload: PCreatePost = {
      title: formValues.title,
      text: formValues.text,
      contentUrl: formValues.contentUrl,
      author: user,
    };

    dispatch(add(payload));

    clear();
  };

  const onchange = (event: any) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [key]: value });
  };

  const onDeletePost = async (postId: number | string) => {
    dispatch(deletePost(postId));
  };

  const onSaveChangesPost = async (formValues: any, postId: number | string) => {
    dispatch(saveChangesAsync({ formValues, postId }));
  };
  const navigate = useNavigate();
  const onOpenPost = (id: any) => {
    navigate(id);
  };

  const [category, setCategory] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <>
      {isUserAuth && <CreatePost formValues={formValues} addPost={addPost} onchange={onchange} />}

      <InputLabel id="demo-simple-select-label">Категория</InputLabel>
      <Select fullWidth labelId="demo-simple-select-label" id="demo-simple-select" displayEmpty value={category} onChange={handleChange}>
        <MenuItem value="">All</MenuItem>
        {categories.map((category) => (
          <MenuItem value={category}>{category}</MenuItem>
        ))}
      </Select>

      <div className="posts">
        {isLoading
          ? Array.from({ length: 6 }, (_, index) => <PostSkeleton key={index} />)
          : posts
              .filter((post) => {
                if (category === '') {
                  return true;
                } else {
                  return post?.category?.split?.(', ').includes?.(category);
                }
              })
              .map((post) => {
                return <Post onDelete={onDeletePost} post={post} onSaveChanges={onSaveChangesPost} onOpenPost={onOpenPost} isHomePage={true} />;
              })}
      </div>
    </>
  );
};

export default Home;
