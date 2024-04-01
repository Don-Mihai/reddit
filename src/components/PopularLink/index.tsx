import { Collapse, Button } from '@mui/material';
import { List } from 'react-content-loader';
import { IPopular, IPopularState } from '../../components/Popular/utils';
import './PopularLink.scss';

interface PopularLinkProps {
  data: IPopular;
  changePopular: (key: keyof IPopularState) => void;
  popular: IPopularState;
}

const PopularLink = ({ data, changePopular, popular }: PopularLinkProps) => {
  const isShowImg = Boolean(data?.imgUrl);
  const isMembers = Boolean(data?.members);
  const isTitle = Boolean(data?.title);

  return (
    <div>
      <a href={data?.url} className="aside__list aside__list--link">
        <div className="aside__img">{isShowImg && <img className="aside__logo" src={data?.imgUrl} alt="" />}</div>
        <div className="aside__list--item">
          {isTitle && <span className="aside__list--title">{data?.title}</span>}
          {isMembers && <span className="aside__list--text">{data?.members}</span>}
        </div>
      </a>

      {data.sublinks && data.sublinks.length > 0 && (
        <>
          <Collapse in={popular[data.objKey as keyof IPopularState]} timeout="auto" unmountOnExit>
            <List>
              {data.sublinks.map((sublink, index) => (
                <li key={index}>
                  <PopularLink data={sublink} changePopular={changePopular} popular={popular} />
                </li>
              ))}
            </List>
          </Collapse>
          {data.isBottomMenu && (
            <Button className="aside__button" onClick={() => changePopular?.(data?.objKey as keyof IPopularState)} variant="contained">
              {popular[data?.objKey as keyof IPopularState] ? 'See less' : 'See more'}
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default PopularLink;
