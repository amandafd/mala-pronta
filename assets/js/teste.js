const formNome = document.querySelector('.formulario__questao--nome');
const nomeMala = document.querySelectorAll('.mala__nome');

formNome.addEventListener("submit", (e) => {
    e.preventDefault();

    for (let i = 0; i < nomeMala.length; i++) {
        nomeMala[i].innerHTML = this.nome.value;
    }
    
})