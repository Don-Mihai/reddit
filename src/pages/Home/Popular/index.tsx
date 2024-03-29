import { Avatar } from '@mui/material';
import { memo } from 'react';
import './Popular.scss';

const Popular = memo(() => {
  return (
    <aside className="aside">
      <div className="aside__popular">POPULAR COMMUNITIES</div>
      <div className="aside__popular-list">
        <a className="logo" target="blank" href="/">
          <Avatar src="https://avatars.akamai.steamstatic.com/bf9c5efeb726c14f07e66c408424067149a97724.jpg" alt="" />
          <div className="logo__name">
            <div className="logo__name__text">r/explainlikeimfive</div>
            <div className="logo__name__members">22,736,231 members</div>
          </div>
        </a>

        <a className="logo" href="/">
          <Avatar src="https://avatars.akamai.steamstatic.com/bf9c5efeb726c14f07e66c408424067149a97724.jpg" alt="" />
          <div className="logo__name">
            <div className="logo__name__text">r/explainlikeimfive</div>
            <div className="logo__name__members">22,736,231 members</div>
          </div>
        </a>

        <a className="logo" href="/">
          <Avatar src="https://avatars.akamai.steamstatic.com/bf9c5efeb726c14f07e66c408424067149a97724.jpg" alt="" />
          <div className="logo__name">
            <div className="logo__name__text">r/explainlikeimfive</div>
            <div className="logo__name__members">22,736,231 members</div>
          </div>
        </a>

        <a className="logo" href="/">
          <Avatar src="https://avatars.akamai.steamstatic.com/bf9c5efeb726c14f07e66c408424067149a97724.jpg" alt="" />

          <div className="logo__name">
            <div className="logo__name__text">r/explainlikeimfive</div>
            <div className="logo__name__members">22,736,231 members</div>
          </div>
        </a>

        <a className="logo" href="/">
          <Avatar src="https://avatars.akamai.steamstatic.com/bf9c5efeb726c14f07e66c408424067149a97724.jpg" alt="" />
          <div className="logo__name">
            <div className="logo__name__text">r/explainlikeimfive</div>
            <div className="logo__name__members">22,736,231 members</div>
          </div>
        </a>
      </div>
    </aside>
  );
});

export default Popular;
