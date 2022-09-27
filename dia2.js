function questionario () {
    const nome = prompt('Como você se chama?');
    const idade = prompt('Quantos anos você tem?');
    const linguagens = prompt('Qual linguagem de programação você está estudando agora?');

    alert(`Olá, ${nome}! Você tem ${idade} anos e está estudando ${linguagens}? Nice!`);

    var gosto = prompt(`Você gosta de estudar ${linguagens}? (1) Sim | (2) Não`)

    if (gosto == 1) {
        alert('Que legal! Tenho certeza que você vai dominar o assunto já, já!')
    } else if (gosto == 2) {
        alert('Poxa, sinto muito... Você já pensou em tentar outras linguagens?')
    } else {
        alert('Desculpa, resposta inválida. Eu só entendo "1" ou "2". ):')
    }
}

const iniciar = document.querySelector('input[type="submit"]');

iniciar.onclick = function () {
    questionario();    
}