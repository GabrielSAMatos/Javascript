let $eu = {nome: 'Gabriel', 
sexo: 'M', 
peso: 55,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

eu.engordar(5)
console.log(`${eu.nome} pesa ${eu.peso}Kg.`)
