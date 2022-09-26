let numeroUm = 1;
let stringUm = '1';

let numeroTrinta = 30;
let stringTrinta = '30';

let numeroDez = 10;
let stringDez = '10';


if (numeroUm == stringUm) {
    if (typeof numeroUm === typeof stringUm) {
        document.querySelector('.numeroUm').innerHTML = `As variáveis numeroUm (${numeroUm}) e stringUm ("${stringUm}") têm o mesmo valor e o mesmo tipo.`;
        console.log(`As variáveis numeroUm (${numeroUm}) e stringUm ("${stringUm}") têm o mesmo valor e o mesmo tipo.`);
    } else {
        document.querySelector('.numeroUm').innerHTML = `As variáveis numeroUm (${numeroUm}) e stringUm ("${stringUm}") têm o mesmo valor, mas são de tipos diferentes.`;
        console.log(`As variáveis numeroUm (${numeroUm}) e stringUm ("${stringUm}") têm o mesmo valor, mas são de tipos diferentes.`);
    }
} else {
    document.querySelector('.numeroUm').innerHTML = `As variáveis numeroUm (${numeroUm}) e stringUm ("${stringUm}") não têm o mesmo valor.`;
    console.log(`As variáveis numeroUm (${numeroUm}) e stringUm ("${stringUm}") não têm o mesmo valor.`);
}


if (numeroDez == stringDez) {
    if (typeof numeroDez === typeof stringDez) {
        document.querySelector('.numeroDez').innerHTML = `As variáveis numeroDez (${numeroDez}) e stringDez ("${stringDez}") têm o mesmo valor e o mesmo tipo.`;
        console.log(`As variáveis numeroDez (${numeroDez}) e stringDez ("${stringDez}") têm o mesmo valor e o mesmo tipo.`);
    } else {
        document.querySelector('.numeroDez').innerHTML = `As variáveis numeroDez (${numeroDez}) e stringDez ("${stringDez}") têm o mesmo valor, mas são de tipos diferentes.`;
        console.log(`As variáveis numeroDez (${numeroDez}) e stringDez ("${stringDez}") têm o mesmo valor, mas são de tipos diferentes.`);
    }
} else {
    document.querySelector('.numeroDez').innerHTML = `As variáveis numeroDez (${numeroDez}) e stringDez ("${stringDez}") não têm o mesmo valor.`;
    console.log(`As variáveis numeroDez (${numeroDez}) e stringDez ("${stringDez}") não têm o mesmo valor.`);
}


if (numeroTrinta == stringTrinta) {
    if (typeof numeroTrinta === typeof stringTrinta) {
        document.querySelector('.numeroTrinta').innerHTML = `As variáveis numeroTrinta (${numeroTrinta}) e stringTrinta ("${stringTrinta}") têm o mesmo valor e o mesmo tipo.`;
        console.log(`As variáveis numeroTrinta (${numeroTrinta}) e stringTrinta ("${stringTrinta}") têm o mesmo valor e o mesmo tipo.`);
    } else {
        document.querySelector('.numeroTrinta').innerHTML = `As variáveis numeroTrinta (${numeroTrinta}) e stringTrinta ("${stringTrinta}") têm o mesmo valor, mas são de tipos diferentes.`;
        console.log(`As variáveis numeroTrinta (${numeroTrinta}) e stringTrinta ("${stringTrinta}") têm o mesmo valor, mas são de tipos diferentes.`);
    }
} else {
    document.querySelector('.numeroTrinta').innerHTML = `As variáveis numeroTrinta (${numeroTrinta}) e stringTrinta ("${stringTrinta}") não têm o mesmo valor.`;
    console.log(`As variáveis numeroTrinta (${numeroTrinta}) e stringTrinta ("${stringTrinta}") não têm o mesmo valor.`);
}
