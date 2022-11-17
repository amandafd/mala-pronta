/*CAPTANDO FORMS*/

const formDuracaoTemperatura = document.querySelector('.formulario__questao--duracaoTemperatura')
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

/*CAPTANDO QUANTIDADE DE ITENS*/
const quantidadeMeia = document.querySelector('.quantidade__meia'); 
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