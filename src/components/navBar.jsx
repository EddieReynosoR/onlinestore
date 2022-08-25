import './navBar.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import StoreContext from '../store/storeContext';
import Cart from './Cart';

const NavBar = () => {
    let cart = useContext(StoreContext).cart;
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Catalog'>Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/List'>Shopping List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/About'>About Me</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to='/Admin'>Admin</Link>
                        </li>
                    </ul>


                    <Link className="btn btn-dark" to='/Cart' id='Cart'>
                        {cart.length} &nbsp;View Cart
                    </Link>
                    
                </div>
            </nav>
        </div>
    )
};

export default NavBar;