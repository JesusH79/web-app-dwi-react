import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageHome from './pages/PageHome';
import PageArticulosInventario from './pages/PageArticulosInventario';
import PageBusqueda from './pages/PageBusqueda';
import Navbar from './componentes/Navbar';
//import datoArticulos from './json/datoArticulos.json';


function App() {
 
  return (
    
      <Router>
        <main className='page'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<PageHome/>} />
            <Route path="/articulos" element={<PageArticulosInventario/>} />
            <Route path="/busqueda" element={<PageBusqueda/>} />
          </Routes>
        </main>
    </Router>
    
  );
}

export default App;
