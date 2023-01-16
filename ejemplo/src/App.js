import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes
import MiComponente from './componentes/MiComponente';
import BarraLateral from './componentes/BarraLateral';

function HolaMundo(nombre){
  var presentacion= <h2>Hola soy {nombre}</h2>

  return presentacion;
}

function App() {
  var nombre="Educampos";
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eduardo Campos Frias
        </p>

        {HolaMundo(nombre)}

        <aside className='componentes'>
          <BarraLateral/>
        </aside>

        <section className='componentes'>
          <MiComponente/>
      </section>
    
      </header>

      

    </div>
  );
}

export default App;
