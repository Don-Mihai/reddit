import { Avatar, Menu, MenuItem, TextField, TextareaAutosize } from '@mui/material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import './post.scss';
import { IPost } from '../../redux/Post/types';
import { useDispatch } from 'react-redux';
import { likePost, dislikePost } from '../../redux/Post';
import { AppDispatch } from '../../redux/store';
import { userInfo } from 'os';
import FileDrop from '../FileDrop';
import axios from 'axios';

interface Props {
  post: IPost;
  onDelete: (postId: number | string) => void;
  onSaveChanges: (formValues: any, postId: number | string) => void;
  onOpenPost: (postId: number | string) => void;
  isHomePage: boolean;
}

const Post = ({ post, onDelete, onSaveChanges, onOpenPost, isHomePage }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formValues, setFormValues] = useState(post);
  const [isCopied, setCopied] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChange = (event: any) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [key]: value });
  };

  const deletePost = async () => {
    onDelete(post.id);

    handleClose();
  };

  const editPost = () => {
    setIsEditMode(true);
  };

  const saveChanges = async () => {
    onSaveChanges(formValues, post.id);
    setIsEditMode(false);
  };

  const cancelChanges = () => {
    setFormValues(post);
    setIsEditMode(false);
  };

  const handleLike = () => {
    dispatch(likePost(post.id));
    console.log('лайк');
  };

  const handleDislike = () => {
    dispatch(dislikePost(post.id));
    console.log('дизлайк');
  };

  const copyUrl = (id: number | string) => {
    navigator.clipboard.writeText(`http://localhost:3000/home/${id}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const changePostImg = async (file: Blob) => {
    const formData = new FormData();
    formData.append('filedata', file);

    const url: string = (await axios.post(`http://localhost:5000/post/upload-image?id=${post?.id}`, formData)).data;

    onSaveChanges({ ...post, contentUrl: url }, post?.id);
  };

  return (
    <div className={`post ${isHomePage ? 'hoverable' : ''}`}>
      <div className="Header">
        <div className="group">
          <div className="icon">
            <Avatar src={`http://localhost:5000/` + post?.author?.avatarUrl} alt="" />
          </div>
          {!isEditMode ? <div className="title">{post?.title}</div> : <TextField name="title" onChange={onChange} value={formValues?.title} />}
        </div>
        <div className="buttons">
          {isEditMode ? (
            <>
              <IconButton color="success" className="actions__icon-btn btn" onClick={saveChanges}>
                <CheckIcon />
              </IconButton>
              <IconButton color="error" className="actions__icon-btn btn" onClick={cancelChanges}>
                <ClearIcon />
              </IconButton>
            </>
          ) : (
            <>
              <button className="join">join</button>
              <IconButton className="actions__icon-btn btn" onClick={handleClick}>
                <MoreHorizIcon />
              </IconButton>
            </>
          )}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={deletePost}>Удалить</MenuItem>
            <MenuItem onClick={editPost}>Редактировать</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="content" onClick={isEditMode ? () => {} : () => onOpenPost(post.id)} style={isHomePage ? { cursor: 'pointer' } : {}}>
        {!isEditMode ? <span className="cats_text">{post?.text}</span> : <TextareaAutosize name="text" onChange={onChange} value={formValues?.text} />}
        {Boolean(post?.contentUrl) && (
          <div className="image">
            <img src={`http://localhost:5000/` + post?.contentUrl} alt="cats" />
          </div>
        )}
        {isEditMode && (
          <FileDrop onSendFiles={changePostImg} borderRadius="0">
            <div className="post__drop"></div>
          </FileDrop>
        )}
      </div>
      <div className="footer">
        <div className="likes">
          <button onClick={handleDislike}>
            <svg
              className="icon"
              fill="currentColor"
              height="16"
              icon-name="downvote-outline"
              viewBox="0 0 20 20"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path>{' '}
            </svg>
          </button>
          <p>{post.countLike}</p>
          <button onClick={handleLike}>
            <svg className="icon" fill="currentColor" height="16" icon-name="upvote-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
              {' '}
              <path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>{' '}
            </svg>
          </button>
        </div>
        <button className="comment">
          {post.countRepost}
          <svg
            aria-hidden="true"
            className="icon"
            fill="currentColor"
            height="20"
            icon-name="comment-outline"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            <path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>{' '}
          </svg>
        </button>
        <button className="repost" onClick={() => copyUrl(post.id)}>
          {isCopied ? 'Copied!' : 'Share'}
          <svg
            aria-hidden="true"
            className="icon"
            fill="currentColor"
            height="20"
            icon-name="share-ios-outline"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            <path d="M19 11v5.378A2.625 2.625 0 0 1 16.378 19H3.622A2.625 2.625 0 0 1 1 16.378V11h1.25v5.378a1.373 1.373 0 0 0 1.372 1.372h12.756a1.373 1.373 0 0 0 1.372-1.372V11H19ZM9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.624.624 0 0 0-.884 0l-4 4 .884.884 2.933-2.933Z"></path>{' '}
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Post;
