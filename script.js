let botaoSortear = document.getElementById("btnTips");

document.addEventListener('DOMContentLoaded', function () {
    realizarSorteio();
    botaoSortear.addEventListener('click', realizarSorteio);

function realizarSorteio() {
    let lista = ['banana', 'cafe', 'chocolate','laranja','ovo','pirulito','cachorro','gato',
    'leao','vaca','macaco','cavalo','passaro','girafa','peixe'];
    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    let palavraSorteada = lista[indiceAleatorio];
    let inputPalavra = document.getElementById("inputPalavra");
    let img = document.getElementById("imagem");
    inputPalavra.value = palavraSorteada;
    img.setAttribute("src", "imgs/"+palavraSorteada+".png");
    img.onerror = function() {
        img.setAttribute("src", "imgs/"+palavraSorteada+".jpg");
    };
    fragmentarPalavra(palavraSorteada);
}

function fragmentarPalavra(palavraSorteada){
    var palavraFinal = "";
    let listaCaractere = [];
    for (var i = 0; i < palavraSorteada.length; i++) {
        var caractere = palavraSorteada[i];
        if(i%2 == 0 && i!= 0){
            listaCaractere.push(caractere);
            caractere = "_";
        }
        
        palavraFinal += caractere;
    }

    inputPalavra.value = palavraFinal;
}

function randomizaLetras(){
    let indiceAleatorio = Math.floor(Math.random() * listaCaractere.length);
    let letra = listaCaractere[indiceAleatorio];
    let indiceAleatorio2 = Math.floor(Math.random() * 8);
    

}



});