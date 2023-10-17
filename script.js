let botaoSortear = document.getElementById("btnTips");

document.addEventListener('DOMContentLoaded', function () {
    realizarSorteio();
    botaoSortear.addEventListener('click', realizarSorteio);

function realizarSorteio() {
    let lista = ['banana', 'cafe', 'chocolate','laranja','carne','ovo','pirulito','porco','cachorro','gato',
    'leao','vaca','macaco','cavalo','passaro','girafa','peixe'];
    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    let palavraSorteada = lista[indiceAleatorio];
    let inputPalavra = document.getElementById("inputPalavra");
    let img = document.getElementById("imagem");
    inputPalavra.value = palavraSorteada;
    img.setAttribute("src", "imgs/"+palavraSorteada+".png");
    fragmentarPalavra(palavraSorteada);
}

function fragmentarPalavra(palavraSorteada){
    var palavraFinal = "";
    for (var i = 0; i < palavraSorteada.length; i++) {
        var caractere = palavraSorteada[i];
        if(i%2 == 0 && i!= 0){
            caractere = "_";
        }
        
        palavraFinal += caractere;
    }

    inputPalavra.value = palavraFinal;
    
}

});