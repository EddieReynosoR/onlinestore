import Product from './product';
import './Catalog.css';

const Catalog = () => {
    return (
        <div className='catalog'>
            <h1>Catalog</h1>

            <div className='products'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            
        </div>
        
    )
};

export default Catalog;