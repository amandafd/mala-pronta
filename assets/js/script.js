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
                    tecidos.innerHTML = "algodão, linho, seda e malha";
                    t25mais.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans";
                    t20e25.disabled = false;
                } else if(variacaoSelecionada.includes("15ºC e 20ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo e lã leve";
                    t15e20.disabled = false;
                } else if(variacaoSelecionada.includes("10ºC e 15ºC")) {
                    tecidos.innerHTML = "algodão, lã, jeans, veludo e couro";
                    t10e15.disabled = false;
                } else if(variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, lã, jeans, pelagem, couro e veludo";
                    t5e10.disabled = false;
                } else if(variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, lã, jeans, pelagem, couro e veludo";
                    t0e5.disabled = false;
                } else if(variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, lã, jeans, pelagem, couro e veludo";
                    tNegativa.disabled = false;
                } /*Verificar se precisa adicionar mais tecidos*/
            }
            
            function duasTemperaturas() {
                if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha para os dias amenos. Para os dias mais frios complementar com peças em jeans e  veludo leve";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("10ºC e 15ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha para os dias amenos. Para os dias mais frios complementar com peças em lã leve,  jeans, veludo e couro";
                    t25mais.disabled = false;
                    t10e15.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha para os dias amenos. Para os dias mais frios complementar com peças em lã, jeans, pelos, couro e veludo";
                    t25mais.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha para os dias amenos. Para os dias mais frios complementar com peças em lã, jeans, pelos, couro e veludo";
                    t25mais.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, malha para os dias amenos. Para os dias mais frios complementar com peças em lã, jeans, pelos, couro e veludo";
                    t25mais.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios complementar com veludo e lã leve";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios lã, veludo e couro";
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios lã, veludo, couro e pelagem";
                    t20e25.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios lã, veludo, couro e pelagem";
                    t20e25.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios lã, veludo, couro e pelagem";
                    t20e25.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã leve e couro";
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML =  "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML =  "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML =  "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML =  "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML =  "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t10e15.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML =  "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                }  else if (variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML =  "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                }  else if (variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML =  "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                }   
            }
            
            function tresTemperaturas() {
                if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios complementar com veludo e lã leve";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios complementar com veludo, lã e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios complementar com veludo, lã, pelagem e couro ";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios complementar com veludo, lã, pelagem e couro ";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios complementar com veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios, complementas com veludo, lã e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios, complementas com veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios, complementas com veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios, complementas com veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios, complementas com veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios, complementas com veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios, complementas com veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t10e15.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios, complementas com veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios, complementas com veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frios, complementas com veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios complementar com veludo, lã e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios complementar com veludo, lã, pelagem e couro"
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios complementar com veludo, lã, pelagem e couro"
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans. Para os dias mais frios complementar com veludo, lã, pelagem e couro"
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frio complementar com veludo, lã, pelagem e couro"
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frio complementar com veludo, lã, pelagem e couro"
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false; 
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frio complementar com veludo, lã, pelagem e couro"
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frio complementar com veludo, lã, pelagem e couro"
                    t20e25.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frio complementar com veludo, lã, pelagem e couro"
                    t20e25.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha e jeans. Para os dias mais frio complementar com veludo, lã, pelagem e couro"
                    t20e25.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } 
            }

            function quatroTemperaturas() {
                if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo e lã";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if(variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if(variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                } else if(variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                } else if(variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if(variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if(variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if(variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if(variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                }
            }

            function cincoTemperaturas() {
                if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;                   
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;                    
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, jeans, veludo, lã, pelagem e couro";
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                }
            }

            function seisTemperaturas() {
                if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                } else if (variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                }
            }
            
            function seteTemperaturas() {
                if (variacaoSelecionada.includes("25ºC ou mais") && variacaoSelecionada.includes("20ºC e 25ºC") && variacaoSelecionada.includes("15ºC e 20ºC") && variacaoSelecionada.includes("10ºC e 15ºC") && variacaoSelecionada.includes("5ºC e 10ºC") && variacaoSelecionada.includes("0ºC e 5ºC") && variacaoSelecionada.includes("Abaixo de 0ºC")) {
                    tecidos.innerHTML = "algodão, linho, seda, cetim, malha, jeans, veludo, lã, pelagem e couro";
                    t25mais.disabled = false;
                    t20e25.disabled = false;
                    t15e20.disabled = false;
                    t10e15.disabled = false;
                    t5e10.disabled = false;
                    t0e5.disabled = false;
                    tNegativa.disabled = false;
                }
            }

            if (variacaoSelecionada.length > 0 && variacaoSelecionada.length < 2) {
                umaTemperatura();
            } else if (variacaoSelecionada.length > 1 && variacaoSelecionada.length < 3) {
                duasTemperaturas();
            } else if (variacaoSelecionada.length > 2 && variacaoSelecionada.length < 4) {
                tresTemperaturas();
            } else if (variacaoSelecionada.length > 3 && variacaoSelecionada.length < 5) {
                quatroTemperaturas();
            } else if (variacaoSelecionada.length > 4 && variacaoSelecionada.length < 6) {
                cincoTemperaturas();
            } else if(variacaoSelecionada.length > 5 && variacaoSelecionada.length < 7) {
                seisTemperaturas();
            } else if(variacaoSelecionada.length > 6 && variacaoSelecionada.length < 8) {
                seteTemperaturas();
            }
        }
        
        mostraTecidosAtivaInput();
        e.preventDefault();
    });
}

verificaVariacaoDeTemperatura();

/*duracaoTemperatura*/
var capturarDuracaoTemperatura = document.querySelector('#btn__proximo--duracaoTemperatura');

/*function verificaDuracaoTemperatura() {
    capturarDuracaoTemperatura.addEventListener('click', function(e) {
        if()
    })
}*/

/*verificaDuracaoTemperatura();*/

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