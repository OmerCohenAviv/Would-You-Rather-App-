import React from 'react';

import { Button } from 'react-bootstrap'

const submitButton = (props) => {
    return (
        <Button
            style={{ marginLeft: '10px' }}
            variant="success"
            onClick={props.clicked}
            disabled={props.disable}>
            {props.children}
        </Button>
    );
};


export default submitButton;