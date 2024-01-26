import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
    <section className='navbar_section'>
    <Navbar/>
    </section>
    <section className='page_section'>
    <Routes>
    <Route exact path='/' Component={Dashboard} />
    <Route path='/products' Component={Products} />
    </Routes>
    </section>
    </div>
  );
  
}

export default App;
