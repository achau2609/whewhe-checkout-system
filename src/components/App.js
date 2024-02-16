import '../css/App.css';
import React, { useState } from 'react';
import Header from './Header.js';
import NumberPad from './NumberPad.js';
import PricePad from './PricePad.js';
import ActionButton from './ActionButton.js';
import CheckoutBox from './CheckoutBox.js';

const App = () => {

  // initial number button states
  const initialState = [{
    btn1: false, btn2: false, btn3: false, btn4: false, btn5: false,
    btn6: false, btn7: false, btn8: false, btn9: false, btn10: false,
    btn11: false, btn12: false, btn13: false, btn14: false, btn15: false,
    btn16: false, btn17: false, btn18: false, btn19: false, btn20: false
  }]

  const [click,setClick] = useState(initialState); // initial button states
  const [price, adjustPrice] = useState(0); // price state
  const [numbers, setNumbers] = useState([]); // list of numbers selected
  const [numCount, setNumCount] = useState(0); // total of numbers selected

  // adds num to list, checks if there is already 5 pressed
  const addNumber = (num) => {
      setNumbers([...numbers,num])
      setNumCount(numCount => numCount + 1); 
  }

  // removes num from list
  const delNumber = (num) => {
    const updateNumbers = numbers.filter((number) => {
      return number !== num
    })
    setNumbers(updateNumbers);
    setNumCount(numCount => numCount - 1);
  }

  // random pick 5 numbers
  const randNumber = async () => {
    if (numCount === 0) {
      
      const randList = [];

      while (randList.length < 5)  {
        const num = Math.floor(1 + Math.random() * 20);
        if(!randList.includes(num)) {
          randList.push(num)
        }
      }

      for (let i=0; i<randList.length; i++) {
        const btn = 'btn';
        const btnId = btn.concat(randList[i].toString());
        clickButton(btnId, randList[i]);
      }

      setNumbers(randList);

    } else {
      alert("You cannot use this until you reset your numbers!");
    } 
  }

  // increases price
  const increasePriceState = (qty) => {
    if (numCount === 5) {
      adjustPrice(price => price + qty); 
    } else {
      alert("You have not selected enough numbers!");
    } 
  }

  // resets everything
  const resetState = () => {
    setNumCount(0);
    setNumbers([]);
    adjustPrice(0);
    setClick(initialState);
  }

  // cash out, showing all the numbers chosen and the final price of the ticket
  const cash = () => {

    if(price === 0) {
      alert("You cannot cash out without putting a price on the ticket!")
    } else {
      const thankyou = 'Thank you for your ticket purchase! Here are your chosen numbers:'
      const paid = 'And you have paid:'

      alert(thankyou + "\n" + numbers + "\n" + paid + "\n$" + price);
      resetState();
    }
    
  }

  // change button state
  const clickButtonState = (btnId) => {

    setClick(prevStates => ({ ...prevStates, [btnId]: !prevStates[btnId] }));

  }

  // clicking a button
  const clickButton = (btnId, num) => {

    if(!click[btnId]) {
        if (numCount === 5) {
            alert("You have already selected 5 numbers!");
          } else {
            addNumber(num);
            clickButtonState(btnId);
          }         
    } else {
        delNumber(num);
        clickButtonState(btnId);
    }
    
  };

  return (
    <div className="container">
      <Header />
      <div className='randPricePad'>
        <ActionButton styling={'btn-rand'} buttonText={<b>RANDOM</b>} onClick={randNumber} />
        <PricePad onIncreasePrice={increasePriceState} onResetPrice={resetState} />
      </div>
      <div className="numpad">
        <NumberPad btnStates={click} onClickButton={clickButton} />
        <div>
          <ActionButton styling={'btn-cashclear'} buttonText={<b>CASH</b>} onClick={cash} />
          <ActionButton styling={'btn-cashclear'} buttonText={<b>CLEAR</b>} onClick={resetState} />
        </div>
      </div>
      <div className='cashier'>
        <CheckoutBox numbers={numbers} price={price} />
      </div>
      
    </div>
  )

}

export default App