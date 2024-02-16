import React from 'react';
import ActionButton from './ActionButton';

const PricePad = (props) => {

    const increasePriceHandler = (qty) => {
        props.onIncreasePrice(qty);
    }

    return (
        
        <div>
            <ActionButton styling={'btn-price'} buttonText={"$1"} onClick={() => increasePriceHandler(1)}/>
            <ActionButton styling={'btn-price'} buttonText={"$5"} onClick={() => increasePriceHandler(5)} />
            <br></br>
            <ActionButton styling={'btn-price'} buttonText={"$10"} onClick={() => increasePriceHandler(10)}/>
            <ActionButton styling={'btn-price'} buttonText={"$20"} onClick={() => increasePriceHandler(20)}/>
            
        </div>
        
    )

}

export default PricePad