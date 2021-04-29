export default props => {
    var numerosSorteados = []

    while(numerosSorteados.length < props.tamanho){
        var randomNum = parseInt(Math.random() * (60)) + 1
        if(numerosSorteados.indexOf(randomNum) === -1) numerosSorteados.push(randomNum)
    }

    return numerosSorteados.sort((a, b) => a - b)
}