import { useState } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';

function App() {

  const [consumers, setConsumers] = useState([])

  const  newConsumer = (consumer) => {
    console.log('Deu certo ... ', consumer);
    setConsumers([...consumers, consumer])
  }

  return (
    <div>
      <Header/>
      <Form 
        getDataConsumer={
          consumer => newConsumer(consumer)
          }/>
    </div>
  );
}

export default App;
