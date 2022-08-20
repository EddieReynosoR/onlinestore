import './footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footer-content">
                <h3>Sneak Shop</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <ul className="socialMedia">
                    <li><a href='#'><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-tiktok"></i></a></li>
                </ul>
                
            </div>
            <div className="footer-bottom">
                <p>Sneak Shop &copy; 2022. Designed by Eduardo Reynoso</p>
            </div>
        </div>
    );
}

export default Footer;