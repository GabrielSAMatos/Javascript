function tabuada(){
    var res = document.querySelector("select#seltab")
    var txtnum = document.querySelector("#inum")
    let num = Number(txtnum.value) 
    
    let cont = 0
    res.innerHTML = ""
    if(txtnum.value.length == 0){
        alert('Digite um número.')
    } else{
    
        while(cont <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${cont * num}`
            item.value = `tab${cont}`
            res.appendChild(item)
            cont ++
        }
    }
}