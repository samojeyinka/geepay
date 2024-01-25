import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    
    <Route exact path='/' Component={Dashboard} />
    <Route path='/products' Component={Products} />
    </Routes>
    </>
  );
  
}

export default App;
