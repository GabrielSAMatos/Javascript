document.addEventListener('DOMContentLoaded', function() {

const num0 = document.querySelector("div#zero")
const num1 = document.querySelector("div#um")
const num2 = document.querySelector("div#dois")
const num3 = document.querySelector("div#tres")
const num4 = document.querySelector("div#quatro")
const num5 = document.querySelector("div#cinco")
const num6 = document.querySelector("div#seis")
const num7 = document.querySelector("div#sete")
const num8 = document.querySelector("div#oito")
const num9 = document.querySelector("div#nove")

const tela = document.querySelector("div#tela")
const on_ce = document.querySelector("div#on_ce")
const off = document.querySelector("div#off")

const raiz = document.querySelector("div#raiz")
const porce = document.querySelector("div#porcentagem")
const divi = document.querySelector("div#divisao")
const mult = document.querySelector("div#mult")
const sub = document.querySelector("div#sub")
const soma = document.querySelector("div#soma")
const res = document.querySelector("div#igual")

let x = 0
let y = 0
let cont = 0
let qntx = 0
let qnty = 0
let primeirox = false
let ligado = false
/*
Precisa de uma função para cada número ------ OK
Precisa de uma função para ON/OFF/Sinais matemáticos
Precisa de uma variável X e Y para armazenar números ------ OK
Precisa de uma variável para armazenar os valores de X e Y
Precisa de uma variável liga para ligar a calculadora 

*/
num0.addEventListener('click', clicar0)
num1.addEventListener('click', clicar1)
num2.addEventListener('click', clicar2)
num3.addEventListener('click', clicar3)
num4.addEventListener('click', clicar4)
num5.addEventListener('click', clicar5)
num6.addEventListener('click', clicar6)
num7.addEventListener('click', clicar7)
num8.addEventListener('click', clicar8)
num9.addEventListener('click', clicar9)

on_ce.addEventListener('click', clicaron_ce)
off.addEventListener('click', clicaroff)
raiz.addEventListener('click', clicarraiz)
porce.addEventListener('click', clicarporce)
divi.addEventListener('click', clicardivi)
mult.addEventListener('click', clicarmult)
sub.addEventListener('click', clicarsub)
soma.addEventListener('click', clicarsoma)
res.addEventListener('click', clicarres)

function clicar0(){
    if(cont == 0 && qntx <= 7 && ligado == true){
        if(primeirox == true){
            x = 0
            primeirox = false
            tela.innerHTML = x
        }else{
            x = 0
            tela.innerHTML += x
            qntx++
        }
    }else if(cont == 1 && qnty <= 7){
        y = 0
        qnty++
    }
}

function clicar1(){
    if(cont == 0 && qntx <= 7 && ligado == true){
        if(primeirox == true){
            x = 1
            primeirox = false
            tela.innerHTML = x
        }else{
            x = 1
            tela.innerHTML += x
            qntx++
        }
    }else if(cont == 1 && qnty <= 7){
        y = 1
        qnty++
    }
}

function clicar2(){
    if(cont == 0 && qntx <= 7 && ligado == true){
        if(primeirox == true){
            x = 2
            primeirox = false
            tela.innerHTML = x
        }else{
            x = 2
            tela.innerHTML += x
            qntx++
        }
    }else if(cont == 1 && qnty <= 7){
        y = 2
        qnty++
    }
}

function clicar3(){
    if(cont == 0 && qntx <= 7 && ligado == true){
        if(primeirox == true){
            x = 3
            primeirox = false
            tela.innerHTML = x
        }else{
            x = 3
            tela.innerHTML += x
            qntx++
        }
    }else if(cont == 1 && qnty <= 7){
        y = 3
        qnty++
    }
}

function clicar4(){
    if(cont == 0 && qntx <= 7 && ligado == true){
        if(primeirox == true){
            x = 4
            primeirox = false
            tela.innerHTML = x
        }else{
            x = 4
            tela.innerHTML += x
            qntx++
        }
    }else if(cont == 1 && qnty <= 7){
        y = 4
        qnty++
    }
}

function clicar5(){
    if(cont == 0 && qntx <= 7 && ligado == true){
        if(primeirox == true){
            x = 5
            primeirox = false
            tela.innerHTML = x
        }else{
            x = 5
            tela.innerHTML += x
            qntx++
        }
    }else if(cont == 1 && qnty <= 7){
        y = 5
        qnty++
    }
}

function clicar6(){
    if(cont == 0 && qntx <= 7 && ligado == true){
        if(primeirox == true){
            x = 6
            primeirox = false
            tela.innerHTML = x
        }else{
            x = 6
            tela.innerHTML += x
            qntx++
        }
    }else if(cont == 1 && qnty <= 7){
        y = 6
        qnty++
    }
}

function clicar7(){
    if(cont == 0 && qntx <= 7 && ligado == true){
        if(primeirox == true){
            x = 7
            primeirox = false
            tela.innerHTML = x
        }else{
            x = 7
            tela.innerHTML += x
            qntx++
        }
    }else if(cont == 1 && qnty <= 7){
        y = 7
        qnty++
    }
}

function clicar8(){
    if(cont == 0 && qntx <= 7 && ligado == true){
        if(primeirox == true){
            x = 8
            primeirox = false
            tela.innerHTML = x
        }else{
            x = 8
            tela.innerHTML += x
            qntx++
        }
    }else if(cont == 1 && qnty <= 7){
        y = 8
        qnty++
    }
}

function clicar9(){
    if(cont == 0 && qntx <= 7 && ligado == true){
        if(primeirox == true){
            x = 9
            primeirox = false
            tela.innerHTML = x
        }else{
            x = 9
            tela.innerHTML += x
            qntx++
        }
    }else if(cont == 1 && qnty <= 7){
        y = 9
        qnty++
    }
}

function clicaron_ce(){
    x = 0
    y = 0
    cont = 0
    qntx = 0
    qnty = 0
    primeirox = true
    ligado = true
    tela.innerHTML = x
}

function clicaroff(){
    ligado = false
    tela.innerHTML = ""
}

function clicardivi(){

}

function clicarraiz(){

}

function clicarsoma(){

}

function clicarsub(){

}

function clicarmult(){

}

function clicarporce(){

}

function clicarres(){

}

})