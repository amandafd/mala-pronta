/*NOME*/ 
var nome = document.querySelector('#nome');
var captarNome = document.querySelector('#btn__proximo--nome');

var nomeMala = document.querySelector('.mala__nome');
var textoInicialMala = document.querySelector('.mala__textoInicial');

captarNome.addEventListener('click', function(e) {
    nomeMala.innerHTML = nome.value;

    textoInicialMala.innerHTML = "Continue preenchendo o questionário para completar sua mala."

    e.preventDefault();
});


/*LAVAR ROUPA:
Descobrir como captar esse input corretamente. Pode diminuir a quantidade de itens dependendo da reposta*/

/*var lavarRoupa = document.querySelector('input[name="lavarRoupa"]:checked').value;
var capturarlavarRoupa = document.querySelector('#btn__proximo--lavarRoupa');


capturarlavarRoupa.addEventListener('click', function(e) {
    if(lavarRoupa === "não"){
        alert("Você não precisa lavar roupa");
    } else if(lavarRoupa === "sim") {
        alert("Você precisa lavar roupa");
    }

    e.preventDefault();
});*/



/*Capturando a quantidade total de dias da viagem*/
var duracaoTotal = document.querySelector('#duracaoTotal');
var capturarDuracaoTotal = document.querySelector('#btn__proximo--duracaoTotal');

capturarDuracaoTotal.addEventListener('click', function(e) {
    alert("Sua viagem vai durar " + duracaoTotal.value + " dias");
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