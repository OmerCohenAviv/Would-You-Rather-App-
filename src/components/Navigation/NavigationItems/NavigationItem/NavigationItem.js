import React from 'react';

import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css'

const navigationItem = (props) => {
    return (
        <li className={classes.Container}>
            <NavLink to={props.to} className={classes.Link} activeClassName={classes.Active} exact>
                {props.text}
            </NavLink>
        </li>
    );
};


export default navigationItem;