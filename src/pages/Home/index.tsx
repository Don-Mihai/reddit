import Header from '../../components/Header';
import './Home.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <main className="main">
                <nav className="nav"></nav>
                <div className="content"></div>
                <aside className="aside"></aside>
            </main>
        </div>
    );
};

export default Home;
