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
const formDuracaoTotal = document.querySelector('.formulario__questao--duracaoTotal');
var quantidadeLingerie = document.querySelector('.quantidade__lingerie');
var quantidadePijama = document.querySelector('.quantidade__pijama');

function adicionaItensFixos() {
    formDuracaoTotal.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const duracaoTotal = parseInt(e.target.elements['duracaoTotal'].value);
        
        if(duracaoTotal < 4) {
            quantidadeLingerie.innerHTML = duracaoTotal + 2;
            quantidadePijama.innerHTML = 1;
        } else if (duracaoTotal < 15) {
            quantidadeLingerie.innerHTML = duracaoTotal + 2;
            quantidadePijama.innerHTML = parseInt(duracaoTotal / 2);    
        } else {
            quantidadePijama.innerHTML = 5;
            quantidadeLingerie.innerHTML = 18;
        }
    })
}

adicionaItensFixos();

/*CAPTANDO VARIAÇÔES DE TEMPERATURA SELECIONADAS E ATIVANDO INPUTS PARA DURAÇÃO DESSAS VARIAÇÕESS*/
const formVariacaoTemperatura = document.querySelector('.formulario__questao--variacaoDeTemperatura');

const t25mais = document.querySelector('#vdt--25mais');
const t20e25 = document.querySelector('#vdt--20e25');
const t15e20 = document.querySelector('#vdt--15e20');
const t10e15 = document.querySelector('#vdt--10e15');
const t5e10 = document.querySelector('#vdt--5e10');
const t0e5 = document.querySelector('#vdt--0e5');
const tNegativa = document.querySelector('#vdt--negativa');

const t25maisDuracao = document.querySelector('#vdt__selecionar--25mais');
const t20e25Duracao = document.querySelector('#vdt__selecionar--20e25');
const t15e20Duracao = document.querySelector('#vdt__selecionar--15e20');
const t10e15Duracao = document.querySelector('#vdt__selecionar--10e15');
const t5e10Duracao = document.querySelector('#vdt__selecionar--5e10');
const t0e5Duracao = document.querySelector('#vdt__selecionar--0e5');
const tNegativaDuracao = document.querySelector('#vdt__selecionar--negativa');

const linho = document.querySelector('.linho');
const seda = document.querySelector('.seda');
const cetim = document.querySelector('.cetim');
const malha = document.querySelector('.malha');
const jeans = document.querySelector('.jeans');
const couro = document.querySelector('.couro');
const veludo = document.querySelector('.veludo');
const la = document.querySelector('.la');
const pelagem = document.querySelector('.pelagem');

const camisetaMC = document.querySelector('.camisetaMC');
const camisetaML = document.querySelector('.camisetaML');
const croppedCamisa = document.querySelector('.croppedCamisa');
const bermudaShorts = document.querySelector('.bermudaShorts');
const calcaCVL = document.querySelector('.calcaCVL');
const cardigaSueter = document.querySelector('.cardigaSueter');
const jaqueta = document.querySelector('.jaqueta');
const casaco = document.querySelector('.casaco');
const sandalia = document.querySelector('.sandalia');
const bota = document.querySelector('.bota');
const meiaCalcaFina = document.querySelector('.meiaCalcaFina');
const meiaCalcaMedia = document.querySelector('.meiaCalcaMedia');
const meiaCalcaGrossa = document.querySelector('.meiaCalcaGrossa');
const gorro = document.querySelector('.gorro');
const luva = document.querySelector('.luva');
const cachecol = document.querySelector('.cachecol');

const tipoCalcaTecido = document.querySelector('.tipoCalcaTecido');
const bermudaShortsSub2 = document.querySelector('.bermudaShortsSub2');


function verificaVariacaoTemperatura() {
    formVariacaoTemperatura.addEventListener("submit", (e) => {
        e.preventDefault();

        function ativaInputs() {
            if(t25mais.checked == true) {
                t25maisDuracao.disabled = false;      
            }
            if(t20e25.checked == true) {
                t20e25Duracao.disabled = false;
            }
            if(t15e20.checked == true) {
                t15e20Duracao.disabled = false;
            }
            if(t10e15.checked == true) {
                t10e15Duracao.disabled = false;
            }
            if(t5e10.checked == true) {
                t5e10Duracao.disabled = false;
            }
            if(t0e5.checked == true) {
                t0e5Duracao.disabled = false;
            }
            if(tNegativa.checked == true) {
                tNegativaDuracao.disabled = false;
            }
        }

        function mostraTecidos() {
            if(t25mais.checked == true) {
                linho.hidden = false;
                seda.hidden = false; 
                malha.hidden = false;

                camisetaMC.hidden = false;
                bermudaShorts.hidden = false;
                tipoCalcaTecido.hidden = false;
                bermudaShortsSub2.hidden = false;
                sandalia.hidden = false;
            }
            if(t20e25.checked == true) {
                linho.hidden = false;
                seda.hidden = false;
                cetim.hidden = false;
                malha.hidden = false;
                jeans.hidden = false;

                camisetaMC.hidden = false;
                bermudaShorts.hidden = false;
                tipoCalcaTecido.hidden = false;
                bermudaShortsSub2.hidden = false;
                sandalia.hidden = false;
                meiaCalcaFina.hidden = false;
            }
            if(t15e20.checked == true) {
                jeans.hidden = false;
                couro.hidden = false;
                veludo.hidden = false;

                camisetaMC.hidden = false;
                camisetaML.hidden = false;
                cardigaSueter.hidden = false;
                jaqueta.hidden = false;
                sandalia.hidden = false;
                meiaCalcaFina.hidden = false;
                meiaCalcaMedia.hidden = false;
            }
            if(t10e15.checked == true) {
                jeans.hidden = false;
                couro.hidden = false;
                veludo.hidden = false;
                la.hidden = false;

                camisetaMC.hidden = false;
                camisetaML.hidden = false;
                cardigaSueter.hidden = false;
                jaqueta.hidden = false;
                casaco.hidden = false;
                bota.hidden = false;
                meiaCalcaMedia.hidden = false;
                cachecol.hidden = false;
            }
            if(t5e10.checked == true ) {
                jeans.hidden = false;
                couro.hidden = false;
                veludo.hidden = false;
                pelagem.hidden = false;

                camisetaML.hidden = false;
                calcaCVL.hidden = false;
                cardigaSueter.hidden = false;
                jaqueta.hidden = false;
                casaco.hidden = false;
                bota.hidden = false;
                meiaCalcaMedia.hidden = false;
                meiaCalcaGrossa.hidden = false;
                gorro.hidden = false;
                luva.hidden = false;
                cachecol.hidden = false;
            }
            if(t0e5.checked == true) {
                jeans.hidden = false;
                couro.hidden = false;
                veludo.hidden = false;
                pelagem.hidden = false;

                camisetaML.hidden = false;
                calcaCVL.hidden = false;
                cardigaSueter.hidden = false;
                jaqueta.hidden = false;
                casaco.hidden = false;
                bota.hidden = false;
                meiaCalcaMedia.hidden = false;
                meiaCalcaGrossa.hidden = false;
                gorro.hidden = false;
                luva.hidden = false;
                cachecol.hidden = false;
            }
            if(tNegativa.checked == true) {
                jeans.hidden = false;
                couro.hidden = false;
                veludo.hidden = false;
                pelagem.hidden = false;

                camisetaML.hidden = false;
                calcaCVL.hidden = false;
                cardigaSueter.hidden = false;
                jaqueta.hidden = false;
                casaco.hidden = false;
                bota.hidden = false;
                meiaCalcaGrossa.hidden = false;
                gorro.hidden = false;
                luva.hidden = false;
                cachecol.hidden = false;
            }
        }

        ativaInputs();
        mostraTecidos();
    })
}

verificaVariacaoTemperatura();



/*duracaoTemperatura*/
/*const formDuracaoTemperatura = document.querySelector('.formulario__questao--duracaoTemperatura');

function verificaDuracaoTemperatura() {
    formDuracaoTemperatura.addEventListener("submit", (e) => {
        e.preventDefault();

        console.assert.log(e);
    })
}

verificaDuracaoTemperatura();*/

/*cenario*/
/*const formCenario = document.querySelector('.formulario__questao--cenario');

function verificaCenario() {
    formCenario.addEventListener("submit", (e) => {
        e.preventDefault();

        console.assert.log(e);
    })
}

verificaCenario();*/

/*evento*/
/*const formEvento = document.querySelector('.formulario__questao--evento');

function verificaEvento() {
    formEvento.addEventListener("submit", (e) => {
        e.preventDefault();

        console.assert.log(e);
    })
}

verificaEvento();*/

/*algoMais*/
/*const formAlgoMais = document.querySelector('.formulario__questao--algoMais');

function verificaAlgoMais() {
    formAlgoMais.addEventListener("submit", (e) => {
        e.preventDefault();

        console.assert.log(e);
    })
}

verificaAlgoMais();*/