import React from 'react';
import Title from './Title/Title';
import Select from './Select/Select';
import SubmitButton from '../UI/Buttons/SubmitButton/SubmitButton';


const login = (props) => {
    const usersOptions = Object.values(props.users).map(user => {
        return <option key={user.id} value={user.id} >   {user.name} </option>
    });

    return (
        <div>
            <Title />
            <Select options={usersOptions} change={props.change} />
            <SubmitButton
                disable = {props.currentUser === null}
                clicked={props.login}>
                Login
                 </SubmitButton>

        </div>
    );
};

export default login;