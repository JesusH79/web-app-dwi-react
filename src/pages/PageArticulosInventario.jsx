import React from 'react';
import Header from '../componentes/Header';
import TablaArticulos from '../componentes/TablaArticulos';
import Footer from '../componentes/Footer';

const ArticulosInventario = () => {
  return (
    <section>
        <div className='header'>
          <Header/>
        </div>
        <div className='contenido'>
          
          <div className='contenido__informacion'>
            <TablaArticulos></TablaArticulos>
            
          </div>
          
        </div>
        
        <div className='footer'>
          <Footer></Footer>
        </div>
    </section>
  );
};

export default ArticulosInventario;