import Header from '../../components/Header';
import Nav from '../../components/Nav/Nav';
import './Home.scss';
import Post from '../../components/Post/post';
import CreatePost from '../../components/CreatePost';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Popular from './Popular';
import { IPost } from './utils';
const initialState = { title: '', text: '', contentUrl: '' };

const Home = () => {
    const [formValues, setFormValues]: any = useState(initialState);
    const [posts, setPosts]: any = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const clear = () => {
        setFormValues(initialState);
    };

    const addPost = async () => {
        const payload = {
            title: formValues.title,
            text: formValues.text,
            contentUrl: formValues.contentUrl,
        };

        const resPost = (await axios.post('http://localhost:3001/posts', payload)).data;

        setPosts([...posts, resPost]);

        clear();
    };

    const onchange = (event: any) => {
        const key = event.target.name;
        const value = event.target.value;
        setFormValues({ ...formValues, [key]: value });
    };

    const getPosts = async () => {
        const posts = (await axios.get('http://localhost:3001/posts')).data;
        setPosts(posts);
    };

    const onDelete = async (postId: number | string) => {
        await axios.delete(`http://localhost:3001/posts/${postId}`);

        setPosts(posts.filter((post: IPost) => post.id !== postId));
    };

    return (
        <div>
            <Header />
            <main className="main">
                <Nav />
                <div className="content">
                    <CreatePost formValues={formValues} addPost={addPost} onchange={onchange} />
                    <div className="posts">
                        {posts.map((post: any) => {
                            return <Post onDelete={onDelete} post={post} />;
                        })}
                    </div>
                </div>
                <Popular />
            </main>
        </div>
    );
};

export default Home;
