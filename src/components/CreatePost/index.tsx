import { useState } from 'react';
import './CreatePost.scss';
import { Button } from '@mui/material';

const CreatePost = ({ addPost, onchange, formValues }: any) => {
  const [open, setOpen] = useState(false);
  //   const inputRef = useRef<HTMLInputElement>(null);

  const toggle = () => {
    setOpen(!open);
    // setTimeout(() => inputRef?.current?.focus(), 0);
  };

  const create = () => {
    addPost();
    toggle();
  };

  return (
    <>
      <div className="create-post">
        {open ? (
          <>
            <input value={formValues.title} autoFocus type="text" placeholder="Title" className="create-post__title" onChange={onchange} name="title" />
            <textarea
              value={formValues.text}
              cols={30}
              rows={10}
              placeholder="Text"
              className="create-post__text"
              onChange={onchange}
              name="text"
              maxLength={300}
            ></textarea>
            <input value={formValues.contentUrl} type="text" placeholder="Image" className="create-post__image" onChange={onchange} name="contentUrl" />
            <Button onClick={create} variant="contained">
              Post
            </Button>
          </>
        ) : (
          <Button onClick={toggle}>Create post</Button>
        )}
      </div>
    </>
  );
};

export default CreatePost;
