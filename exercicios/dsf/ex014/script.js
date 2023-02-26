function carregar(){
    var tempo = new Date()
    var hora = tempo.getHours()
    txt = document.querySelector('div#txt')
    imagem = document.querySelector('img#imag')

    if(hora >= 5 && hora < 12 ){
        document.body.style.background = 'orange'
        txt.innerText =  `Agora são ${hora} horas. Bom dia!`
    }else if(hora >= 12 && hora < 18) {
        imagem.src = '/exercicios/dsf/imagens/tarde.png'
        document.body.style.background = 'red'
        txt.innerText =  `Agora são ${hora} horas. Boa tarde!`
    } else{
        imagem.src = '/exercicios/dsf/imagens/noite.png'
        document.body.style.background = 'darkblue'
        txt.innerText =  `Agora são ${hora} horas. Boa noite!`
    }
}