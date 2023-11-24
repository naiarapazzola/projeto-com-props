import './App.css';
import Inicio from './Componentes/Header';
import Projetos from './Componentes/Projects';
import Contato from './Componentes/Contact';
import Rodape from './Componentes/Footer';
import Saudacao from './Componentes/Hello-user';
import ContadorClick from './Componentes/ContadorClick';

function App() {
  return (
    <div className="App">
      <Inicio></Inicio>
      <Saudacao usuario="Nai"></Saudacao>
      <Projetos></Projetos>
      <ContadorClick></ContadorClick>
      <Contato></Contato>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
