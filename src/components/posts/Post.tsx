import './post.scss';
const Post = () => {
    return (
        <div className="card">
            <div className="card_header">
                <div className="card_group">
                    <div className="card_icon"></div>
                    <div>
                        <span>Cats</span>
                    </div>
                </div>
                <div className="button">
                    <button className="card_join">join</button>
                    <button className="card_option">
                        <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="MoreHorizIcon"
                        >
                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="card_content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iure nulla culpa cumque praesentium totam animi temporibus aut id? Aliquid est
                temporibus fugiat, obcaecati rem omnis veritatis laboriosam accusantium assumenda?
            </div>
            <div className="card_footer">
                <div className="like">12</div>
                <div className="komment">10</div>
                <div className="repost">100</div>
            </div>
        </div>
    );
};
export default Post;
