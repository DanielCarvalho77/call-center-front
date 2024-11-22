import Button from '../Button';
import Input from '../Input';
import './index.css'

const Form = () => {

    const save = (event) => {
        event.preventDefault();
        alert('aaaaaaaaaaooooooooba')
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
                    />

                    <Input 
                        label="Data de nascimento" 
                        placeholder="idade" 
                        type="date"
                    />

                    <Input 
                        label="CPF" 
                        placeholder="Infomre seu CPF" 
                        type="number"
                    />

                    <Button>Cadastrar</Button>

                </form>
            </section>
        </div>
    )
}

export default Form;
