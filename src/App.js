// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/QuantityPicker';
import AboutMe from './components/About';
import Product from './components/product';
import Catalog from './components/Catalog';
import ShoppingList from './components/shoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';





function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='title'>Sneak Shop</h1>

      <Catalog/>

      <ShoppingList/>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
