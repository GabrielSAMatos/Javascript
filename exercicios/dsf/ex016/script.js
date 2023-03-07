function contar(){
    var res = document.querySelector('#res')
    var txtinicio = document.querySelector('input#iinicio')
    var txtfim = document.querySelector('#ifim')
    var txtpasso = document.querySelector('#ipasso')

    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)
    if(inicio == "" || fim == "" || fim <= inicio || passo == ""){
        res.innerText = 'erro'
    } else{
        for(var c = inicio; c <= fim; c += passo){
            var li = document.createElement("li")
            if(c >= (fim-passo)){
                li.appendChild(document.createTextNode(`${c}`))
                res.appendChild(li)
                break
            }
            li.appendChild(document.createTextNode(`${c} ->`))
            res.appendChild(li)
        }
    }
   
}