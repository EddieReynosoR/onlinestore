import './Cart.css';

import { useContext } from 'react';
import StoreContext from '../store/storeContext';

const Cart = () => {
    const cart = useContext(StoreContext).cart;

    return (
        <div className='cart'>
            <h1>Your cart</h1>
            <h5>You have {cart.length} item(s) in your cart.</h5>

            <ul>
                {cart.map(p => <li key={p._id}>{p.title}</li>)}
            </ul>
        </div>
    )
};

export default Cart;