import Header from '../../components/Header';
import Nav from '../../components/Nav/Nav';
import './Home.scss';
import Post from '../../components/Post/post';
import { IPost, posts } from './utils';
import CreatePost from '../../components/CreatePost';
import { useEffect, useState } from 'react';

const Home = () => {
    const [formValues, setFormValues]: any = useState(posts);
    const [postsNew, setPostsNew]: any = useState(posts);
    const initialState = { title: '', text: '', contentUrl: '' };

    const clear = () => {
        setFormValues(initialState);
    };

    const addPost = () => {
        setPostsNew([
            ...postsNew,
            {
                title: formValues.title,
                text: formValues.text,
                contentUrl: formValues.contentUrl,
            },
        ]);

        clear();
    };

    const onchange = (event: any) => {
        const key = event.target.name;
        const value = event.target.value;
        setFormValues({ ...formValues, [key]: value });
    };

    return (
        <div>
            <Header />
            <main className="main">
                <Nav />
                <div className="content">
                    <CreatePost addPost={addPost} onchange={onchange} />
                    <div className="posts">
                        {postsNew.map((post: any) => {
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
