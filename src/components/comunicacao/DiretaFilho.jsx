import React from 'react'

export default props => {
    return (
        <div>
            <div>
                <span>
                    <strong>{props.texto}</strong> {props.numero} {props.bool ? 'Verdadeiro' :  'Falso'}
                </span>
            </div>
        </div>
    )
}