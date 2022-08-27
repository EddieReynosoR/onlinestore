import QuantityPicker from './QuantityPicker';
import './product.css';
import { useState, useContext } from 'react';
import StoreContext from '../store/storeContext';


const Product = (props) => {

    const [quantity, setQuantity] = useState(0);

    const product = useContext(StoreContext).addToCart;

    const AddToCart = () => {

        console.log("Adding to cart...");


        let prodForCart = {...props.data, quantity: quantity};
        
        product(prodForCart);
    };


    const QuantityChange = (quantity) => {
        console.log("quantity changed", quantity);
        setQuantity(quantity);
    };
    
    return (
        
        <div className="Product">
            <img src={props.data.image} alt="Product's image" />

            <h3>{props.data.title}</h3>
            <h5>{props.data.brand}</h5>
            <h5>{props.data.category}</h5>


            <label>Price: ${props.data.price.toFixed(2)}</label>
                
            <QuantityPicker onChange={QuantityChange} max='20'/>

            <div>
                <label>Total: ${((props.data.price)*(quantity)).toFixed(2)}</label>

                <button id='addButton' className='btn btn-dark' onClick={AddToCart}>Add to cart</button>
            </div>
            

        </div>
    );
};

export default Product;