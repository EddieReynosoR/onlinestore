import './principal.css';
import Footer from '../footer';
import {Link} from "react-router-dom";

const Principal = () => {
    return (
        <div>
            <h1 className='title'>Sneak Shop</h1>
            <h1>Welcome to the sneakers shop!</h1>

            <div className='principal-section'>
                <h1 className='section-text'>BEST SNEAKERS OF THE MARKET!</h1>

                <img className='section-img' src="./images/shoes.jpg" alt="shoes" />
            </div>

            <Link className="btn btn-dark" to='/Catalog' id='checkOut'>CHECK OUT OUT CATALOG</Link>

            <section className='AboutSneakers'>
                <div className='main'>
                    <img src="./images/sneakers.jpg" alt="sneakers"/>
                    <div className='about-text'>
                        <h2>About Us</h2>
                        <h5>Sneakers shop</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil assumenda autem, consectetur pariatur at facere, in maiores totam perferendis corporis dolorem mollitia eius accusantium sed voluptates, aperiam esse nisi vel!</p>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>

    )
};

export default Principal;
