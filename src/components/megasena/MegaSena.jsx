import React, { useState } from 'react'
import geradorDeNumeros from './geradorDeNumeros'
import './MegaSena.css'

export default props => {
    const numerosInciais = Array(6).fill(0)
    const [numerosGerados, setNumerosGerados] = useState(numerosInciais)

    return (
        <div className="MegaSena">
            <h2>Mega Sena</h2>
            <div id="Resultados">
                <h3 className="Number">{numerosGerados.join(' ')}</h3>
            </div>
            <button onClick={_ => setNumerosGerados(geradorDeNumeros({tamanho: 6}))}>Gerar Números</button>
        </div>
    )
}