import './shoppingList.css';
import { useState } from 'react';

const ShoppingList = () => {

    const [text, setText] = useState('');

    const [items, setItems] = useState([]);

    const Save = () => {
        console.log(text);

        items.push(text);
    };

    const textChange = (e) => {
        let value = e.target.value;
        setText(value);
    };


    return (
        <div className="shopList">
            <h1>Your shopping list</h1>

            <div className="form">
                <label>Add to list:</label>
                <input onChange={textChange} type="text"/>
                <button onClick={Save} className='btn btn-primary'>Add</button>
            </div>

            <ul>
                {items.map((item) => (
                    <li> {item} </li>
                ))}
            </ul>
            
        </div>
    );
};

export default ShoppingList;