import React from 'react'
import './TabelaProduto.css'
import produtos from '../../data/produtos'

export default props => {
    const lista = produtos;

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <td><strong>ID</strong></td>
                        <td><strong>Nome do Produto</strong></td>
                        <td><strong>Preço</strong></td>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((produto, i) => {
                        return (
                            <tr key={produto.id} className={i % 2 == 0 ? 'Par':''}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}