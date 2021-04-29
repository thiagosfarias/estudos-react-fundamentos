import React from 'react'
import Card from './components/layout/Card'
import Aleatorio from './components/basics/Aleatorio'
import Familia from './components/basics/Familia'
import Membro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProduto from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import MegaSena from './components/megasena/MegaSena'
import './App.css'

export default (props) => {
    return (
        <div className="App">
            <h1>Estudando REACT JS</h1>
            <div className="Cards">
                <Card titulo="#010 - Mega Sena" color="#7d4040">
                    <MegaSena></MegaSena>
                </Card>
                <Card titulo="#009 - Contador (Componente Basaedo em Classe)" color="#7d4040">
                    <Contador numeroInicial={10} passoInicial={1}></Contador>
                </Card>
                <Card titulo="#008 - Input (Componente Controlado)" color="#82642b">
                    <Input></Input>
                </Card>
                <Card titulo="#007 - Comunicação Indireta" color="#6e6e20">
                    <IndiretaPai>
                    </IndiretaPai>
                </Card>
                <Card titulo="#006 - Comunicação Direta" color="#406e20">
                    <DiretaPai>

                    </DiretaPai>
                </Card>
                <Card titulo="#005 - Par ou Impar - Render Condicional" color="#185c3b">
                    <ParOuImpar numero={118}>

                    </ParOuImpar>
                    <UsuarioInfo user={{nome:"Thiago", senha:'1B26'}}/>

                    <UsuarioInfo user={{nome: 'Talyson', senha:'1M65'}}/>
                </Card>
                <Card titulo="#004 - Tabela" color="#182b5c">
                    <TabelaProduto>

                    </TabelaProduto>
                </Card>
                <Card titulo="#003 - Repetição" color="#3c185c">
                    <ListaAlunos>

                    </ListaAlunos>
                </Card>
                <Card titulo="#002 - Compomente Com Filho" color="#581845">
                    <Familia sobrenome="Farias">
                        <Membro nome="Mônica"/>
                        <Membro nome="Thiago"/>
                        <Membro nome="Isadora"/>
                        <Membro nome="Isabella"/>
                    </Familia>
                </Card>

                <Card titulo="#001 - Número Aleatório" color="#900C3F">
                    <Aleatorio
                        min={1}
                        max={60}
                    />
                </Card>
            </div>
        </div>
    )
}