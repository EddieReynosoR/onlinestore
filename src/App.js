// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/QuantityPicker';
import AboutMe from './components/About';
import Product from './components/product';
import Catalog from './components/Catalog';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Sneak Shop</h1>

      <Catalog/>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
