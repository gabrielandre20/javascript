let amigo = {nome: 'José', 
sexo: 'M',
peso: 83.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)