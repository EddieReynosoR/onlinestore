import Product from '../product';
import './Catalog.css';
import { useEffect, useState } from 'react';
import DataService from '../../services/dataService';
import Footer from '../footer';


const Catalog = () => {

    const [products, setProducts] = useState([]);

    const [categorys, setCategories] = useState([]);

    const loadData = () =>{
        let service = new DataService(); // instance of the class
        let prods = service.getCatalog();
        setProducts(prods);


        let uniques = [];
        for (let i = 0; i < prods.length; i++) {
            if(!uniques.includes(prods[i].category)){
                uniques.push(prods[i].category);
            }
            
        }

        setCategories(uniques);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className='catalog'>
            <h2>CATALOG</h2>

            <div className='Filters'>
                {categorys.map((item) => (
                    <button className='btn btn-secondary'>{item}</button>
                ))}
            </div>

            <div className='products'>
                {products.map((prod) => (
                    <Product key={prod._id} data={prod}></Product>
                ))}     
            </div>
            
            <Footer></Footer>
        </div>
        
    )
};

export default Catalog;