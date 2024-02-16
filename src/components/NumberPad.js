import React from 'react';
import NumberButton from "./NumberButton"

const NumberPad = (props) => {

    const clickButtonHandler = (btnId, num) => {

        props.onClickButton(btnId, num);
        
    };

    return (

    <div>
        <NumberButton click={props.btnStates['btn1']} buttonText="1" onClick={() => clickButtonHandler('btn1',1)} />
        <NumberButton click={props.btnStates['btn2']} buttonText="2" onClick={() => clickButtonHandler('btn2',2)} />
        <NumberButton click={props.btnStates['btn3']} buttonText="3" onClick={() => clickButtonHandler('btn3',3)} />
        <NumberButton click={props.btnStates['btn4']} buttonText="4" onClick={() => clickButtonHandler('btn4',4)} />
        <NumberButton click={props.btnStates['btn5']} buttonText="5" onClick={() => clickButtonHandler('btn5',5)} />
        <br></br>
        <NumberButton click={props.btnStates['btn6']} buttonText="6" onClick={() => clickButtonHandler('btn6',6)} />
        <NumberButton click={props.btnStates['btn7']} buttonText="7" onClick={() => clickButtonHandler('btn7',7)} />
        <NumberButton click={props.btnStates['btn8']} buttonText="8" onClick={() => clickButtonHandler('btn8',8)} />
        <NumberButton click={props.btnStates['btn9']} buttonText="9" onClick={() => clickButtonHandler('btn9',9)} />
        <NumberButton click={props.btnStates['btn10']} buttonText="10" onClick={() => clickButtonHandler('btn10',10)} />
        <br></br>
        <NumberButton click={props.btnStates['btn11']} buttonText="11" onClick={() => clickButtonHandler('btn11',11)} />
        <NumberButton click={props.btnStates['btn12']} buttonText="12" onClick={() => clickButtonHandler('btn12',12)} />
        <NumberButton click={props.btnStates['btn13']} buttonText="13" onClick={() => clickButtonHandler('btn13',13)} />
        <NumberButton click={props.btnStates['btn14']} buttonText="14" onClick={() => clickButtonHandler('btn14',14)} />
        <NumberButton click={props.btnStates['btn15']} buttonText="15" onClick={() => clickButtonHandler('btn15',15)} />
        <br></br>
        <NumberButton click={props.btnStates['btn16']} buttonText="16" onClick={() => clickButtonHandler('btn16',16)} />
        <NumberButton click={props.btnStates['btn17']} buttonText="17" onClick={() => clickButtonHandler('btn17',17)} />
        <NumberButton click={props.btnStates['btn18']} buttonText="18" onClick={() => clickButtonHandler('btn18',18)} />
        <NumberButton click={props.btnStates['btn19']} buttonText="19" onClick={() => clickButtonHandler('btn19',19)} />
        <NumberButton click={props.btnStates['btn20']} buttonText="20" onClick={() => clickButtonHandler('btn20',20)} />
        
        
    </div>

    )

}   

//

export default NumberPad