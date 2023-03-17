document.addEventListener('DOMContentLoaded', function() {
    let cont = 0
    let res1 = document.querySelector("#res1")
    let res2 = document.querySelector("#res2")
    let res3 = document.querySelector("#res3")
    let res4 = document.querySelector("#res4")
    let pergunta = document.querySelector("#pergunta")
    let recomeco = document.querySelector("#recomecar")
    let acerto = 0

    res1.addEventListener('click', clicar)
    res2.addEventListener('click', clicar)
    res3.addEventListener('click', clicar)
    res4.addEventListener('click', clicar)

    res1.addEventListener('click', clicar1)
    res2.addEventListener('click', clicar2)
    res3.addEventListener('click', clicar3)
    res4.addEventListener('click', clicar4)

    res1.addEventListener('mouseenter', entrar1)
    res2.addEventListener('mouseenter', entrar2)
    res3.addEventListener('mouseenter', entrar3)
    res4.addEventListener('mouseenter', entrar4)

    res1.addEventListener('mouseout', sair1)
    res2.addEventListener('mouseout', sair2)
    res3.addEventListener('mouseout', sair3)
    res4.addEventListener('mouseout', sair4)
    
    recomeco.addEventListener('click', recomecar)

    const corverdade = 'green'
    const corfalsa = 'red'
    const roxoescuro = '#20063B'
    const roxoclaro = '#BC96E6'
    const mostarda = '#F5B700'
    const transicao = '800'
    const transicaorapida = '80'
    
    function verdade(res){
        res.style.background = corverdade
        setTimeout(function(){
            res.style.background = roxoescuro
        }, transicao)
    }
    
    function falso(res){
        res.style.background = corfalsa
        setTimeout(function(){
            res.style.background = roxoescuro
        }, transicao)
    }
    
    function entrou(res){
        setTimeout(function(){
            res.style.background = roxoclaro
            res.style.border = `2px solid ${roxoescuro}`
        }, transicaorapida)
    }
    
    
    function saiu(res){
        setTimeout(function(){
            res.style.background = roxoescuro
            res.style.border = `2px solid ${roxoclaro}`
        }, transicaorapida)
    }
    
    function entrar1(){
        entrou(res1)
    }
    
    function entrar2(){
    entrou(res2)
    }

    function entrar3(){
    entrou(res3)
    }

    function entrar4(){
    entrou(res4)
    }

    function sair1(){
    saiu(res1)
    }

    function sair2(){
    saiu(res2)
    }

    function sair3(){
    saiu(res3)
    }

    function sair4(){
        saiu(res4)
    }
    
    function pt2(){
        setTimeout(function(){
            pergunta.innerHTML = 'Quem fala a frase "Vira homem, porr@!"'
            res1.innerHTML = 'Capitão Nascimento'
            res2.innerHTML = 'Bolsonaro'
            res3.innerHTML = 'Thomas Shelby'
            res4.innerHTML = 'Gato de Botas'
        }, transicao)
    }

    function pt3(){
        setTimeout(function(){
            pergunta.innerHTML = 'Qual o melhor urso?'
            res1.innerHTML = 'Pardo'
            res2.innerHTML = 'Negro'
            res3.innerHTML = 'Polar'
            res4.innerHTML = 'Panda'
        }, transicao)
    }

    function pt4(){
        setTimeout(function(){
            pergunta.innerHTML = 'Por qual gênero Gabriel SA Matos se identifica?'
            res1.innerHTML = 'Masculino'
            res2.innerHTML = 'Feminino'
            res3.innerHTML = 'Neutro'
            res4.innerHTML = 'Sinto falta dos meus semelhantes'
        }, transicao)
    }

    function pt5(){
        setTimeout(function(){
            pergunta.innerHTML = 'Você contrataria o Gabriel SA Matos?'
            res1.innerHTML = 'Sim!'
            res2.innerHTML = 'Claro!'
            res3.innerHTML = 'Com certeza!'
            res4.innerHTML = 'Afirmativo'

        }, transicao)
    }

    function clicar(){
        if(cont == 0){
            verdade(res1)
            falso(res2)
            falso(res3)
            falso(res4)
            pt2()
            cont++
        }else if(cont == 1){
            verdade(res3)
            falso(res1)
            falso(res2)
            falso(res4)
            pt3()
            cont++        
        }else if(cont == 2){
            verdade(res2)
            falso(res1)
            falso(res3)
            falso(res4)
            pt4()
            cont++    
        }
        else if(cont == 3){
            verdade(res4)
            falso(res1)
            falso(res2)
            falso(res3)
            pt5()
            cont++
        }else{
            verdade(res1)
            verdade(res2)
            verdade(res3)
            verdade(res4)
            resultado()
        } 
    }
    
    function clicar1(){
        if(cont == 1){
            acerto ++
        }
    }

    function clicar2(){
        if(cont == 3){
            acerto ++
        }
    }

    function clicar3(){
        if(cont == 2){
            acerto ++
        }
    }

    function clicar4(){
        if(cont == 4){
            acerto ++
        }
    }

    function resultado(){
        res1.innerHTML = ""
        res1.style.background = ""
        res1.style.width = "0px"
        res1.style.padding = "0px"
        res1.style.border = "0px"

        res2.innerHTML = ""
        res2.style.background = ""
        res2.style.width = "0px"
        res2.style.padding = "0px"
        res2.style.border = "0px"

        res3.innerHTML = ""
        res3.style.background = ""
        res3.style.width = "0px"
        res3.style.padding = "0px"
        res3.style.border = "0px"

        res4.innerHTML = ""
        res4.style.background = ""
        res4.style.width = "0px"
        res4.style.padding = "0px"
        res4.style.border = "0px"

        saiu = null

        recomeco.style.color = "white"
        recomeco.style.backgroundColor = "black"
        recomeco.style.padding = "15px"
        recomeco.style.width = "200px"
        recomeco.style.textAlign = "center"
        recomeco.style.borderRadius ="50px"
        recomeco.style.border = "2px solid white"
        recomeco.style.margin = "auto"


        if(acerto == 0){
            acerto = "0%"
            pergunta.style.color = corfalsa
        }else if (acerto == 1){
            acerto = "25%"
            pergunta.style.color = 'lightcoral'
        }else if (acerto == 2){
            acerto = "50%"
            pergunta.style.color = mostarda
        }else if (acerto == 3){
            acerto = "75%"
            pergunta.style.color = 'blue'
        }else{
            acerto = "100%"
            pergunta.style.color = corverdade
        }
        pergunta.innerHTML = acerto
        pergunta.style.fontSize = "7.8em"
        recomeco.innerHTML = 'Recomeçar!'
    }

    function recomecar(){
        setTimeout(function(){
            res1.innerHTML = 'Sousa de Abreu'
            res2.innerHTML = 'Santos de Almeida'
            res3.innerHTML = 'Silva de Alcantra'
            res4.innerHTML = 'Serbastião de Acarecanga'
            pergunta.innerHTML = 'Qual o nome completo do Gabriel?'
            cont = 0
        }, transicao)
    }
})


