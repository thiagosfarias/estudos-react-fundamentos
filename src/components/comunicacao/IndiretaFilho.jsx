import React from 'react'

export default props => {
    const gerarIdade = () => parseInt(Math.random() * (20)) + 30
    return (
        <div>
            <div>Filho</div>
            <br/>
            <button onClick={_ => props.quandoClicar("Genilson tem", gerarIdade(), true)}>Fornecer Informações</button>
        </div>
    )
}