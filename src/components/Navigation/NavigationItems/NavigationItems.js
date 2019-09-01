import React, { Fragment } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'

const navigationItems = (props) => (
    <ul className={classes.Main}>
        <NavigationItem to='/' text='Home' />
        <NavigationItem to='/newQuestion' text='New Question' />
        <NavigationItem to='/myProfile' text='my Profile + Avatar' />
        <NavigationItem to='/logout' text='Logout' />
    </ul>
);



export default navigationItems;