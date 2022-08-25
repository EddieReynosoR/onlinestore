// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/QuantityPicker';
import AboutMe from './components/About';
import Product from './components/product';
import Catalog from './components/pages/Catalog';
import ShoppingList from './components/shoppingList';
import Principal from './components/pages/principal';
import Cart from './components/Cart';
import Admin from './components/Admin';
import GlobalState from './store/globalState';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';








function App() {
  return (
    <div className="App">

      <GlobalState>

        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='/Catalog' element={<Catalog/>}/>
            <Route path='/About' element={<AboutMe/>}/>
            <Route path='/List' element={<ShoppingList/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Admin' element={<Admin/>}/>

          </Routes>
        </Router>



        {/* <ShoppingList/> */}
      
      
      </GlobalState>

    </div>
  );
}

export default App;
