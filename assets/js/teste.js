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

const t25maisDuracao = document.querySelector('#vdt__selecionar--25mais');
const t20e25Duracao = document.querySelector('#vdt__selecionar--20e25');
const t15e20Duracao = document.querySelector('#vdt__selecionar--15e20');
const t10e15Duracao = document.querySelector('#vdt__selecionar--10e15');
const t5e10Duracao = document.querySelector('#vdt__selecionar--5e10');
const t0e5Duracao = document.querySelector('#vdt__selecionar--0e5');
const tNegativaDuracao = document.querySelector('#vdt__selecionar--negativa');

function verificaVariacaoTemperatura() {
    formVariacaoTemperatura.onsubmit = function(e) {
        e.preventDefault();

        function ativaInputs() {
            if(e.target[1].checked == true){
                t25maisDuracao.disabled = false;
                t25maisDuracao.required = true;
            }
            if(e.target[2].checked == true) {
                t20e25Duracao.disabled = false;
                t20e25Duracao.required = true;  
            }
            if(e.target[3].checked == true) {
                t15e20Duracao.disabled = false;
                t15e20Duracao.required = true;  
            }
            if(e.target[4].checked == true) {
                t10e15Duracao.disabled = false;
                t10e15Duracao.required = true;  
            }
            if(e.target[4].checked== true) {
                t5e10Duracao.disabled = false;
                t5e10Duracao.required = true;  
            }
            if(e.target[5].checked == true) {
                t0e5Duracao.disabled = false;
                t0e5Duracao.required = true;  
            }
            if(e.target[6].checked == true) {
                tNegativaDuracao.disabled = false;
                tNegativaDuracao.required = true;  
            }
        }
        ativaInputs();
    }
}

verificaVariacaoTemperatura();