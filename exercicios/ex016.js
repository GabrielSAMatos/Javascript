/*
function parImpar(num){
    if(num%2 == 0){
        return('Par')
    }else{
        return('Impar')
    }
}

console.log(parImpar(55))
 

function somar(n1, n2){
    return(`${n1} + ${n2} = ${n1 + n2}`)
}

console.log(somar(5,5))


function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c --){
        fat *= c
    }
    return fat
}

console.log(fatorial(1))

*/

//RECURSIVIDADE
function fatorial(n){
    if(n == 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))