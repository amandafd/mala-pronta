/*CAPTANDO FORMS*/
const formNome = document.querySelector('.formulario__questao--nome');
const formDuracaoTotal = document.querySelector('.formulario__questao--duracaoTotal');
const formVariacaoTemperatura = document.querySelector('.formulario__questao--variacaoDeTemperatura');
const formDuracaoTemperatura = document.querySelector('.formulario__questao--duracaoTemperatura')
const formCenario = document.querySelector('.formulario__questao--cenario');
const formEvento = document.querySelector('.formulario__questao--evento');
const formAlgoMais = document.querySelector('.formulario__questao--algoMais');

/*CAPTANDO INPUTS*/
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

const agua = document.querySelector('#checkbox--agua');
const neve = document.querySelector('#checkbox--neve');
const montanha = document.querySelector('#checkbox--montanha');
const cidade = document.querySelector('#checkbox--cidade');

const nada = document.querySelector('.checkbox--nada');
const balada = document.querySelector('.checkbox--balada');
const fantasia = document.querySelector('.checkbox--fantasia');
const formal = document.querySelector('.checkbox--formal');

/*CAPTANDO ITENS ESCONDIDOS*/
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
const camisa = document.querySelector('.camisa'); 
const shorts = document.querySelector('.shorts'); 
const calcaCVL = document.querySelector('.calcaCVL'); 
const cardiga = document.querySelector('.cardiga'); 
const jaqueta = document.querySelector('.jaqueta'); 
const casaco = document.querySelector('.casaco'); 

const tipoCalcaTecido = document.querySelector('.tipoCalcaTecido'); 
const shortsSubS = document.querySelector('.shortsSubS');

const sandalia = document.querySelector('.sandalia'); 
const bota = document.querySelector('.bota');

const cachecol = document.querySelector('.cachecol'); 
const meiaCalcaFina = document.querySelector('.meiaCalcaFina'); 
const meiaCalcaMedia = document.querySelector('.meiaCalcaMedia'); 
const meiaCalcaGrossa = document.querySelector('.meiaCalcaGrossa'); 
const gorro = document.querySelector('.gorro'); 
const luva = document.querySelector('.luva'); 

/*CAPTANDO TEXTO QUE SERÃO SUBSTITUIDO*/
const nomeMala = document.querySelector('.mala__nome');
const textoInicialMala = document.querySelector('.mala__textoInicial');

/*CAPTANDO QUANTIDADE DE ITENS*/
const quantidadeLingerie = document.querySelector('.quantidade__lingerie'); 
const quantidadeMeia = document.querySelector('.quantidade__meia'); 
const quantidadePijama = document.querySelector('.quantidade__pijama'); 
const quantidadeVestidoMacacao = document.querySelector('.quantidade__vestidoMacacao'); 
const quantidadePtCimaSubV = document.querySelector('.quantidade__ptCimaSub'); 
const quantidadePtBaixoSubV = document.querySelector('.quantidade__ptBaixoSub'); 
const quantidadeCamisetaMC = document.querySelector('.quantidade__camisetaMC'); 
const quantiadeCamisetaML = document.querySelector('.quantidade__camisetaML'); 
const quantidadeCamisa = document.querySelector('.quantidade__camisa'); 
const quantidadeShots = document.querySelector('.quantidade__shorts'); 
const quantidadeCalcaTecido = document.querySelector('.quantidade__calcaTecido'); 
const quantidadeCalcaJeans = document.querySelector('.quantidade__calcaJeans'); 
const quantidadeCalcaCVL = document.querySelector('.quantidade__calcaCVL'); 
const quantidadeSaia = document.querySelector('.quantidade__saia'); 
const quantidadeMoletom = document.querySelector('.quantidade__moletom'); 
const quantidadeCardiga = document.querySelector('.quantidade__cardiga'); 
const quantidadeJaqueta = document.querySelector('.quantidade__jaqueta'); 
const quantidadeCasaco = document.querySelector('.quantidade__casaco'); 

const quantidadeChinelo = document.querySelector('.quantidade__chinelo'); 
const quantidadeSandalia = document.querySelector('.quantidade__sandalia'); 
const quantidadeTenis = document.querySelector('.quantidade__tenis'); 

const quantidadeOculosSol = document.querySelector('.quantidade__oculosSol'); 
const quantidadeLenco = document.querySelector('.quantidade__lenco'); 
const quantidadeCachecol = document.querySelector('.quantidade__cachecol'); 
const quantidadeMeiaCalcaFina = document.querySelector('.quantidade__meiaCalcaFina'); 
const quantidadeMeiaCalcaMedia = document.querySelector('.quantidade__meiaCalcaMedia'); 
const quantidadeMeiaCalcaGrossa = document.querySelector('.quantidade__meiaCalcaGrossa'); 
const quantidadeGorro = document.querySelector('.quantidade__gorro'); 
const quantidadeLuva = document.querySelector('.quantidade__luva'); 

const quantidadeToalhaBanho = document.querySelector('.quantidade__toalhaBanho'); 
const quantidadeToalhaPiscina = document.querySelector('.quantidade__toalhaPiscina'); 


/*CAPTANDO NOME*/ 
/*function mostraNome() {
    formNome.addEventListener("submit", (e) => {
        e.preventDefault();

        nomeMala.innerHTML = e.target.elements['nome'].value
        textoInicialMala.innerHTML = "Continue preenchendo o questionário para completar sua mala."
    });
}

mostraNome();*/

formNome.onsubmit = function(e) {
    e.preventDefault()
    
    nomeMala.innerHTML = "Amandinha";
}
/*formNome.onsubmit = function(e) {
    e.preventDefault();

    console.log(this.nome.value);

    nomeMala.innerHTML = {nome: this.nome.value};
    textoInicialMala.innerHTML = "Continue preenchendo o questionário para completar sua mala.";
}*/

/*CAPTANDO DURAÇÃO TOTAL DA VIAGEM E FAZENDO CALCULOS DOS ITENS COM BASE APENAS NESSA VARIÁVEL*/
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

/*CAPTANDO VARIAÇÔES DE TEMPERATURA SELECIONADAS*/
function verificaVariacaoTemperatura() {
    formVariacaoTemperatura.addEventListener("submit", (e) => {
        e.preventDefault();

        function ativaInputs() {
            if(t25mais.checked == true) {
                t25maisDuracao.disabled = false; 
                t25maisDuracao.required = true;  
            }
            if(t20e25.checked == true) {
                t20e25Duracao.disabled = false;
                t20e25Duracao.required = true;  
            }
            if(t15e20.checked == true) {
                t15e20Duracao.disabled = false;
                t15e20Duracao.required = true;  
            }
            if(t10e15.checked == true) {
                t10e15Duracao.disabled = false;
                t10e15Duracao.required = true;  
            }
            if(t5e10.checked == true) {
                t5e10Duracao.disabled = false;
                t5e10Duracao.required = true;  
            }
            if(t0e5.checked == true) {
                t0e5Duracao.disabled = false;
                t0e5Duracao.required = true;  
            }
            if(tNegativa.checked == true) {
                tNegativaDuracao.disabled = false;
                tNegativaDuracao.required = true;  
            }
        }

        function mostraTecidos() {
            if(t25mais.checked == true) {
                linho.hidden = false;
                seda.hidden = false; 
                malha.hidden = false;

                camisetaMC.hidden = false;
                shorts.hidden = false;
                tipoCalcaTecido.hidden = false;
                shortsSubS.hidden = false;
                sandalia.hidden = false;
            }
            if(t20e25.checked == true) {
                linho.hidden = false;
                seda.hidden = false;
                cetim.hidden = false;
                malha.hidden = false;
                jeans.hidden = false;

                camisetaMC.hidden = false;
                shorts.hidden = false;
                tipoCalcaTecido.hidden = false;
                shortsSubS.hidden = false;
                sandalia.hidden = false;
                meiaCalcaFina.hidden = false;
            }
            if(t15e20.checked == true) {
                jeans.hidden = false;
                couro.hidden = false;
                veludo.hidden = false;

                camisetaMC.hidden = false;
                camisetaML.hidden = false;
                cardiga.hidden = false;
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
                cardiga.hidden = false;
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
                cardiga.hidden = false;
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
                cardiga.hidden = false;
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
                cardiga.hidden = false;
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

/*CAPTANDO VARIAÇÔES DE TEMPERATURA SELECIONADAS*/
function verificaDuracaoVariacaoTemperatura() {
    formDuracaoTemperatura.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log();
    })
}

/*cenario*/
function verificaCenario() {
    formCenario.addEventListener("submit", (e) => {
        e.preventDefault();

        if(agua.checked == true) {
            console.log("Água");
        }
        if(neve.checked == true) {
            console.log("Neve");
        }
        if(montanha.checked == true) {
            console.log("Montanha");
        }
    })
}

verificaCenario();

/*evento*/
function verificaEvento() {
    formEvento.addEventListener("submit", (e) => {
        e.preventDefault();

        console.assert.log(e);
    })
}

verificaEvento();

/*algoMais*/
function verificaAlgoMais() {
    formAlgoMais.addEventListener("submit", (e) => {
        e.preventDefault();

        textoInicialMala.innerHTML = "Tudo certo! Verifique sua mala pronta abaixo.";
    })
}

verificaAlgoMais();