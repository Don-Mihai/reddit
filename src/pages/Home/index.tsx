import './Home.scss';
import Post from '../../components/Post/post';
import CreatePost from '../../components/CreatePost';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { add, deletePost, get, saveChangesAsync } from '../../redux/Post';
import { AppDispatch, RootState } from '../../redux/store';
import { PCreatePost } from '../../redux/Post/types';

import { getById, setUserAuth } from '../../redux/Users';

import PostSkeleton from '../../components/Post/PostSkeleton';

const initialState = { title: '', text: '', contentUrl: '' };

const Home = () => {
  const [formValues, setFormValues] = useState(initialState);

  const { posts, isLoading } = useSelector((state: RootState) => state.post);

  const isUserAuth = useSelector((state: RootState) => state.users.isUserAuth);

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

  return (
    <>
      {isUserAuth && <CreatePost formValues={formValues} addPost={addPost} onchange={onchange} />}

      <div className="posts">
        {isLoading
          ? Array.from({ length: 6 }, (_, index) => <PostSkeleton key={index} />)
          : posts.map((post) => {
              return <Post onDelete={onDeletePost} post={post} onSaveChanges={onSaveChangesPost} />;
            })}
      </div>
    </>
  );
};

export default Home;
