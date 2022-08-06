import './QuantityPicker.css';
import { useState } from 'react';

const QuantityPicker = () => {

    const [quantity, setQuantity] = useState(0);
    let number;
    const decreaseQuan = () => {
        number = quantity - 1;
        // console.log('Decrease...');

        if (number >= 0){
            setQuantity(number);
        }
    };

    const increaseQuan = () => {
        number = quantity + 1;
        // console.log('Increase...');
        
        setQuantity(number);
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