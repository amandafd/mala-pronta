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
var variacaoDeTemperatura = document.querySelectorAll('.variacaoDeTemperatura');
var capturarVariacaoDeTemperatura = document.querySelector('#btn__proximo--variacaoDeTemperatura');
var variacaoSelecionada = [];

var tecidos = document.querySelector('.mala__item--tecidosSugeridos');

var t25mais = document.querySelector('.formulario__reposta--numberVarios25mais');
var t20e25 = document.querySelector('.formulario__reposta--numberVarios20e25');
var t15e20 = document.querySelector('.formulario__reposta--numberVarios15e20');
var t10e15 = document.querySelector('.formulario__reposta--numberVarios10e15');
var t5e10 = document.querySelector('.formulario__reposta--numberVarios5e10');
var t0e5 = document.querySelector('.formulario__reposta--numberVarios0e5');
var tNegativa = document.querySelector('.formulario__reposta--numberVariosNegativa');


function verificaVariacaoDeTemperatura() {
    capturarVariacaoDeTemperatura.addEventListener('click', function(e) {
        for(var i = 0; i < variacaoDeTemperatura.length; i++) {
            if(variacaoDeTemperatura[i].checked == true) {
                variacaoSelecionada.push(variacaoDeTemperatura[i].value);
            }
        }
            
        function mostraTecidosAtivaInput() {
            function umaTemperatura () {
                if(variacaoSelecionada.includes("25ºC ou mais")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha";
                    t25mais.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans";
                    t20e25.disabled = false;
                } else if(variacaoSelecionada.includes("15ºC e 20ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo leve";
                    t15e20.disabled = false;
                } else if(variacaoSelecionada.includes("10ºC e 15ºC")) {
                    tecidos.innerHTML = "lã mais leve, jeans, veludo e couro";
                    t10e15.disabled = false;
                } else if(variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "lã, jeans, pelos, couro, veludo";
                    t5e10.disabled = false;
                } else if(variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "lã, jeans, pelos, couro, veludo";
                    t0e5.disabled = false;
                } else if(variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "lã, jeans, pelos, couro, veludo";
                    tNegativa.disabled = false;
                } /*Verificar se precisa adicionar mais tecidos*/
            }
            
            function variasTemperaturas() {
                if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans";

                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha para os dias amenos. Para os dias mais frios complementar com peças em jeans e  veludo leve";
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("10ºC e 15ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha para os dias amenos. Para os dias mais frios complementar com peças em lã leve,  jeans, veludo e couro";
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha para os dias amenos. Para os dias mais frios complementar com peças em lã, jeans, pelos, couro e veludo";
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha para os dias amenos. Para os dias mais frios complementar com peças em lã, jeans, pelos, couro e veludo";
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha para os dias amenos. Para os dias mais frios complementar com peças em lã, jeans, pelos, couro e veludo";
                } /*continuar combinando as outras temperaturas*/
            }
            

            if (variacaoSelecionada.length < 2) {
                umaTemperatura();
            } else {
                variasTemperaturas();
            }
        }
        
        mostraTecidosAtivaInput();
        e.preventDefault();
    });
}

verificaVariacaoDeTemperatura();

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