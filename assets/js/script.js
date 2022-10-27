var nome = document.querySelector('#nome');
var capturarNome = document.querySelector('#btn__proximo--nome');

capturarNome.addEventListener('click', function(e) {
    alert("Olá " + nome.value);

    e.preventDefault();
});

/*lavarRoupa*/

var duracaoTotal = document.querySelector('#duracaoTotal');
var capturarDuracaoTotal = document.querySelector('#btn__proximo--duracaoTotal');

capturarDuracaoTotal.addEventListener('click', function(e) {
    alert("Sua viagem vai durar " + duracaoTotal.value + " dias");
    e.preventDefault();
});

/*variacaoDeTemperatura*/

/*var duracaoTemperatura = document.querySelector('#duracaoTemperatura');
var capturarDuracaoTemperatura = document.querySelector('#btn__proximo--duracaoTemperatura');

capturarDuracaoTemperatura.addEventListener('click', function(e) {
    alert("Vai permanecer entre " +  + " por " + duracaoTemperatura.value + " dias");

    e.preventDefault();
});*/

/*cenario*/

/*evento*/

var algoMais = document.querySelector('#algoMais');
var capturarAlgoMais = document.querySelector('#btn__proximo--algoMais');

capturarAlgoMais.addEventListener('click', function(e) {
    alert("Não esqueça seu item extra: " + algoMais.value);
})