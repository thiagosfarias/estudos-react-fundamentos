import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function forneceInfo(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} {idade} {nerd ? ' e é nerd' : ' e não é nerd'}</span>
            </div>
            <IndiretaFilho quandoClicar={forneceInfo}></IndiretaFilho>
        </div>
    )
}