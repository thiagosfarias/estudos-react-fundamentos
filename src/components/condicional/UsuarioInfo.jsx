import If from './If'
import React from 'react'


export default props => {
    const user = props.user || {}

    return (
        <div>
            <If test={user && user.nome}>
                Seja bem vindo <strong>{user.nome}</strong>, seu senha de espera é <strong>{user.senha}</strong>
            </If>
        </div>
    )
}