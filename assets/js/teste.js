/*CAPTANDO name*/ 
const formname = document.querySelector('.form__question--name');
const suitcaseName = document.querySelectorAll('.suitcase__name');
const textoInicialMala = document.querySelector('.suitcase__initialText');

function mostraname() {
    formname.onsubmit = function(e) {
        e.preventDefault();
    
        for (let i = 0; i < suitcaseName.length; i++) {
            suitcaseName[i].innerHTML = this.name.value;
        }
        textoInicialMala.innerHTML = "Continue preenchendo o questionário para completar sua mala.";
    }
}

mostraname();

/*CAPTANDO DURAÇÃO TOTAL DA VIAGEM E FAZENDO CALCULOS DOS ITENS COM BASE APENAS NESSA VARIÁVEL*/
const formDuracaoTotal = document.querySelector('.form__question--duracaoTotal');
const quantidadeLingerie = document.querySelector('.quantidade__lingerie'); 
const quantidadePijama = document.querySelector('.quantidade__pijama'); 
const quantidadeBiquini = document.querySelector('.quantidade__biquini');
const quantidadeSaidaPraia = document.querySelector('.quantidade__saidaPraia');

function calculaItens() {
    formDuracaoTotal.onsubmit = function(e) {
        e.preventDefault();
        

        if(this.duracaoTotal.value < 4) {
            quantidadeLingerie.innerHTML = parseInt(this.duracaoTotal.value) + 2;
            quantidadePijama.innerHTML = 1;
            quantidadeBiquini.innerHTML = "no máximo 2";
            quantidadeSaidaPraia.innerHTML = "1 ou 2";
        } else if (this.duracaoTotal.value < 15) {
            quantidadeLingerie.innerHTML = parseInt(this.duracaoTotal.value) + 2;
            quantidadePijama.innerHTML = parseInt(this.duracaoTotal.value) / 2; 
            quantidadeBiquini.innerHTML = "no máximo 3";
            quantidadeSaidaPraia.innerHTML = "2";
        } else {
            quantidadePijama.innerHTML = 5;
            quantidadeLingerie.innerHTML = 18;
            quantidadeBiquini.innerHTML = "no máximo 4";
            quantidadeSaidaPraia.innerHTML = "3 ou 4";
        }

    
       
    }
}

calculaItens();

/*CAPTANDO VARIAÇÔES DE TEMPERATURA SELECIONADAS*/
const formVariacaoTemperatura = document.querySelector('.form__question--variacaoDeTemperatura');

const duracaoTemperatura = document.querySelectorAll('.duracaoTemperatura');

const roupa25mais = document.querySelectorAll('.roupa25mais');
const roupa20e25 = document.querySelectorAll('.roupa20e25');
const roupa15e20 = document.querySelectorAll('.roupa15e20');
const roupa10e15 = document.querySelectorAll('.roupa10e15');
const roupaMenosDe10 = document.querySelectorAll('.roupaMenosDe10');

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
                if(e.target[5].checked == true || e.target[6].checked == true || e.target[7].checked == true) {
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
const formDuracaoTemperatura = document.querySelector('.form__question--duracaoTemperatura')

const quantidadeVestidoMacacao = document.querySelectorAll('.quantidade__vestidoMacacao');


function verificaDuracaoVariacaoTemperatura() {
    formDuracaoTemperatura.onsubmit = function(e) {
        e.preventDefault();
        
        if(this.duracao__25mais.value == "") {
            
        }
        
        /*quantidadeVestidoMacacao[0].innerHTML = parseInt(this.duracao__25mais.value / 3) + parseInt(this.duracao__20e25.value / 3) /*+ parseInt(this.duracao__15e20.value / 5) + parseInt(this.duracao__10e15.value / 5) + parseInt(this.duracao__5e10.value / 5) / parseInt(this.duracao__0e5.value / 5) + parseInt(this.duracao__negativa.value / 5);
        quantidadeVestidoMacacao[1].innerHTML =  4/*(this.duracao__25mais.value / x) + (this.duracao__20e25.value / x) + (this.duracao__15e20.value / x) + (this.duracao__10e15.value / x) + (this.duracao__5e10.value / x) / (this.duracao__0e5.value / x) + (this.duracao__negativa.value);*/
        /*quantidadeVestidoMacacao[2].innerHTML = 8/*(this.duracao__25mais.value / x) + (this.duracao__20e25.value / x) + (this.duracao__15e20.value / x) + (this.duracao__10e15.value / x) + (this.duracao__5e10.value / x) / (this.duracao__0e5.value / x) + (this.duracao__negativa.value);*/

        /*verificaInputAtivo();*/
    }
}

verificaDuracaoVariacaoTemperatura();



/*c*/
const formCenario = document.querySelector('.form__question--cenario');

const roupaAgua = document.querySelectorAll('.roupaAgua');
const roupaNeve = document.querySelectorAll('.roupaNeve');
const roupaMontanha = document.querySelectorAll('.roupaMontanha');

function verificaCenario() {
    formCenario.onsubmit = function(e) {
        e.preventDefault();

        for(i = 0; i < roupaAgua.length; i++) {
            if (e.target[1].checked == true) {
                roupaAgua[i].hidden = false;
            }
        }
        for(i = 0; i < roupaNeve.length; i++) {
            if (e.target[2].checked == true) {
                roupaNeve[i].hidden = false;
            }
        }
        for(i = 0; i < roupaMontanha.length; i++) {
            if (e.target[3].checked == true) {
                roupaMontanha[i].hidden = false;
            }
        }
    }
}

verificaCenario();

/*evento*/
const formEvento = document.querySelector('.form__question--evento');

function verificaEvento() {
    formEvento.onsubmit = function(e) {
        e.preventDefault();

        if(e.target[1].checked == true) {
            console.log("Nada");
        }
        if(e.target[2].checked == true) {
            console.log("Balada");
        }
        if(e.target[3].checked == true) {
            console.log("Festa Formal");
        }
        if(e.target[4].checked == true) {
            console.log("Festa a fantasia");
        }
    }
}

verificaEvento();

/*algoMais*/
/*const formAlgoMais = document.querySelector('.form__question--algoMais');

function verificaAlgoMais() {
    formAlgoMais.addEventListener("submit", (e) => {
        e.preventDefault();

        textoInicialMala.innerHTML = "Tudo certo! Verifique sua mala pronta abaixo.";
    })
}

verificaAlgoMais();*/