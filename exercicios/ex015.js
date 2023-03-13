let num = [5, 2, 9, 8]
num[4] = 0
num.push(1)

console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é: ${num[0]} e o último é ${num[5]}`)
console.log(`O vetor tem ${num.length} elementos.`)

console.log('==========================')
tam = num.length
for(pos = 0; pos < (tam); pos++){
    console.log(`Posição ${pos}: ${num[pos]}`)
}
console.log('==========================')
console.log(`O vetor em ordem numérica fica: ${num.sort()}`)