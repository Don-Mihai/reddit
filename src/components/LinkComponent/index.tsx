import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemButton, ListItemText, Collapse, List, Button } from '@mui/material';
import { useState } from 'react';
import './LinkComponent.scss';
import { Link } from 'react-router-dom';

const LinkComponent = ({ data, changeNav, nav }: any) => {
    const [isActive, setisActive] = useState(false);
    const isShowImg = Boolean(data?.imgUrl);
    const isObjKey = Boolean(data?.objKey);
    const isLink = Boolean(data?.url);
    const isName = Boolean(data?.name);
    const isShowBorder = Boolean(!data?.sublinks?.length && !data?.imgUrl);

    return (
        <div className={`component-link ${isShowBorder ? 'component-link__subitem' : ''}`}>
            <ListItemButton className={`component-link__title ${isActive ? 'active' : ''}`} onClick={() => changeNav?.(data?.objKey)}>
                {isShowImg && <img className="component-link__image" src={data?.imgUrl} alt="" />}

                {isLink ? (
                    <Link to={data?.url} className="component-link__item">
                        <span>{data.name}</span>
                    </Link>
                ) : (
                    isName && <span className="component-link__item">{data.name}</span>
                )}

                {isObjKey && <>{nav?.[data?.objKey] ? <ExpandLess /> : <ExpandMore />}</>}
            </ListItemButton>

            {data.sublinks && data.sublinks.length > 0 && (
                <>
                    <Collapse in={nav?.[data?.objKey]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {data.sublinks.map((sublink: any, index: any) => (
                                <li key={index}>
                                    <LinkComponent data={sublink} changeNav={changeNav} nav={nav} />
                                </li>
                            ))}
                        </List>
                    </Collapse>
                    {data.isBottomMenu && (
                        <Button className="nav__button" onClick={() => changeNav?.(data?.objKey)} variant="contained">
                            {nav[data.objKey] ? 'See less' : 'See more'}
                        </Button>
                    )}
                </>
            )}
        </div>
    );
};

export default LinkComponent;
