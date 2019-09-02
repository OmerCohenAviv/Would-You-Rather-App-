import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'

const navigationItems = (props) => {
    let routes = (
        <ul className={classes.Main}>
            <NavigationItem to='/' text='Home' />
            <NavigationItem to='/login' text='Login' />
        </ul>

    );
    if (props.userLogged) {
        routes = (
            <ul className={classes.Main}>
                <NavigationItem to='/' text='Home' />
                <NavigationItem to='/newQuestion' text='New Question' />
                <NavigationItem to='/myProfile' text='my Profile + Avatar' />
                <NavigationItem to='/logout' text='Logout' />
            </ul>
        );
    }
    return routes
};



export default navigationItems;