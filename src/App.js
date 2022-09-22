import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Cart from './components/Cart';
import Product from './components/Product';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Products' element={<ProductPage />}/>
        <Route path='/Products/:id' element={<Product />}/>
        <Route path='/Cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </ Router>
  );
}

export default App;
