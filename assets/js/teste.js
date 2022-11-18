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

const tecido25mais = document.querySelectorAll('.tecido25mais');
const tecido20e25 = document.querySelectorAll('.tecido20e25');
const tecido15e20 = document.querySelectorAll('.tecido15e20');
const tecido10e15 = document.querySelectorAll('.tecido10e15');
const tecidoMenosDe10 = document.querySelectorAll('.tecidoMenosDe10');

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
            if(e.target[5].checked== true) {
                t5e10Duracao.disabled = false;
                t5e10Duracao.required = true;  
            }
            if(e.target[6].checked == true) {
                t0e5Duracao.disabled = false;
                t0e5Duracao.required = true;  
            }
            if(e.target[7].checked == true) {
                tNegativaDuracao.disabled = false;
                tNegativaDuracao.required = true;  
            }
        }

        function mostraTecidos() {
            for(i = 0; i < tecido25mais.length; i++) {
                if(e.target[1].checked == true) {
                    tecido25mais[i].hidden = false;
                }
            }   
            for(i = 0; i < tecido20e25.length; i++) {
                if(e.target[2].checked == true) {
                    tecido20e25[i].hidden = false;
                }
            }
            for(i = 0; i < tecido15e20.length; i++) {
                if(e.target[3].checked == true) {
                    tecido15e20[i].hidden = false;
                }
            }
            for(i = 0; i < tecido10e15.length; i++) {
                if(e.target[4].checked == true) {
                    tecido10e15[i].hidden = false;
                }
            }
            for(i = 0; i < tecidoMenosDe10.length; i++) {
                if(e.target[7].checked == true) {
                    tecidoMenosDe10[i].hidden = false;
                }
            }
            /*if(e.target[1].checked == true) {
                camisetaMC.hidden = false;
                shorts.hidden = false;
                tipoCalcaTecido.hidden = false;
                shortsSubS.hidden = false;
                sandalia.hidden = false;
            }
            if(e.target[2].checked == true) {
                camisetaMC.hidden = false;
                shorts.hidden = false;
                tipoCalcaTecido.hidden = false;
                shortsSubS.hidden = false;
                sandalia.hidden = false;
                meiaCalcaFina.hidden = false;
            }
            if(e.target[3].checked == true) {
                camisetaMC.hidden = false;
                camisetaML.hidden = false;
                cardiga.hidden = false;
                jaqueta.hidden = false;
                sandalia.hidden = false;
                meiaCalcaFina.hidden = false;
                meiaCalcaMedia.hidden = false;
            }
            if(e.target[4].checked == true) {
                camisetaMC.hidden = false;
                camisetaML.hidden = false;
                cardiga.hidden = false;
                jaqueta.hidden = false;
                casaco.hidden = false;
                bota.hidden = false;
                meiaCalcaMedia.hidden = false;
                cachecol.hidden = false;
            }
            if(e.target[5].checked == true ) {
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
            if(e.target[6].checked == true) {
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
            if(e.target[7].checked == true) {
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
            }*/
        }
        ativaInputs();
        mostraTecidos();
    }
}

verificaVariacaoTemperatura();