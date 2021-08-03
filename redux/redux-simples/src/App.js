import './App.css';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteo from './components/Sortei';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteo></Sorteo>
      </div>
    </div>
  );
}

export default App;
