import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import './index.css'

const Form = (porps) => {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [bornDate, setBornDate] = useState('');

    const save = (event) => {
        event.preventDefault();
        porps.getDataConsumer({
            name,
            cpf,
            bornDate
        })
    }

    return (
        <div className="form-container">
            <section >
                <h3>
                    Dados pessoais
                </h3>
                <hr/>
                <form onSubmit={save}>

                    <Input 
                        label="Nome" 
                        placeholder="Digite seu nome" 
                        type="text"
                        valueKeyed={name}
                        alterKeyedUser={valueKeyed => setName(valueKeyed)}
                    />

                    <Input 
                        label="Data de nascimento" 
                        placeholder="idade" 
                        type="date"
                        valueKeyed={bornDate}
                        alterKeyedUser={valueKeyed => setBornDate(valueKeyed)}
                    />

                    <Input 
                        label="CPF" 
                        placeholder="Infomre seu CPF" 
                        type="number"
                        valueKeyed={cpf}
                        alterKeyedUser={valueKeyed => setCpf(valueKeyed)}
                    />

                    <Button>Cadastrar</Button>

                </form>
            </section>
        </div>
    )
}

export default Form;
