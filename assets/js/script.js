/*CAPTANDO NOME*/ 
var nome = document.querySelector('#nome');
var captarNome = document.querySelector('#btn__proximo--nome');

var nomeMala = document.querySelector('.mala__nome');
var textoInicialMala = document.querySelector('.mala__textoInicial');

captarNome.addEventListener('click', function(e) {
    nomeMala.innerHTML = nome.value;

    textoInicialMala.innerHTML = "Continue preenchendo o questionário para completar sua mala."

    e.preventDefault();
});

/*Capturando a quantidade total de dias da viagem*/
var duracaoTotal = document.querySelector('#duracaoTotal');
var capturarDuracaoTotal = document.querySelector('#btn__proximo--duracaoTotal');

var quantidadeLingerie = document.querySelector('.quantidade__lingerie');

capturarDuracaoTotal.addEventListener('click', function(e) {
    if (duracaoTotal.value <= 7) {
        quantidadeLingerie.innerHTML = parseInt(duracaoTotal.value) + 2;
    } else if (duracaoTotal.value <= 20) {
        quantidadeLingerie.innerHTML = parseInt(duracaoTotal.value) + 3;
    } else if(duracaoTotal.value > 35) {
        quantidadeLingerie.innerHTML = parseInt(duracaoTotal.value) + 4;
    }
    
    e.preventDefault();
});

/*variacaoDeTemperatura*/
var variacaoDeTemperatura = document.querySelector('input[name="variacaoDeTemperatura"]:checked').value;
var capturarVariacaoDeTemperatura = document.querySelector('#btn__proximo--variacaoDeTemperatura');

capturarVariacaoDeTemperatura.addEventListener('click', function(e) {
    alert("A temperatura vai permanecer entre" + variacaoDeTemperatura);
    
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