import './App.css';
import Busqueda from './componentes/Busqueda';
import ListaOpciones  from './componentes/ListaOpciones';
import TablaArticulos from './componentes/TablaArticulos';
//import datoArticulos from './json/datoArticulos.json';


function App() {
  const logo = 'https://cdn-icons-png.flaticon.com/512/2823/2823437.png';
  const misOpciones = [
    {indice: 1, valor:"No. de parte"},
    {indice: 2, valor:"nombre de articulo"},
    {indice: 3, valor:"palabra clave"}
  ];
  /*const datos_articulo=[
    {
      "no_parte": 1,
      "nombre_articulo": "Artículo A",
      "palabra_clave": "clave1",
      "ubicacion": "Almacén 1",
      "cantidad": 100,
      "cantidad_maxima": 1000,
      "cantidad_minima": 10,
      "prioridad": "alta"
    }
  ];*/

  return (
    <main className='page'>
      <div className='header'>
        <img className='header__img' alt='logo' src={logo}></img>
        <p className='header__titulo'><span>INVENTARIO INTERNO DEL DEPTO DE MTTO</span></p>
      </div>
      <div className='contenido'>
        <div className='contenido__aside-rigth'>
          <Busqueda></Busqueda>
          <ListaOpciones opciones={misOpciones}/>
        </div>
        <div className='contenido__informacion'>
          <TablaArticulos></TablaArticulos>
          
        </div>
        <div className='contenido__aside-left'>
          
        </div>
      </div>
      
      <div className='footer'>

      </div>
      
      
    </main>
  );
}

export default App;
