let arrayAmigos = [];
let listaAmigos = document.getElementById('lista-amigos');

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');

    arrayAmigos.push(nomeAmigo.value);

    span = document.createElement('span');
    span.innerHTML = nomeAmigo.value + ', ';
    
    listaAmigos.appendChild(span);

    nomeAmigo.value='';
}

function sortear(){
    let sorteio = document.getElementById('lista-sorteio');
    embaralhar(arrayAmigos);
    for (let i = 0; i < arrayAmigos.length; i++){
        if(i == arrayAmigos.length - 1){
            sorteio.innerHTML += `<br> ${arrayAmigos[i]} --> ${arrayAmigos[0]}`;
        }else{
            sorteio.innerHTML += `<br> ${arrayAmigos[i]} --> ${arrayAmigos[i+1]}`;
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    arrayAmigos = [];
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
    listaAmigos.innerHTML = '';
}

listaAmigos.addEventListener('click', (e) => {
    let posicao = arrayAmigos.indexOf(e.target.innerHTML.split(',')[0]);
    arrayAmigos.splice(posicao,1)
    listaAmigos.removeChild(e.target)
  });