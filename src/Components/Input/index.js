import './index.css'

const Input = (props) => {

    const keyed = ( event ) => {
        props.alterKeyedUser(event.target.value)
    }

    return (
        <div className="input-container">
            <label>{props.label}</label>
            <input 
                type={props.type} 
                placeholder={props.placeholder}
                value={props.valueKeyed}
                onChange={keyed}
                >
            </input>
        </div>
    )
}

export default Input;