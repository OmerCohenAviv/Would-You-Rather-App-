import React from 'react';

import Author from './Author/Author';
import Options from './Options/Options';

const home = ( props ) => {
    return (
        <div>
            <Author author={props.question.author} />
            <Options 
            selectedOption={props.selectedOption}
            optionChange={props.optionChange}
            answerQuestion={props.answerQuestion}
            questionID={props.question.id}
            optionOne={props.question.optionOne}
            optionTwo={props.question.optionTwo} /> 
        </div>
    );
};

export default home;