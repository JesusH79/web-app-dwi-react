import React from 'react';
import Busqueda from '../componentes/Busqueda';
import ListaOpciones  from '../componentes/ListaOpciones';
import TablaArticulos from '../componentes/TablaBusqueda';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

const ArticulosInventario = () => {
    const misOpciones = [
        {indice: 1, valor:"No. de parte"},
        {indice: 2, valor:"nombre de articulo"},
        {indice: 3, valor:"palabra clave"}
      ];
  return (
    <section>
        <div className='header'>
            <Header></Header>
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
          <Footer></Footer>
        </div>
    </section>
  );
};

export default ArticulosInventario;