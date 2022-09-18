import './CampoTexto.css'

const CampoTexto = (props) => {

    return(
        <div className="campo-texto">
            <label>{props.label}</label> 
            <input 
            value={props.valor} 
            required={props.obrigatorio} 
            placeholder={props.placeholder}
            type = {props.tipo}
            />
        </div>
    )
}

export default CampoTexto