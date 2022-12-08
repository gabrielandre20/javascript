function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar'
        //alert('[ERRO] Faltam Dados!')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        //Converter variáveis de texto para número
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                    res.innerHTML += ` \u{1F449} ${c}`           
            }
                
        } else { //Contagem Regressiva
           for (let c = i; c >= f; c-= p) {
            res.innerHTML += ` \u{1F449} ${c}`            
           } 
        }

        res.innerHTML += ` \u{1F3C1}`
    }
}