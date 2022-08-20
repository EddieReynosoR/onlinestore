import './navBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
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
                    </ul>


                    <Link className="btn btn-dark" to='/Cart' id='Cart'>View Cart</Link>
                    
                </div>
            </nav>
        </div>
    )
};

export default NavBar;