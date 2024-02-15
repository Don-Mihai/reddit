import './CreatePost.scss';

const CreatePost = ({ addPost, onchange, formValues }: any) => {
    return (
        <>
            <div className="create-post">
                <input value={formValues.title} type="text" placeholder="Title" className="create-post__title" onChange={onchange} name="title" />
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
                <button onClick={addPost}>Post</button>
            </div>
        </>
    );
};

export default CreatePost;
