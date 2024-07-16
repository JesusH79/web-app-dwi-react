// src/components/Home.js
import React from 'react';
import InformacionPagina from '../componentes/InformacionPagina';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';



const Home = () => {
  return (
    <section>
        <div className='header'>
          <Header/>
        </div>
        <div className='contenido'>
          <div className='contenido__aside-rigth'>
            
          </div>
          <div className='contenido__informacion'>
            <InformacionPagina></InformacionPagina>
            
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

export default Home;
