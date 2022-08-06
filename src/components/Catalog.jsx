import Product from './product';
import './Catalog.css';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';


const Catalog = () => {

    const [products, setProducts] = useState([]);

    const loadData = () =>{
        let service = new DataService(); // instance of the class
        let prods = service.getCatalog();
        setProducts(prods);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className='catalog'>
            <h2>Catalog</h2>

            <div className='products'>
                {products.map((prod) => (
                    <Product key={prod._id} data={prod}></Product>
                ))}     
            </div>
            
        </div>
        
    )
};

export default Catalog;