import React from 'react'

export default props => {
    return (
        <div>
            <button onClick={props.incrementaNumero}>+</button>
            <button onClick={props.decrementaNumero}>-</button>
        </div>
    )
}