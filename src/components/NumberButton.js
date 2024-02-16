import React from 'react';

const NumberButton = (props) => {

    return (
        <button onClick={props.onClick} style={{borderColor: props.click ? 'red' : 'inherit'}} className="btn-num"><b>{props.buttonText}</b></button>
    )

}

export default NumberButton