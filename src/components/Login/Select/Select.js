import React from 'react';

const select = (props) => (
    <select onChange={props.change}>
        <option defaultValue hidden>Choose User</option>
        {props.options}
    </select>
);


export default select;