import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import { Routes,Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function App() {

  const { theme, toggleTheme } = useTheme();

  return (
        <div className={` app ${theme}`}>
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
