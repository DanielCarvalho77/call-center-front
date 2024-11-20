import './index.css'

const Input = (props) => {
    return (
        <div className="input-container">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}

export default Input;