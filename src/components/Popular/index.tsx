import { memo, useState } from 'react';
import './Popular.scss';
import PopularLink from '../PopularLink';
import { IPopularState, Populars, initialState } from './utils';

const Popular = memo(() => {
  const [popular, setPopular] = useState<IPopularState>(initialState);

  const changePopular = (key: keyof IPopularState) => {
    setPopular({ ...popular, [key]: !popular[key] });
  };

  return (
    <aside className="aside">
      <p className="aside__popular">POPULAR COMMUNITIES</p>
      {Populars.map((data, index) => {
        return <PopularLink key={index} data={data} popular={popular} changePopular={changePopular} />;
      })}
    </aside>
  );
});

export default Popular;
