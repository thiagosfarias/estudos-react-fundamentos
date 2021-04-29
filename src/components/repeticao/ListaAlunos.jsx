import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    const lista = alunos;
    return (
        <div>
            <ul style={
                {listStyle: 'none'}
            }>
                {lista.map(aluno => {
                    return <li key={aluno.id}>
                        {aluno.id}) - <strong>{aluno.nome}</strong> - {aluno.nota}
                    </li>
                })}
            </ul>
        </div>
    )
}
