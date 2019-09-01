import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <div className={classes.Main}>
    <NavigationItems />
  </div>
);


export default toolbar;