let num = [5, 2, 9, 8]
num[4] = 0
num.push(1)

/*console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é: ${num[0]} e o último é ${num[5]}`)
console.log(`O vetor tem ${num.length} elementos.`)

console.log('==========================')
for(pos = 0; pos < num.length; pos++){
    console.log(`Posição ${pos}: ${num[pos]}`)
}

console.log('==========================')
console.log(`O vetor em ordem numérica fica: ${num.sort()}`)
*/

console.log('==========================')
for(let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

let pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${pos}`)
}

