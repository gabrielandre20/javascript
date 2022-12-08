function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tabu')

    if (num.value.length == 0 ) {
        alert ('Por Favor, digite um número!')
    } else {
        var n = Number(num.value)
        //var c = 1
        tab.innerHTML = ''

        /*
        while ( c <= 10) {
           let item = document.createElement('option') 
           item.text = `${n} * ${c} = ${n*c}`
           item.value = `tab${c}`
           tab.appendChild(item)
           c++
        }*/

        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n * c}`
            tab.appendChild(item)
        }

    }
    



}