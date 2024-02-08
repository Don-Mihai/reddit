import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemButton, ListItemText, Collapse, List } from '@mui/material';
import { useState } from 'react';
import './LinkComponent.scss';

const LinkComponent = ({ data, changeNav, nav }: any) => {
    const [isActive, setisActive] = useState(false);

    // const check = () => {
    // 	setisActive(currentUrl === data.url);
    // }
    // check()

    return (
        <div className="component-link">
            <ListItemButton className={`nav__title ${isActive ? 'active' : ''}`} onClick={() => changeNav?.(data?.objKey)}>
                {data?.imgUrl && <img className="component-link__image" src={data?.imgUrl} alt="" />}
                <span className="component-link__text">{data.name}</span>
                {data?.objKey && <>{nav?.[data?.objKey] ? <ExpandLess /> : <ExpandMore />}</>}
            </ListItemButton>
            {data.sublinks && data.sublinks.length > 0 && (
                <Collapse in={nav?.[data?.objKey]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {data.sublinks.map((sublink: any, index: any) => (
                            <li key={index}>
                                <LinkComponent data={sublink} />
                            </li>
                        ))}
                    </List>
                </Collapse>
            )}
        </div>
    );
};

export default LinkComponent;
