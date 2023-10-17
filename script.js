let botaoSortear = document.getElementById("btnTips");

document.addEventListener('DOMContentLoaded', function () {
    realizarSorteio();
    botaoSortear.addEventListener('click', realizarSorteio);

function realizarSorteio() {
    let lista = ['banana', 'cafe', 'chocolate','laranja','carne','ovo','pirulito','porco','cachorro','gato',
'leao','vaca','macaco','cavalo','passaro','girafa','peixe'];
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    const palavraSorteada = lista[indiceAleatorio];
    let inputPalavra = document.getElementById("inputPalavra");
    inputPalavra.value = palavraSorteada;

}
});