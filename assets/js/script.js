/*CAPTANDO NOME*/ 
var nome = document.querySelector('#nome');
var captarNome = document.querySelector('#btn__proximo--nome');

var nomeMala = document.querySelector('.mala__nome');
var textoInicialMala = document.querySelector('.mala__textoInicial');
function mostraNome(){
    captarNome.addEventListener('click', function(e) {
        nomeMala.innerHTML = nome.value;

        textoInicialMala.innerHTML = "Continue preenchendo o questionário para completar sua mala."

        e.preventDefault();
    });
}

mostraNome();

/*CAPTANDO DURAÇÃO TOTAL DA VIAGEM E FAZENDO CALCULOS DOS ITENS COM BASE APENAS NESSA VARIÁVEL*/
var duracaoTotal = document.querySelector('#duracaoTotal');
var capturarDuracaoTotal = document.querySelector('#btn__proximo--duracaoTotal');

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

adicionaItensFixos();

/*variacaoDeTemperatura*/
var variacaoDeTemperatura = document.querySelectorAll('input[name="variacaoDeTemperatura"]:checked').value;
var capturarVariacaoDeTemperatura = document.querySelector('#btn__proximo--variacaoDeTemperatura');

capturarVariacaoDeTemperatura.addEventListener('click', function(e) {
    alert("A temperatura vai permanecer entre " + variacaoDeTemperatura.value);
    
    e.preventDefault();
});

/*duracaoTemperatura*/
/*var duracaoTemperatura = document.querySelector('#duracaoTemperatura');
var capturarDuracaoTemperatura = document.querySelector('#btn__proximo--duracaoTemperatura');

capturarDuracaoTemperatura.addEventListener('click', function(e) {
    alert("Vai permanecer entre " +  + " por " + duracaoTemperatura.value + " dias");

    e.preventDefault();
});*/

/*cenario*/

/*evento*/

/*algoMais*/
var algoMais = document.querySelector('#algoMais');
var capturarAlgoMais = document.querySelector('#btn__proximo--algoMais');

capturarAlgoMais.addEventListener('click', function(e) {
    alert("Não esqueça seu item extra: " + algoMais.value);
})

/*---PREENCHENDO A MALA---*/
/*NOME*/





/*--- ---*/