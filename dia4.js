function jogoAdivinhacao (numeroMaximo) {
    let continuar = 1;

    while (continuar == 1) {
        let numeroSecreto = Math.ceil(Math.random() * numeroMaximo);
        let t = 1;
        
        alert('Olá, bem-vinde a mais um jogo de adivinhação!\nNeste jogo, você tem cinco tentativas para adivinhar um número que está entre 1 e 10.')

        while (t <= 5) {
            let palpite = prompt('Escolha um número!');
            
            if (palpite == numeroSecreto && t <= 5) {
                alert(`Você acertou! O número secreto era ${numeroSecreto}!`);
                break;
            } else if (palpite != numeroSecreto && t < 4) {
                alert(`Você errou. ):\nVocê tem mais ${5-t} tentativas.`);
            } else if (palpite != numeroSecreto && t == 4) {
                alert(`Você errou. ):\nVocê tem mais ${5-t} tentativa.`);
            } else if (palpite != numeroSecreto && t == 5) {
                alert(`Sinto muito, você não conseguiu. ):\nO número secreto era ${numeroSecreto}.\nVocê pode tentar mais uma vez se quiser!`);
            }
            
            t++;
        }
        continuar = prompt('Você quer jogar novamente?\n(1) Sim | (2) Não');
    }
}

let iniciar = document.querySelector('input[type="submit"]');

iniciar.onclick = function () {
    jogoAdivinhacao(10);
}