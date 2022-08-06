// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/QuantityPicker';
import AboutMe from './components/About';
import Product from './components/product';
import Catalog from './components/Catalog';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>My online store!!!</h1>

      <Catalog/>
      
      <AboutMe></AboutMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
