import React from 'react';

import classes from './Avatar.module.css';

const avatar = ( props ) => {
    return (
        <div className={classes.img}>
              <img className={classes.Logo} src={props.avatar} alt='Avatar' />
        </div>
    );
};


export default avatar;