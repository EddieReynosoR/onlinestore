import './Admin.css';
import Footer from './footer';
import { useState } from 'react';
import DataService from '../services/dataService';

const Admin = () => {

    const [product, setProduct] = useState({})
    const [coupon, setCoupon] = useState({})
    const [showProdSuccess, setShowProdSuccess] = useState(false);

    const saveProduct = async() => {
        console.log("Saving product...");
        console.log(product);

        // use the service to send it to server


        let fixProd = {...product};
        fixProd.price = parseFloat(fixProd.price);

        let service = new DataService(); // instance of the class
        let savedProd = await service.saveProduct(fixProd);
             
        
        if(savedProd && savedProd._id){
            setShowProdSuccess(true);

            setTimeout(() => {
                setShowProdSuccess(false);
            }, 6000);
        }
    }

    const textChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;


        let copy = { ...product };
        copy[name] = value;
        setProduct(copy);
    };

    const saveCoupon = () => {
        console.log(coupon);
    }

    const couponChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;


        let copy = { ...coupon };
        copy[name] = value;
        setCoupon(copy);
    };


    return (
        <div className="admin">
            <h1>Store administration</h1>

            {showProdSuccess ? <div className='alert alert-success'>Product Saved</div>:null}

            <div className="parent">
                <section className="products">
                    <h3>Register Products</h3>

                    <div className="my-form">
                        <label>Title:</label>
                        <input name='title' type="text" onChange={textChange}/>
                    </div>

                    <div className="my-form">
                        <label>Price:</label>
                        <input name='price' type="number" onChange={textChange}/>
                    </div>

                    <div className="my-form">
                        <label>Image:</label>
                        <input name='image' type="text" onChange={textChange}/>
                    </div>

                    <div className="my-form">
                        <label>Category:</label>
                        <input name='category' type="text" onChange={textChange}/>
                    </div>

                    <div className="my-form">
                        <button className="btn btn-sm btn-primary" onClick={saveProduct}>Save Product</button>
                    </div>
                </section>

                <section className="list">
                    <h3>Discount Codes</h3>

                    <div className="my-form">
                        <label>Code:</label>
                        <input name='code' type="text" onChange={couponChange}/>
                    </div>

                    <div className="my-form">
                        <label>Discount:</label>
                        <input name='discount' type="text" onChange={couponChange}/>
                    </div>

                    <div className="my-form">
                        <button className="btn btn-sm btn-primary" onClick={saveCoupon}>Save Product</button>
                    </div>
                </section>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Admin;