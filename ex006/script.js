function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "imagens/manha1.jpg"
        document.body.style.background = '#FDC0A1'
    } else if (hora > 12 && hora <= 18){
        //Boa Tarde    
        img.src = "imagens/tarde1.jpg"  
        document.body.style.background = '#B3B72B'
    } else {
        //Boa noite
        img.src = "imagens/noite1.jpg"
        document.body.style.background = '#003563'
    }

}
