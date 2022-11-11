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