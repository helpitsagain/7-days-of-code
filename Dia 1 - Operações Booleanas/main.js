let numeroUm = 1;
let stringUm = '1';

let numeroTrinta = 30;
let stringTrinta = '30';

let numeroDez = 10;
let stringDez = '10';


if (numeroUm == stringUm) {
    if (typeof numeroUm === typeof stringUm) {
        console.log('As variáveis numeroUm e stringUm têm o mesmo valor e o mesmo tipo.');
    } else {
        console.log('As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes.');
    }
} else {
    console.log('As variáveis numeroUm e stringUm não têm o mesmo valor.');
}


if (numeroTrinta == stringTrinta) {
    if (typeof numeroTrinta === typeof stringTrinta) {
        console.log('As variáveis numeroUm e stringUm têm o mesmo valor e o mesmo tipo.');
    } else {
        console.log('As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes.');
    }
} else {
    console.log('As variáveis numeroUm e stringUm não têm o mesmo valor.');
}


if (numeroDez == stringDez) {
    if (typeof numeroDez === typeof stringDez) {
        console.log('As variáveis numeroDez e stringDez têm o mesmo valor e o mesmo tipo.');
    } else {
        console.log('As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes.');
    }
} else {
    console.log('As variáveis numeroUm e stringUm não têm o mesmo valor.');
}