document.addEventListener('DOMContentLoaded', function () {
    // Função para chamar a função de sorteio
    function realizarSorteio() {
        const lista = ['maça', 'banana', 'cafe', 'bolinho', 'suco', 'chocolate','laranja','ovo','pirulito'];
        const inputPalavraSorteada = document.getElementById("palavraSorteada");

        // Chama a função de sorteio e atribui o resultado ao valor do input
        inputPalavraSorteada.value = sortearPalavra(lista);
    }

    // Adiciona um ouvinte de evento ao botão para chamar a função realizarSorteio
    const botaoSortear = document.getElementById("btnTips");
    botaoSortear.addEventListener('click', realizarSorteio);

function sortearPalavra(lista) {
    if (lista.length === 0) {
        console.error("A lista de palavras está vazia.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    const palavraSorteada = lista[indiceAleatorio];

    return palavraSorteada;
}
});