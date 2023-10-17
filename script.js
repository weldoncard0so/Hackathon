function sortearPalavra(lista) {
    let lista[lasdkalsd]
    if (lista.length === 0) {
        console.error("A lista de palavras está vazia.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    const palavraSorteada = lista[indiceAleatorio];

    alert("Palavra sorteada: " + palavraSorteada);
}