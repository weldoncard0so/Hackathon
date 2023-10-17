let botaoSortear = document.getElementById("btnTips");

document.addEventListener('DOMContentLoaded', function () {
    realizarSorteio();
    botaoSortear.addEventListener('click', realizarSorteio);

function sortearPalavra(lista) {
    if (lista.length === 0) {
        console.error("A lista de palavras está vazia.");
        return;
    }

   

    return palavraSorteada;
}

function realizarSorteio() {
    let lista = ['banana', 'cafe', 'bolinho', 'suco', 'chocolate','laranja','ovo','pirulito'];
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    const palavraSorteada = lista[indiceAleatorio];
    let inputPalavra = document.getElementById("inputPalavra");
    inputPalavra.value = palavraSorteada;
    console.log(inputPalavra.value);

}
});