/*CAPTANDO FORMS*/
const formEvento = document.querySelector('.formulario__questao--evento');

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

const formDuracaoTemperatura = document.querySelector('.formulario__questao--duracaoTemperatura')

const quantidadeVestidoMacacao = document.querySelectorAll('.quantidade__vestidoMacacao');

function verificaDuracaoVariacaoTemperatura() {
    formDuracaoTemperatura.onsubmit = function(e) {
        e.preventDefault();

        quantidadeVestidoMacacao[0].innerHTML = 2/*(this.duracao__25mais.value / x) + (this.duracao__20e25.value / x) + (this.duracao__15e20.value / x) + (this.duracao__10e15.value / x) + (this.duracao__5e10.value / x) / (this.duracao__0e5.value / x) + (this.duracao__negativa.value);*/
        quantidadeVestidoMacacao[1].innerHTML =  4/*(this.duracao__25mais.value / x) + (this.duracao__20e25.value / x) + (this.duracao__15e20.value / x) + (this.duracao__10e15.value / x) + (this.duracao__5e10.value / x) / (this.duracao__0e5.value / x) + (this.duracao__negativa.value);*/
        quantidadeVestidoMacacao[2].innerHTML = 8/*(this.duracao__25mais.value / x) + (this.duracao__20e25.value / x) + (this.duracao__15e20.value / x) + (this.duracao__10e15.value / x) + (this.duracao__5e10.value / x) / (this.duracao__0e5.value / x) + (this.duracao__negativa.value);*/

        console.log(this.duracao__25mais.value);
        console.log(this.duracao__20e25.value);
        console.log(this.duracao__15e20.value);
        console.log(this.duracao__10e15.value);
        console.log(this.duracao__5e10.value);
        console.log(this.duracao__0e5.value);
        console.log(this.duracao__negativa.value);
    }
}

verificaDuracaoVariacaoTemperatura();

/*cenario*/
const formCenario = document.querySelector('.formulario__questao--cenario');
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
const formAlgoMais = document.querySelector('.formulario__questao--algoMais');

function verificaAlgoMais() {
    formAlgoMais.addEventListener("submit", (e) => {
        e.preventDefault();

        textoInicialMala.innerHTML = "Tudo certo! Verifique sua mala pronta abaixo.";
    })
}

verificaAlgoMais();