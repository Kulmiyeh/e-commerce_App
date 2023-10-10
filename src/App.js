import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
// import Productslast from './components/latestProducts'
import Samsung from './components/Samsung';
import SamsungDetail from './components/SamsungDetail'
import Laptops from './components/Laptops';
import LaptopsDetail from './components/LabtopsDetail';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/Samsung/:id" component={SamsungDetail} />
        <Route exact path="/Laptops/:id" component={LaptopsDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        {/* <Route exact path="/latestProducts" component={Productslast} /> */}
        <Route exact path="/Samsung" component={Samsung} />
        <Route exact path="/Laptops" component={Laptops} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
