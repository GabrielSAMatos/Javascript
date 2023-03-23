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

const craiz = document.querySelector("div#raiz")
const cquad = document.querySelector("div#aoquadrado")
const cdivi = document.querySelector("div#divisao")
const cmult = document.querySelector("div#mult")
const csub = document.querySelector("div#sub")
const csoma = document.querySelector("div#soma")
const res = document.querySelector("div#igual")

//ligar a calculadora
let ligado = false

//primeiro numero antes da função matemática
let x = 0

//primeiro numero depois da função matemática
let y = 0

//contador caso clique em uma função matemática para digitar o numero y
let cont = 0

//número máximo que se pode digitar
let qntx = 0
let qnty = 0

//para que o primeiro número seja ele e o resto vai se juntando
let primeirox = false
let primeiroy = false
//contagem para que execute apenas 1 função por vez
let contfuncao = 0

//Ao apertar qualquer função matemática, irá deixar ela verdadeira para quando clicar no igual apenas ela aconteça
let fdivi = false
let fraiz = false
let fquad  = false
let fmult = false
let fsub = false
let fsoma = false
let fres = false

//variáveis que iram receber os números
let numerosx = []
let numerosy = []

//intervalo quando desligar
let intervalo = '2000'

/*
Precisa de uma função para cada número ------ OK
Precisa de uma função para ON/OFF/Sinais matemáticos OK
Precisa de uma variável X e Y para armazenar números ------ OK
Precisa de uma variável para armazenar os valores de X e Y OK
Precisa de uma variável liga para ligar a calculadora OK

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
craiz.addEventListener('click', clicarraiz)
cquad.addEventListener('click', clicarquad)
cdivi.addEventListener('click', clicardivi)
cmult.addEventListener('click', clicarmult)
csub.addEventListener('click', clicarsub)
csoma.addEventListener('click', clicarsoma)
res.addEventListener('click', clicarres)

function clicar0(){
    if(cont == 0 && qntx <= 5 && ligado == true){
        if(primeirox == true){
            x = 0
            primeirox = false
            tela.innerHTML = x
            numerosx = x.toString()
        }else{
            x = 0
            tela.innerHTML += x
            qntx++
            numerosx += x
        }
    }else if(cont == 1 && qnty <= 5){
        if(primeiroy == true){
            y = 0
            primeiroy = false
            tela.innerHTML = y
            numerosy = y.toString()
        } else{
            y = 0
            tela.innerHTML += y 
            qnty++
            numerosy += y
        }
    }
}

function clicar1(){
    if(cont == 0 && qntx <= 5 && ligado == true){
        if(primeirox == true){
            x = 1
            primeirox = false
            tela.innerHTML = x
            numerosx = x.toString()
        }else{
            x = 1
            tela.innerHTML += x
            qntx++
            numerosx += x
        }
    }else if(cont == 1 && qnty <= 5){
        y = 1
        qnty++
        if(primeiroy == true){
            y = 1
            primeiroy = false
            tela.innerHTML = y
            numerosy = y.toString()
        } else{
            y = 1
            tela.innerHTML += y 
            qnty++
            numerosy += y
        }
    }
}

function clicar2(){
    if(cont == 0 && qntx <= 5 && ligado == true){
        if(primeirox == true){
            x = 2
            primeirox = false
            tela.innerHTML = x
            numerosx = x.toString()
        }else{
            x = 2
            tela.innerHTML += x
            qntx++
            numerosx += x
        }
    }else if(cont == 1 && qnty <= 5){
        if(primeiroy == true){
            y = 2
            primeiroy = false
            tela.innerHTML = y
            numerosy = y.toString()
        } else{
            y = 2
            tela.innerHTML += y 
            qnty++
            numerosy += y
        }
    }
}

function clicar3(){
    if(cont == 0 && qntx <= 5 && ligado == true){
        if(primeirox == true){
            x = 3
            primeirox = false
            tela.innerHTML = x
            numerosx = x.toString()
        }else{
            x = 3
            tela.innerHTML += x
            qntx++
            numerosx += x
        }
    }else if(cont == 1 && qnty <= 5){
        if(primeiroy == true){
            y = 3
            primeiroy = false
            tela.innerHTML = y
            numerosy = y.toString()
        } else{
            y = 3
            tela.innerHTML += y 
            qnty++
            numerosy += y
        }
    }
}

function clicar4(){
    if(cont == 0 && qntx <= 5 && ligado == true){
        if(primeirox == true){
            x = 4
            primeirox = false
            tela.innerHTML = x
            numerosx = x.toString()
        }else{
            x = 4
            tela.innerHTML += x
            qntx++
            numerosx += x
        }
    }else if(cont == 1 && qnty <= 5){
        if(primeiroy == true){
            y = 4
            primeiroy = false
            tela.innerHTML = y
            numerosy = y.toString()
        } else{
            y = 4
            tela.innerHTML += y 
            qnty++
            numerosy += y
        }
    }
}

function clicar5(){
    if(cont == 0 && qntx <= 5 && ligado == true){
        if(primeirox == true){
            x = 5
            primeirox = false
            tela.innerHTML = x
            numerosx = x.toString()
        }else{
            x = 5
            tela.innerHTML += x
            qntx++
            numerosx += x
        }
    }else if(cont == 1 && qnty <= 5){
        if(primeiroy == true){
            y = 5
            primeiroy = false
            tela.innerHTML = y
            numerosy = y.toString()
        } else{
            y = 5
            tela.innerHTML += y 
            qnty++
            numerosy += y
        }
    }
}

function clicar6(){
    if(cont == 0 && qntx <= 5 && ligado == true){
        if(primeirox == true){
            x = 6
            primeirox = false
            tela.innerHTML = x
            numerosx = x.toString()
        }else{
            x = 6
            tela.innerHTML += x
            qntx++
            numerosx += x
        }
    }else if(cont == 1 && qnty <= 5){
        y = 6
        qnty++
        if(primeiroy == true){
            y = 6
            primeiroy = false
            tela.innerHTML = y
            numerosy = y.toString()
        } else{
            y = 6
            tela.innerHTML += y 
            qnty++
            numerosy += y
        }
    }
}

function clicar7(){
    if(cont == 0 && qntx <= 5 && ligado == true){
        if(primeirox == true){
            x = 7
            primeirox = false
            tela.innerHTML = x
            numerosx = x.toString()
        }else{
            x = 7
            tela.innerHTML += x
            qntx++
            numerosx += x
        }
    }else if(cont == 1 && qnty <= 5){
        if(primeiroy == true){
            y = 7
            primeiroy = false
            tela.innerHTML = y
            numerosy = y.toString()
        } else{
            y = 7
            tela.innerHTML += y 
            qnty++
            numerosy += y
        }
    }
}

function clicar8(){
    if(cont == 0 && qntx <= 5 && ligado == true){
        if(primeirox == true){
            x = 8
            primeirox = false
            tela.innerHTML = x
            numerosx = x.toString()
        }else{
            x = 8
            tela.innerHTML += x
            qntx++
            numerosx += x
        }
    }else if(cont == 1 && qnty <= 5){
        if(primeiroy == true){
            y = 8
            primeiroy = false
            tela.innerHTML = y
            numerosy = y.toString()
        } else{
            y = 8
            tela.innerHTML += y 
            qnty++
            numerosy += y
        }
    }
}

function clicar9(){
    if(cont == 0 && qntx <= 5 && ligado == true){
        if(primeirox == true){
            x = 9
            primeirox = false
            tela.innerHTML = x
            numerosx = x.toString()
        }else{
            x = 9
            tela.innerHTML += x
            qntx++
            numerosx += x
        }
    }else if(cont == 1 && qnty <= 5){
        if(primeiroy == true){
            y = 9
            primeiroy = false
            tela.innerHTML = y
            numerosy = y.toString()
        } else{
            y = 9
            tela.innerHTML += y 
            qnty++
            numerosy += y
        }
    }
}

function clicaron_ce(){
    x = 0
    y = 0
    cont = 0
    qntx = 0
    qnty = 0
    numerosx = 0
    numerosx = 0
    contfuncao = 0
    primeirox = true
    primeiroy = true
    ligado = true

    fdivi = false
    fraiz = false
    fquad  = false
    fmult = false
    fsub = false
    fsoma = false
    fres = false
    tela.innerHTML = x

}

function clicaroff(){
    ligado = false
    tela.innerHTML = 'Adeus ;('
    setTimeout(function(){
        tela.innerHTML = ''
    }, intervalo)
}

function clicarsoma(){
    if(contfuncao == 0){
        tela.innerHTML += "+"
        fsoma = true
        contfuncao++
        cont++   
    }
}

function clicarsub(){
    if(contfuncao == 0){
        tela.innerHTML += "-"
        fsub = true
        contfuncao++
        cont++   
    }
}

function clicarmult(){
    if(contfuncao == 0){
        tela.innerHTML += "*"
        fmult = true
        contfuncao++
        cont++   
    }
}

function clicardivi(){
    if(contfuncao == 0){
        tela.innerHTML += "/"
        fdivi = true
        contfuncao++
        cont++   
    }
}

function clicarraiz(){
    if(contfuncao == 0){
        tela.innerHTML += "√"
        fraiz = true
        contfuncao++
        cont = 3   
    }
}

function clicarquad(){
    if(contfuncao == 0){
        tela.innerHTML += "^"
        fquad = true
        contfuncao++
        cont = 3  
    }
}

function clicarres(){
    parseInt(numerosx)
    parseInt(numerosy)
    cont = 2 
    if(fsoma == true){
        tela.innerHTML = (Number(numerosx) + Number(numerosy))
    }else if(fsub == true){
        tela.innerHTML = (Number(numerosx) - Number(numerosy))
    }else if(fmult == true){
        tela.innerHTML = (Number(numerosx)* Number(numerosy))
    }else if(fdivi == true){
        tela.innerHTML = (Number(numerosx)/Number(numerosy)).toFixed(10)
    }else if(fquad == true){
        tela.innerHTML = (Number(numerosx)*Number(numerosx))
    }else if(fraiz == true){
        tela.innerHTML = (Math.sqrt(Number(numerosx))).toFixed(10)
    }

    primeirox = true
    primeiroy = true
    
}



})