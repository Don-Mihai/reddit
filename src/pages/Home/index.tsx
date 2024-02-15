import Header from '../../components/Header';
import Nav from '../../components/Nav/Nav';
import './Home.scss';
import Post from '../../components/Post/post';
import { IPost, posts } from './utils';
import CreatePost from '../../components/CreatePost';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
        const payload = { title: formValues.title, text: formValues.text, contentUrl: formValues.contentUrl };
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
        console.log(posts);
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
                            return <Post post={post} />;
                        })}
                    </div>
                </div>

                <aside className="aside">
                    <div className="aside__popular">POPULAR COMMUNITIES</div>
                    <div className="aside__popular-list">
                        <div className="popular-list__container">
                            <a className="logo" target="blank" href="">
                                <img className="logo__img" src="./Popular/Images/eli5.jpg"></img>
                                <div className="logo__name">
                                    <div className="logo__name__text">r/explainlikeimfive</div>
                                    <div className="logo__name__members">22,736,231 members</div>
                                </div>
                            </a>

                            <a className="logo" href="">
                                <img className="logo__img" src="../Popular/Images/KZESzgF91cP3KEAR29JhCFmX0zxsPgY1sYhv7XCtiW0.jpg"></img>
                                <div className="logo__name">
                                    <div className="logo__name__text">r/explainlikeimfive</div>
                                    <div className="logo__name__members">22,736,231 members</div>
                                </div>
                            </a>

                            <a className="logo" href="">
                                <img className="logo__img" src="../Popular/Images/KZESzgF91cP3KEAR29JhCFmX0zxsPgY1sYhv7XCtiW0.jpg"></img>
                                <div className="logo__name">
                                    <div className="logo__name__text">r/explainlikeimfive</div>
                                    <div className="logo__name__members">22,736,231 members</div>
                                </div>
                            </a>

                            <a className="logo" href="">
                                <img className="logo__img" src="../Popular/Images/KZESzgF91cP3KEAR29JhCFmX0zxsPgY1sYhv7XCtiW0.jpg"></img>
                                <div className="logo__name">
                                    <div className="logo__name__text">r/explainlikeimfive</div>
                                    <div className="logo__name__members">22,736,231 members</div>
                                </div>
                            </a>

                            <a className="logo" href="">
                                <img className="logo__img" src="../Popular/Images/KZESzgF91cP3KEAR29JhCFmX0zxsPgY1sYhv7XCtiW0.jpg"></img>
                                <div className="logo__name">
                                    <div className="logo__name__text">r/explainlikeimfive</div>
                                    <div className="logo__name__members">22,736,231 members</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default Home;
