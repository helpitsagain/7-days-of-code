function questionario () {
    const nome = prompt('Como você se chama?');
    const idade = prompt('Quantos anos você tem?');
    const linguagens = prompt('Qual linguagem de programação você está estudando agora?');

    alert(`Olá, ${nome}! Você tem ${idade} anos e está estudando ${linguagens}? Nice!`);
}

const iniciar = document.querySelector('input[type="submit"]');

iniciar.onclick = function () {
    questionario();    
}