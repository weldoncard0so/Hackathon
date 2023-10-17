let botaoSortear = document.getElementById("btnTips");

document.addEventListener('DOMContentLoaded', function () {
    realizarSorteio();
    escutaBotoes();
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
    let letraAleatoria = Math.floor(Math.random() * palavraSorteada.length);
    for (var i = 0; i < palavraSorteada.length; i++) {
        var caractere = palavraSorteada[i];
        if(i == letraAleatoria){
            listaCaractere.push(caractere);
            caractere = "_";
        }
        
        palavraFinal += caractere;
    }

    inputPalavra.value = palavraFinal;
    randomizaLetras(listaCaractere);
}

function randomizaLetras(listaCaractere){
    let lista = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    let indiceAleatorio = Math.floor(Math.random() * listaCaractere.length);
    let letra = listaCaractere[indiceAleatorio];
    let indiceAleatorio2 = Math.floor(Math.random() * 8);
    letraSorteada = document.getElementById(indiceAleatorio2.toString());
    letra = letra.toUpperCase();
    letraSorteada.textContent = letra;
    for(var i = 0; i <= 8; i++){
            letraSorteada2 = document.getElementById(i.toString());
            if(i != indiceAleatorio2){
                let indiceAleatorio3 = Math.floor(Math.random() * lista.length);
                letraSorteada2.textContent = lista[indiceAleatorio3];
                
            }

    }

        
}

function escutaBotoes(){
    for(var i = 0; i <= 8; i++){
        let opcao = document.getElementById(i);
        opcao.addEventListener("click", function() {
            if(opcao.textContent == letraSorteada.textContent){
                alert("Acertou!");
                location.reload();
            }else{
                alert("Errou!");
            }
        });
        console.log(opcao);
}
}



});