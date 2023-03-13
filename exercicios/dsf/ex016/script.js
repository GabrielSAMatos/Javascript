function contar(){
    var res = document.querySelector('#res')
    var txtinicio = document.querySelector('input#iinicio')
    var txtfim = document.querySelector('#ifim')
    var txtpasso = document.querySelector('#ipasso')

    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)
    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        res.innerText = 'erro'
    } else{
        if(passo == 0){
            window.alert('Passo inválido. Considerando passo = 1')
            passo = 1
        }
        res.innerHTML = 'Contando:'
        //Contagem crescente
        if(inicio < fim){
            for(var c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c} -> ` 
            }
        //Contagem regressiva
        }else{
            for(var c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} -> ` 
            }
        }
        res.innerHTML += "FIM!"
    }
}