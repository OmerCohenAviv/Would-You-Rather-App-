import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'

const navigationItems = (props) => {
    let routes = (
        <ul className={classes.Main}>
            <NavigationItem to='/' text='Home' />
            <NavigationItem to='/leaderboard' text='Leader Boards' />
            <NavigationItem to='/login' text='Login' />
        </ul>

    );
    if (props.userLogged) {
        routes = (
            <ul className={classes.Main}>
                <NavigationItem to='/' text='Home' />
                <NavigationItem to='/newQuestion' text='New Question' />
                <NavigationItem to='/leaderboard' text='Leader Boards' />
                <NavigationItem to='/myProfile' text={props.currentUser.name} avatar={props.currentUser.avatarURL} />
                <NavigationItem to='/logout' text='Logout' />
            </ul>
        );
    }
    return routes
};



export default navigationItems;