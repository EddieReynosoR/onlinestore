import QuantityPicker from './QuantityPicker';
import './product.css';


const Product = () => {
    return (
        
        <div className="Product">
            <img src="https://picsum.photos/200/300" alt="Product" />

            <h3>Product</h3>
            <label>Price: $200.00</label>
                
            <QuantityPicker/>
        </div>
    );
};

export default Product;