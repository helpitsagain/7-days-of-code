
function decisoes () {
    var nomeUsuario = prompt('Olá! Como você se chama?')
    var escolhaArea = prompt(`É um prazer, ${nomeUsuario}! Você quer seguir para a área do Front-End(1) ou do Back-End(2)?`);
    var escolhaBack;
    var escolhaFront;
    var escolhaOutra;
    var escolhaLinguagem;
    var escolhaFuturo;
    var maisLinguagens;
    var outraLinguagem;
    const respostaInvalida = 'Desculpa, resposta inválida. Eu só entendo "1" ou "2". ):';

    if (escolhaArea == 1) { //Front-End
        escolhaArea = 'Front-End';
        escolhaOutra = 'Back-End';
        alert(`Você escolheu ${escolhaArea}.`);
        escolhaFront = prompt('Legal, você escolheu Front-End! Dentro desta área, você quer aprender React(1) ou Vue(2)?');

        if (escolhaFront == 1) {
            escolhaLinguagem = 'React';
            alert(`Você escolheu ${escolhaLinguagem}.`);
        } else if (escolhaFront == 2) {
            escolhaLinguagem = 'Vue';
            alert(`Você escolheu ${escolhaLinguagem}.`);
        } else {
            alert(respostaInvalida);
        }
    } else if (escolhaArea == 2) { //Back-End
        escolhaArea = 'Back-End'
        escolhaOutra = 'Front-End';
        alert(`Você escolheu ${escolhaArea}.`);
        escolhaBack = prompt('Legal, você escolheu Back-End! Dentro desta área, você quer aprender C#(1) ou Java(2)?');

        if (escolhaBack == 1) {
            escolhaLinguagem = 'C#';
            alert(`Você escolheu ${escolhaLinguagem}.`);
        } else if (escolhaBack == 2) {
            escolhaLinguagem = 'Java';
            alert(`Você escolheu ${escolhaLinguagem}.`);
        } else {
            alert(respostaInvalida);
        }
    } else {
        alert(respostaInvalida);
    }
    
    escolhaFuturo = prompt(`Então você quer aprender ${escolhaLinguagem}? Maneiro! E, depois disso, você vai continuar se aprofundando na área e se tornar um dev ${escolhaArea}(1), ou pretende estudar ${escolhaOutra} e se tornar um dev Full-Stack(2)?`);
    
    if (escolhaFuturo == 1) {
        alert('Ótimo! Se aprofundar em uma especialização é uma ótima decisão. É a melhor forma de atingir expertise!');
    } else if (escolhaFuturo == 2) {
        alert('Ótimo! Adquirir conhecimento em várias áreas e se tornar um generalista é uma ótima forma de se tornar indispensável! ;)');
    } else {
        alert(respostaInvalida);
    }

    maisLinguagens = prompt('Tem mais alguma linguagem que você gostaria de aprender? Sim(1) | Não(2)');

    while (maisLinguagens == 1) {
        outraLinguagem = prompt('Me conta, então, qual é?');
        alert(`Ah, ${outraLinguagem} é muito útil! Tenho certeza que vai ser uma ótima adição ao seu repertório. :D`);
        maisLinguagens = prompt('Tem mais alguma linguagem que você gostaria de aprender?');
    }

    alert(`Foi um prazer conversar com você, ${nomeUsuario}! Até a próxima. ;)`)

}


const iniciar = document.querySelector('input[type="submit"]');

iniciar.onclick = function () {
    decisoes();
}
