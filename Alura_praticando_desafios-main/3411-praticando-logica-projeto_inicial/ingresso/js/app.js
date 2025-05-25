function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidadeAComprar = document.getElementById('qtd');
    let listaCadeiras = document.querySelectorAll('section .lista li span');
    
    for(let i = 0; i < tipoIngresso.length; i++){
        if(tipoIngresso[i].selected){
            for(let a = 0; a < tipoIngresso.length; a++){
                if(tipoIngresso[i].value == listaCadeiras[a].id.split('-')[1]){
                    if (listaCadeiras[a].innerHTML >= quantidadeAComprar.value){
                        listaCadeiras[a].innerHTML = Number(listaCadeiras[a].innerHTML - quantidadeAComprar.value);
                    } else {
                        alert('quantidade de cadeiras indisponiveis')
                    }
                }
            }
        }
    }
}
