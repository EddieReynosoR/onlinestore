import './navBar.css';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Catalog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>



                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;