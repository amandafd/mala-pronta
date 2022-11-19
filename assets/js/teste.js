/*CAPTANDO NOME*/ 
const formNome = document.querySelector('.formulario__questao--nome');
const nomeMala = document.querySelectorAll('.mala__nome');
const textoInicialMala = document.querySelector('.mala__textoInicial');

function mostraNome() {
    formNome.onsubmit = function(e) {
        e.preventDefault();
    
        for (let i = 0; i < nomeMala.length; i++) {
            nomeMala[i].innerHTML = this.nome.value;
        }
        textoInicialMala.innerHTML = "Continue preenchendo o questionário para completar sua mala.";
    }
}

mostraNome();

/*CAPTANDO DURAÇÃO TOTAL DA VIAGEM E FAZENDO CALCULOS DOS ITENS COM BASE APENAS NESSA VARIÁVEL*/
const formDuracaoTotal = document.querySelector('.formulario__questao--duracaoTotal');
const quantidadeLingerie = document.querySelectorAll('.quantidade__lingerie'); 
const quantidadePijama = document.querySelector('.quantidade__pijama'); 

function adicionaItensFixos() {
    formDuracaoTotal.onsubmit = function(e) {
        e.preventDefault();
        
        for (let i = 0; i < quantidadeLingerie.length; i++) {
            if(this.duracaoTotal.value < 4) {
                quantidadeLingerie[i].innerHTML = parseInt(this.duracaoTotal.value) + 2;
                quantidadePijama.innerHTML = 1;
            } else if (this.duracaoTotal.value < 15) {
                quantidadeLingerie[i].innerHTML = parseInt(this.duracaoTotal.value) + 2;
                quantidadePijama.innerHTML = parseInt(this.duracaoTotal.value) / 2;    
            } else {
                quantidadePijama.innerHTML = 5;
                quantidadeLingerie[i].innerHTML = 18;
            }
        }
    }
}

adicionaItensFixos();

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