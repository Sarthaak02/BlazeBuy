import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className='font-sans overflow-hidden '>
      <div className='shadow-md '>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
