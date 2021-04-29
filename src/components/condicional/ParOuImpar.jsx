import React from 'react'

export default props => {
    const isPar = props.numero % 2 === 0 ? (
        <span>{props.numero} é par</span>
    ) : (
        <span>{props.numero} é imppar</span>
    )
    return (
        <div>
            {isPar}
        </div>
    )
}