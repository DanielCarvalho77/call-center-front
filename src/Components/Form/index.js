import Input from '../Input';
import './index.css'

const Form = () => {
    return (
        <div className="form-container">
            <section >
                <h3>
                    Dados pessoais
                </h3>
                <hr/>
                <form>
                
                    <Input label="Nome" placeholder="Digite seu nome" type="text"/>
                    <Input label="Data de nascimento" placeholder="idade" type="date"/>
                    <Input label="CPF" placeholder="Infomre seu CPF" type="number"/>
                </form>
            </section>
        </div>
    )
}

export default Form;