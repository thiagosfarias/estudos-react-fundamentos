import React from 'react'
import DiretaFilho from './DiretaFilho'
export default props => {
    return (
        <div>
            <DiretaFilho texto="Thiago" numero={26} bool={true}>

            </DiretaFilho>
            <DiretaFilho texto="Talyson" numero={25} bool={true}>

            </DiretaFilho>
        </div>
    )
}