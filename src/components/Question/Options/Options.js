import React from 'react';

const options = (props) => {
    const radios = document.getElementsByName(`${props.questionID}`);
    console.log(props.questionID)
    let checkedRadio = ''
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            checkedRadio = radios[i].value
            break;
        };
    };
    console.log(props)
    return (
        <form onSubmit={(event) => props.answerQuestion(event, checkedRadio, props.questionID)}  >
            <p>
                <input type='radio' name={`${props.questionID}`} value='optionOne' 
                onChange={props.optionChange}
                checked={props.selectedOption === 'optionOne'} />
                {props.optionOne.text}
            </p>
            <p>
                <input type='radio' name={`${props.questionID}`} value='optionTwo' 
                onChange={props.optionChange}
                checked={props.selectedOption === 'optionTwo'} />
                {props.optionTwo.text}
            </p>
            <button className='btn btn-success'>Submit</button>
        </form>
    );
};


export default options;