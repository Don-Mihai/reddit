import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav/Nav';
import Popular from '../Home/Popular';

const MainPages = () => {
    return (
        <div>
            <Header />

            <main className="main">
                <Nav />
                <div className="content">
                    <Outlet />
                </div>
                <Popular />
            </main>
        </div>
    );
};

export default MainPages;
