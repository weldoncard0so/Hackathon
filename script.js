let botaoSortear = document.getElementById("btnTips");

document.addEventListener('DOMContentLoaded', function () {
    realizarSorteio();
    botaoSortear.addEventListener('click', realizarSorteio);

function realizarSorteio() {
    let lista = ['banana', 'cafe', 'bolinho', 'suco', 'chocolate','laranja','ovo','pirulito'];
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    const palavraSorteada = lista[indiceAleatorio];
    let inputPalavra = document.getElementById("inputPalavra");
    inputPalavra.value = palavraSorteada;

}
});