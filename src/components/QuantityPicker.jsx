import './QuantityPicker.css';
import { useState } from 'react';

const QuantityPicker = (props) => {

    const [quantity, setQuantity] = useState(0);
    let number;
    const decreaseQuan = () => {
        number = quantity - 1;
        // console.log('Decrease...');

        if (number >= 0){
            setQuantity(number);
            props.onChange(number);
        }
    };

    const increaseQuan = () => {
        number = quantity + 1;
        // console.log('Increase...');
        
        if(number <= props.max){
            setQuantity(number);
            props.onChange(number);
        }else{
            alert('20 is the max amount of sneakers that you can buy...');
        }
    };


    return (
        <div>
            <div className="quanPick">
                <button onClick={decreaseQuan}>-</button>
                <label>{quantity}</label>
                <button onClick={increaseQuan}>+</button>
            </div>
        </div>
    )
};

export default QuantityPicker;