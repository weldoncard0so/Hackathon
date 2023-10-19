document.addEventListener('DOMContentLoaded', function () {
    let audio = new Audio('./audios/fundo.mp3');
    audio.volume = 0.5;
    audio.loop = true;

    document.addEventListener('click', function playAudio() {
        audio.play();
        document.removeEventListener('click', playAudio);
    });

    let vidas = 3;
    let pontuacao = 0;

    realizarSorteio();
    escutaBotoes();

    function realizarSorteio() {
        let lista = ['banana', 'cafe', 'chocolate', 'laranja', 'ovo', 'pirulito', 'cachorro', 'gato',
            'leao', 'vaca', 'macaco', 'cavalo', 'passaro', 'girafa', 'peixe'];
        let indiceAleatorio = Math.floor(Math.random() * lista.length);
        let palavraSorteada = lista[indiceAleatorio];
        let inputPalavra = document.getElementById("inputPalavra");
        let img = document.getElementById("imagem");
        inputPalavra.value = palavraSorteada;
        img.setAttribute("src", "imgs/" + palavraSorteada + ".png");
        fragmentarPalavra(palavraSorteada);
    }

    function fragmentarPalavra(palavraSorteada) {
        var palavraFinal = "";
        let listaCaractere = [];
        let letraAleatoria = Math.floor(Math.random() * palavraSorteada.length);
        for (var i = 0; i < palavraSorteada.length; i++) {
            var caractere = palavraSorteada[i];
            if (i == letraAleatoria) {
                listaCaractere.push(caractere);
                caractere = "_";
            }

            palavraFinal += caractere;
        }

        inputPalavra.value = palavraFinal;
        randomizaLetras(listaCaractere);
    }

    function randomizaLetras(listaCaractere) {
        let lista = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        let indiceAleatorio = Math.floor(Math.random() * listaCaractere.length);
        let letra = listaCaractere[indiceAleatorio];
        let indiceAleatorio2 = Math.floor(Math.random() * 5);
        letraSorteada = document.getElementById(indiceAleatorio2.toString());
        letra = letra.toUpperCase();
        letraSorteada.textContent = letra;

        lista.splice(lista.indexOf(letra), 1);

        for (var i = 0; i <= 5; i++) {
            letraSorteada2 = document.getElementById(i.toString());
            if (i != indiceAleatorio2) {
                let indiceAleatorio3 = Math.floor(Math.random() * lista.length);
                letraSorteada2.textContent = lista[indiceAleatorio3];
                lista.splice(indiceAleatorio3, 1);
            }
        }
    }

    function acumularPontuacao() {
        pontuacao++;
        document.getElementById("points").textContent = pontuacao;
    }

    function escutaBotoes() {
        for (var i = 0; i <= 5; i++) {
            let opcao = document.getElementById(i);
            opcao.addEventListener("click", function () {
                if (opcao.textContent == letraSorteada.textContent) {
                    mostrarAlerta();
                    acumularPontuacao();
                    if (vidas < 3) {
                        vidas++;
                        restaurarCoracao();
                    }
                } else {
                    vidas--;
                    removerCoracao();
                    bloquearLetraEscolhida(opcao);
                    if (vidas === 0) {
                        resetarJogo();
                    }
                    ocultarOpcao(opcao);
                }
            });
        }
    }

    function restaurarCoracao() {
        let coracoes = document.querySelectorAll('.lifes');
        coracoes[vidas - 1].style.display = 'block';
    }

    function removerCoracao() {
        let coracoes = document.querySelectorAll('.lifes');
        coracoes[vidas].style.display = 'none';
    }

    function bloquearLetraEscolhida(letraEscolhidaElement) {
        letraEscolhidaElement.style.backgroundColor = "#ccc";
        letraEscolhidaElement.removeEventListener("click", null);
    }

    function ocultarOpcao(opcao) {
        opcao.style.display = 'none';
    }

    function mostrarAlerta() {
        let alerta = document.getElementById("alerta");
        let backgroundDesfocado = document.getElementById("background-desfocado");
        backgroundDesfocado.classList.add("desfocado");
    
        let palavraAtual = inputPalavra.value;
        let letraCorreta = letraSorteada.textContent;
        let palavraNova = "";
    
        for (let i = 0; i < palavraAtual.length; i++) {
            if (palavraAtual[i] === "_") {
                palavraNova += letraCorreta;
            } else {
                palavraNova += palavraAtual[i];
            }
        }
    
        inputPalavra.value = palavraNova;
    
        inputPalavra.classList.add('pulse');
    
        alerta.style.display = "block";
    
        setTimeout(function () {
            backgroundDesfocado.classList.remove("desfocado");
            alerta.style.display = "none";
    
            inputPalavra.classList.remove('pulse');
    
            resetarLetrasBloqueadas();
            realizarSorteio();
        }, 5000);
    }

    function resetarJogo() {
        document.getElementById("alertaPerdeu").style.display = "block";
    
        setTimeout(function () {
            location.reload();
        }, 4000);
    }

function resetarLetrasBloqueadas() {
    let letras = document.querySelectorAll('.opcoes');
    letras.forEach(letra => {
        letra.style.backgroundColor = "";
        letra.style.display = 'block';
        letra.addEventListener("click", function () {
            if (letra.textContent == letraSorteada.textContent) {
                mostrarAlerta("Acertou!");
            } else {
                bloquearLetraEscolhida(letra);
            }
        });
    });
}
});
