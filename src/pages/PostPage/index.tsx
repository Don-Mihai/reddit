import Post from '../../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getOnePost, saveChangesAsync } from '../../redux/Post';
import { useParams } from 'react-router';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';

const PostPage = () => {
  const { post } = useSelector((state: RootState) => state.post);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOnePost(id) as any);
    }
  }, []);

  const onDeletePost = (postId: number | string) => {
    dispatch(deletePost(postId) as any);
  };

  const onSaveChangesPost = (formValues: any, postId: number | string) => {
    dispatch(saveChangesAsync({ formValues, postId }) as any);
  };

  return <Post onDelete={onDeletePost} post={post} onSaveChanges={onSaveChangesPost} onOpenPost={() => {}} isHomePage={false} />;
};

export default PostPage;
