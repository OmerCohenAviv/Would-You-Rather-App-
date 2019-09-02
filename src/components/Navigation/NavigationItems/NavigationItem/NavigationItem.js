import React from 'react';

import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css'
import Avatar from '../../../../assets/Avatar/Avatar';

const navigationItem = (props) => {
   const avatar = props.avatar ? <Avatar avatar={props.avatar} /> : null
    return (
        <li className={classes.Container}>
            <NavLink to={props.to} className={classes.Link} activeClassName={classes.Active} exact>
                {props.text}
                {avatar}
            </NavLink>
        </li>
    );
};


export default navigationItem;