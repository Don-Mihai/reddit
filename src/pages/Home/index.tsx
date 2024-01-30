import Header from '../../components/Header';
import Nav from '../../components/Nav/Nav';
import './Home.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <main className="main">
                <Nav />
                <div className="content"></div>

                <aside className="aside">
                    <div className="aside__popular">POPULAR COMMUNITIES</div>
                    <div className="aside__popular-list">
                        <div className="popular-list__container">
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
