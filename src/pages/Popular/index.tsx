import Header from '../../components/Header';
import Post from '../../components/Post/post';
import { posts } from '../Home/utils';
const Popular = () => {
    return (
        <div>
            <Header />
            {posts.map(post => {
                return <Post post={post} />;
            })}
            popular
        </div>
    );
};

export default Popular;
