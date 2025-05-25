function adicionar() {

    let produtos = document.getElementById('produto');
    let sectionProdutos = document.querySelector('#lista-produtos section');
    let quantidade = Number(document.getElementById('quantidade').value);
    let total = document.getElementById('valor-total');

    console.log(produtos)

    if (quantidade > 0){
        for(let i = 0; i < produtos.length; i++){
            if(produtos[i].selected){
                valortotal = 0; 

                if (total.innerHTML != 0){
                    valortotal = total.innerHTML.split('R$')
                    valortotal = Number(valortotal[1])
                }

                produtoEPreco = produtos[i].value.split('-');
                preco = produtoEPreco[1].split('R$');
                preco = Number(preco[1])

                spanQuantidade = document.createElement('span');
                spanQuantidade.classList.add("texto-azul");
                spanQuantidade.innerHTML = `<br>${quantidade}X `;

                spanProduto = document.createElement('span');
                spanProduto.innerHTML = produtoEPreco[0]

                spanPreco = document.createElement('span');
                spanPreco.classList.add("texto-azul");
                spanPreco.innerHTML = produtoEPreco[1]

                sectionProdutos.appendChild(spanQuantidade);
                sectionProdutos.appendChild(spanProduto);
                sectionProdutos.appendChild(spanPreco);

                if (valortotal != 0){
                    total.innerHTML = `R$ ${valortotal + (preco * quantidade)}`
                } else {
                    total.innerHTML = `R$ ${preco * quantidade}`
                }
            }
        }
    } else {
        alert('quantidade precisa ser maior que 0')
    }
}

function limpar() {

    let itensCarrinho = document.querySelector('#lista-produtos');
    let sectionProdutos = document.querySelector('#lista-produtos section');
    let total = document.getElementById('valor-total');

    sectionProdutos.remove()

    sectionProdutos = document.createElement('section');
    sectionProdutos.classList.add("carrinho__produtos__produto")
    itensCarrinho.appendChild(sectionProdutos)

    total.innerHTML = Number(0)

}