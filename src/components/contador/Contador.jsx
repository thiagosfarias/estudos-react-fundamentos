import React, { Component } from 'react'
import Botoes from './Botoes'
import Display from './Display'
import Input from './Input'
import './Contador.css'

export default class Contador extends Component {
    
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    incrementaNumero = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    decrementaNumero = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value
        })
    }

    render(){
        return (
            <div className="Contador">
                <Display numero={this.state.numero}/>
                <Input 
                    passo={this.state.passo} 
                    setPasso={this.setPasso}
                />
                <Botoes 
                    incrementaNumero={this.incrementaNumero}
                    decrementaNumero={this.decrementaNumero}
                />
          </div>
        )
    }
}