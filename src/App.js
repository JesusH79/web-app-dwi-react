import './App.css';


const logo = 'https://constructoralp.com.mx/wp-content/uploads/2021/01/tubacero.png'



function App() {
  return (
    <main className='page'>
      <div className='page-header'>
        <img src={logo}></img>
      </div>
      <div className='page-contenido'>
        <div className='page-aside-rigth'>
          <Busqueda></Busqueda>
        </div>
        <div className='page-informacion'>

        </div>
        <div className='page-aside-left'>

        </div>
      </div>
      
      <div className='page-footer'>

      </div>
      
      
    </main>
  );
}

export default App;
