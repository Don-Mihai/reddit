import Header from '../../components/Header';
import Post from '../../components/Post/post';
import { posts } from '../Home/utils';
const Popular = () => {
    return (
        <div>
            <Header />
            <div className="content">
                {posts.map(post => {
                    return <Post post={post} />;
                })}
            </div>
            popular
        </div>
    );
};

export default Popular;
