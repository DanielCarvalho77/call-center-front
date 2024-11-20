import Input from './Components/Input';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <Input label="Nome" placeholder="Digite seu nome" type="text"/>
      <Input placeholder="idade" type="number"/>
    </div>
  );
}

export default App;
