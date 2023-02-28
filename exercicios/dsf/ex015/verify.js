function verificar(){
    var cano = new Date()
    var anoatual = cano.getFullYear()
    var nasc = document.querySelector('#iano')
    var idade = anoatual - Number(nasc.value)

    var sexom = document.getElementsByName('sexo')

    var res = document.querySelector('#res')

    if (nasc.value == 0 || nasc.value > anoatual){
        window.alert('erro')
    }
    else{
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexom[0].checked){ // homem
            var genero = "um Homem"
            if(idade <18){
                img.setAttribute('src', 'imagens/homem_criança.jpg')//criança
            } 
            else if(idade < 30){
                img.setAttribute('src', 'imagens/homem_jovem.jpg')//jovem
            } 
            else if(idade < 50){
                img.setAttribute('src', 'imagens/homem_adulto.jpg') //adulto
            } 
            else if(idade < 120){
                img.setAttribute('src', 'imagens/homem_idoso.jpg')//idoso
            }
            else{
                img.setAttribute('src', 'imagens/caveira.jpg')
            }
        }

        else if(sexom[1].checked){ // mulher
            var genero = "uma Mulher"
            if(idade <18){
                img.setAttribute('src', 'imagens/mulher_criança.jpg')//criança
            } else if(idade < 30){
                img.setAttribute('src', 'imagens/mulher_jovem.jpg')//jovem
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/mulher_adulto.jpg')//adulto
            } else if(idade < 120){
                img.setAttribute('src', 'imagens/mulher_idoso.jpg')//idoso
            }
            else{
                img.setAttribute('src', 'imagens/caveira.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
        img.style.borderRadius = '50%'
    }
}
