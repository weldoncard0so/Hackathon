document.addEventListener("DOMContentLoaded", function() {
    realizarSorteio();
});

let palavraSorteada;

function realizarSorteio() {
    let lista = ['banana', 'cafe', 'chocolate', 'laranja', 'ovo', 'pirulito', 'cachorro', 'gato',
        'leao', 'vaca', 'macaco', 'cavalo', 'passaro', 'girafa', 'peixe'];
    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    palavraSorteada = lista[indiceAleatorio];
    let inputPalavra = document.getElementById("inputPalavra");
    let img = document.getElementById("imagem");

    let { palavraSorteadaEmbaracada, inputComLetras } = embaralharLetras(palavraSorteada);

    inputPalavra.value = ""; 
    inputPalavra.disabled = true;
    img.setAttribute("src", "imgs/" + palavraSorteada + ".png");

    distribuirLetrasNosBotoes(palavraSorteadaEmbaracada);
}


function embaralharLetras(palavra) {
    let letras = palavra.split('');

    for (let i = letras.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letras[i], letras[j]] = [letras[j], letras[i]];
    }

    let palavraEmbaracada = letras.join('');
    let inputComLetras = letras.join(' ');

    return { palavraSorteadaEmbaracada: palavraEmbaracada, inputComLetras: inputComLetras };
}

function distribuirLetrasNosBotoes(palavraSorteadaEmbaracada) {
    let letrasEmbaracadas = palavraSorteadaEmbaracada.split('');
    
    for (let i = letrasEmbaracadas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letrasEmbaracadas[i], letrasEmbaracadas[j]] = [letrasEmbaracadas[j], letrasEmbaracadas[i]];
    }

    let meio = Math.ceil(letrasEmbaracadas.length / 2);
    let primeiraFileira = letrasEmbaracadas.slice(0, meio);
    let segundaFileira = letrasEmbaracadas.slice(meio);

    adicionarBotoesNaFileira(primeiraFileira, "botoes-container-1");
    adicionarBotoesNaFileira(segundaFileira, "botoes-container-2");
}

function adicionarBotoesNaFileira(letras, containerId) {
    let botoesContainer = document.getElementById(containerId);
    botoesContainer.innerHTML = ""; 

    for (let letra of letras) {
        let botao = document.createElement("button");
        botao.className = 'opcoes';
        botao.textContent = letra;
        botao.addEventListener("click", function() {
            adicionarLetra(this.textContent);
            this.style.display = "none";
        });
        botoesContainer.appendChild(botao);
    }
}

function adicionarLetra(letra) {
    let inputPalavra = document.getElementById("inputPalavra");
    inputPalavra.value += letra;

    if (inputPalavra.value === palavraSorteada) {
        alert("Parabéns, você acertou!");
    }
}

function apagarUltimaLetra(event) {
    event.preventDefault();

    let inputPalavra = document.getElementById("inputPalavra");
    let ultimaLetra = inputPalavra.value.slice(-1);
    inputPalavra.value = inputPalavra.value.slice(0, -1);

    let botoesContainers = document.querySelectorAll(".opcoes-div");
    for (let container of botoesContainers) {
        for (let botao of container.children) {
            if (botao.textContent === ultimaLetra) {
                botao.style.display = "inline-block";
                break;
            }
        }
    }
}
