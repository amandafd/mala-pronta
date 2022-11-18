/*CAPTANDO FORMS*/
const formDuracaoTemperatura = document.querySelector('.formulario__questao--duracaoTemperatura');
const formCenario = document.querySelector('.formulario__questao--cenario');
const formEvento = document.querySelector('.formulario__questao--evento');
const formAlgoMais = document.querySelector('.formulario__questao--algoMais');

/*CAPTANDO INPUTS*/
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

/*CAPTANDO QUANTIDADE DE ITENS*/ 
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




/*CAPTANDO VARIAÇÔES DE TEMPERATURA SELECIONADAS*/
const formVariacaoTemperatura = document.querySelector('.formulario__questao--variacaoDeTemperatura');

const duracaoTemperatura = document.querySelectorAll('.duracaoTemperatura');

const roupa25mais = document.querySelectorAll('.roupa25mais');
const roupa20e25 = document.querySelectorAll('.roupa20e25');
const roupa15e20 = document.querySelectorAll('.roupa15e20');
const roupa10e15 = document.querySelectorAll('.roupa10e15');
const roupaMenosDe10 = document.querySelectorAll('.tecidoMenosDe10');

function verificaVariacaoTemperatura() {
    formVariacaoTemperatura.onsubmit = function(e) {
        e.preventDefault();

        function ativaInputs() {
            if(e.target[1].checked == true){
                duracaoTemperatura[0].disabled = false;
                duracaoTemperatura[0].required = true;
            }
            if(e.target[2].checked == true) {
                duracaoTemperatura[1].disabled = false;
                duracaoTemperatura[1].required = true;
            }
            if(e.target[3].checked == true) {
                duracaoTemperatura[2].disabled = false;
                duracaoTemperatura[2].required = true;  
            }
            if(e.target[4].checked == true) {
                duracaoTemperatura[3].disabled = false;
                duracaoTemperatura[3].required = true;   
            }
            if(e.target[5].checked== true) {
                duracaoTemperatura[4].disabled = false;
                duracaoTemperatura[4].required = true;    
            }
            if(e.target[6].checked == true) {
                duracaoTemperatura[5].disabled = false;
                duracaoTemperatura[5].required = true;    
            }
            if(e.target[7].checked == true) {
                duracaoTemperatura[6].disabled = false;
                duracaoTemperatura[6].required = true;  
            }
        }

        function mostraRoupas() {
            for(i = 0; i < roupa25mais.length; i++) {
                if(e.target[1].checked == true) {
                    roupa25mais[i].hidden = false;
                }
            }   
            for(i = 0; i < roupa20e25.length; i++) {
                if(e.target[2].checked == true) {
                    roupa20e25[i].hidden = false;
                }
            }
            for(i = 0; i < roupa15e20.length; i++) {
                if(e.target[3].checked == true) {
                    roupa15e20[i].hidden = false;
                }
            }
            for(i = 0; i < roupa10e15.length; i++) {
                if(e.target[4].checked == true) {
                    roupa10e15[i].hidden = false;
                }
            }
            for(i = 0; i < roupaMenosDe10.length; i++) {
                if(e.target[7].checked == true) {
                    roupaMenosDe10[i].hidden = false;
                }
            }
        }

        ativaInputs();
        mostraRoupas();
    }
}

verificaVariacaoTemperatura();

/*CAPTANDO DURAÇÂO DAS VARIAÇÔES DE TEMPERATURA*/
const formDuracaoTemperatura = document.querySelector('.formulario__questao--duracaoTemperatura')

function verificaDuracaoVariacaoTemperatura() {
    formDuracaoTemperatura.onsubmit = function(e) {
        e.preventDefault();

        /*console.log(this.duracao__25mais.value);*/
    }
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