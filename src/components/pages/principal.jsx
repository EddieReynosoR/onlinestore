import './principal.css';
import Footer from '../footer';

const Principal = () => {
    return (
        <div>
            <h1 className='title'>Sneak Shop</h1>
            <h1>Welcome to the sneakers shop!</h1>

            <div className='principal-section'>
                <h1 className='section-text'>BEST SNEAKERS OF THE MARKET!</h1>

                <img className='section-img' src="./images/shoes.jpg" alt="shoes" />
            </div>

            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias accusamus iusto nobis consequuntur beatae tenetur. Nam, nostrum earum asperiores illo in aliquam distinctio eum placeat, maiores officia praesentium, sit voluptatibus.
                </p>
            </div>

            <Footer></Footer>
        </div>

    )
};

export default Principal;
