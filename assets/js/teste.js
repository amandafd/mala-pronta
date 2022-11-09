/*CAPTANDO NOME*/ 
const formNome = document.querySelector('.formulario__questao--nome');
const nomeMala = document.querySelector('.mala__nome');
const textoInicialMala = document.querySelector('.mala__textoInicial');

function mostraNome() {
    formNome.addEventListener("submit", (e) => {
        e.preventDefault();

        nomeMala.innerHTML = e.target.elements['nome'].value
        textoInicialMala.innerHTML = "Continue preenchendo o questionário para completar sua mala."
    });
}

mostraNome();






/*CAPTANDO DURAÇÃO TOTAL DA VIAGEM E FAZENDO CALCULOS DOS ITENS COM BASE APENAS NESSA VARIÁVEL*/
/*var duracaoTotal = document.querySelector('.formulario__questao--duracaoTotal');


duracaoTotal.addEventListener("submit", (e) => {
    e.preventDefault();


});

var quantidadeLingerie = document.querySelector('.quantidade__lingerie');
var quantidadePijama = document.querySelector('.quantidade__pijama');
function adicionaItensFixos() {
    capturarDuracaoTotal.addEventListener('click', function(e) {
        if (duracaoTotal.value < 3) {
            quantidadeLingerie.innerHTML = parseInt(duracaoTotal.value) + 2
            quantidadePijama.innerHTML = 1;
        } else if(duracaoTotal.value < 15) {
        quantidadeLingerie.innerHTML = parseInt(duracaoTotal.value) + 2;
        quantidadePijama.innerHTML = parseInt(parseInt(duracaoTotal.value) / 3);
    } else {
        quantidadePijama.innerHTML = 4;
        quantidadeLingerie.innerHTML = 18;
    }

    
        e.preventDefault();
    });
}

adicionaItensFixos();*/