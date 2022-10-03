// display
const calcDisplay = document.querySelector('.input_numeros');
const limparDisplay = document.querySelector('.tecla_limpar');
const mostrarResultado = document.querySelector('.igual');

// teclas
const listaDeTeclas = document.querySelectorAll('.tecla');
const teclaSoma = document.querySelector('.soma');
const teclaSubt = document.querySelector('.subtrai');
const teclaMult = document.querySelector('.multiplica');
const teclaDivi = document.querySelector('.divide');


for (let digito of listaDeTeclas) {
    digito.onclick = function () {
        if (digito.classList.contains('digito')) {
            calcDisplay.append(digito.textContent);
        } else if (digito.classList.contains('operacao')) {
            console.log('it workss!');
        };
    };
};


teclaSoma.onclick = function () {
    calcDisplay.append(teclaSoma.textContent);
}


teclaSubt.onclick = function () {
    calcDisplay.append(teclaSubt.textContent);
}


teclaMult.onclick = function () {
    calcDisplay.append(teclaMult.textContent);
}


teclaDivi.onclick = function () {
    calcDisplay.append(teclaDivi.textContent);
}


mostrarResultado.onclick = function () {
    calcDisplay.append(` = ${eval(calcDisplay.textContent)}`)
}


limparDisplay.onclick = function () {
    calcDisplay.textContent = '';
}
