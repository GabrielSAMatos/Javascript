let conjunto = []

function adicionar(){
    let txtnums = document.querySelector("#inum")
    let res = document.querySelector("#selres")
    num = Number(txtnums.value)
    
    if(num < 1 || num > 100){
        alert('Valor inválido.')
    }else{
        let rep = conjunto.indexOf(num)
        if(rep != -1){
            alert('Valor já digitado')
        }else{
        conjunto.push(num)
        let item = document.createElement('option')
        item.text = (`Valor ${num} adicionado.`)
        res.appendChild(item)
        resu.innerHTML = ''
        }
    }
    txtnums.value = ''
    txtnums.focus()
}

function finalizar(){
    let resu = document.querySelector("#resu")
    if(conjunto.length == 0){
        alert('Adicione algum valor primeiro')
    }else{
        let soma = 0
        let media
        let maior = conjunto[0]
        let menor = conjunto[0]
        for(let pos in conjunto){
            soma += conjunto[pos]

            if(maior < conjunto[pos]){
                maior = conjunto[pos]
            }
            if(menor > conjunto[pos]){
                menor = conjunto[pos]
            }

        }
        media = soma / conjunto.length

        resu.innerHTML = ''
        resu.innerHTML += `<p>Ao todo, temos ${conjunto.length} números cadastrados.</p>`
        resu.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resu.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resu.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resu.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`

    }
}