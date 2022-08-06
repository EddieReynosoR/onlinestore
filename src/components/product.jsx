import QuantityPicker from './QuantityPicker';
import './product.css';


const Product = (props) => {
    
    return (
        
        <div className="Product">
            <img src={props.data.image} alt="Product's image" />

            <h3>{props.data.title}</h3>
            <h5>{props.data.brand}</h5>
            <h5>{props.data.category}</h5>


            <label>Price: ${props.data.price.toFixed(2)}</label>
                
            <QuantityPicker/>

            <label>Total: ${(props.data.price)*(1)}</label>

        </div>
    );
};

export default Product;