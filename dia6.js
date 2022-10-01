let listaFrutas = [];
let listaLaticinios = [];
let listaCongelados = [];
let listaDoces = [];
let listaOutros = [];
let listaGeral = [listaFrutas, listaLaticinios, listaCongelados, listaDoces, listaOutros];

function listaDeCompras () {
    let dicionario = {
        'frutas':['abacate', 'abacaxi', 'acai', 'acerola', 'alfarroba', 'ameixa', 'amora', 'araca', 'banana', 'bergamota', 'butia', 'cacau', 'caju', 'caqui', 'carambola', 'cereja', 'coco', 'cranberry', 'cupuacu', 'damasco', 'duriao', 'figo', 'framboesa', 'goiaba', 'graviola', 'groselha', 'guarana', 'jabuticaba', 'jaca', 'kiwi', 'laranja', 'limao', 'lima', 'maca', 'mamao', 'manga', 'maracuja', 'melancia', 'melao', 'mexerica', 'mirtilo', 'morango', 'nectarina', 'pera', 'pessego', 'pitanga', 'pitaia', 'pomelo', 'pistache', 'roma', 'tangerina', 'tamarindo', 'tamara', 'toranja', 'uva'],

        'laticinios':['queijo', 'manteiga', 'margarina', 'requeijao', 'leite', 'leite em po', 'creme de leite', 'leite condensado'],

        'congelados':['pizza', 'lasanha', 'hamburguer', 'nuggets', 'waffles', 'donuts', 'frango', 'porco', 'carne'],
        
        'doces':['chocolate', 'chiclete', 'biscoito', 'nutella', 'goiabada', 'sorvete', 'geleia', 'rapadura', 'cocada', 'pacoca', 'jujuba', 'toddy', 'nescau', 'pe de moleque', 'doce de leite', 'bala de goma'],
    };

    let novoItem = prompt('Bem-vinde à sua lista de compras!\nVocê quer adicionar um item à lista?');

    while (novoItem) {
        novoItem = novoItem[0].toUpperCase() + novoItem.slice(1);
        let buscaItem = novoItem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if (dicionario['frutas'].includes(buscaItem)) {
            listaFrutas.push(' ' + novoItem);
            document.querySelector('.frutas').innerHTML = 'Frutas: ' + listaFrutas + '.';
        } else if (dicionario['laticinios'].includes(buscaItem)) {
            listaLaticinios.push(' ' + novoItem);
            document.querySelector('.laticinios').innerHTML = 'Laticínios: ' + listaLaticinios + '.';
        } else if (dicionario['congelados'].includes(buscaItem)) {
            listaCongelados.push(' ' + novoItem);
            document.querySelector('.congelados').innerHTML = 'Congelados: ' + listaCongelados + '.';
        } else if (dicionario['doces'].includes(buscaItem)) {
            listaDoces.push(' ' + novoItem);
            document.querySelector('.doces').innerHTML = 'Doces: ' + listaDoces + '.';
        } else {
            listaOutros.push(' ' + novoItem);
            document.querySelector('.outros').innerHTML = 'Outros: ' + listaOutros + '.';
        }

        novoItem = prompt(`"${novoItem}" adicionado com sucesso!\nDeseja adicionar outro item?\nSe não, deixe o campo abaixo em branco.`);
    }

    alert('Boas compras!');
}


function removerItem () {
    let itemRemovido = prompt('Qual item você deseja remover da lista de compras?')
    let itemLocalizado = ' ' + itemRemovido[0].toUpperCase() + itemRemovido.slice(1)
    
    if (itemRemovido != '') {
        for (let i = 0; i < listaGeral.length; i++) {
    
            if (listaGeral[i].includes(itemLocalizado)) {
                
                let confirmaRemover = prompt(`Item localizado na lista. Deseja remover ${itemRemovido}?\n(1) Sim | (2) Não`);
    
                if (confirmaRemover == 1) {
                    let indexItem = listaGeral[i].indexOf(itemLocalizado);
                    listaGeral[i].splice(indexItem, 1);
                    alert('Item removido.');
                } else if (confirmaRemover == 2) {
                    alert('Remoção cancelada. Todos os itens seguem intactos!')
                } else {
                    alert('Desculpa, eu só consigo entender "1" ou "2".');
                }
                break;
            } else {
                alert('Item não encontrado!');
                break;
            }
    
        }
    }
    
    document.querySelector('.frutas').innerHTML = 'Frutas: ' + listaFrutas + '.';
    document.querySelector('.laticinios').innerHTML = 'Laticínios: ' + listaLaticinios + '.';
    document.querySelector('.congelados').innerHTML = 'Congelados: ' + listaCongelados + '.';
    document.querySelector('.doces').innerHTML = 'Doces: ' + listaDoces + '.';
    document.querySelector('.outros').innerHTML = 'Outros: ' + listaOutros + '.';

}


function limparLista() {
    let temCerteza = '';

    while (temCerteza == '') {
        temCerteza = prompt('Você quer limpar a lista?\nTem certeza que não esqueceu de nada?\n(1) Sim, limpe a lista | (2) Não, deixa eu pensar...');

        if (temCerteza == 1) {
            listaFrutas = [];
            listaLaticinios = [];
            listaCongelados = [];
            listaDoces = [];
            listaOutros = [];

            document.querySelector('.frutas').innerHTML = 'Frutas: ' + listaFrutas;
            document.querySelector('.laticinios').innerHTML = 'Laticínios: ' + listaLaticinios;
            document.querySelector('.congelados').innerHTML = 'Congelados: ' + listaCongelados;
            document.querySelector('.doces').innerHTML = 'Doces: ' + listaDoces;
            document.querySelector('.outros').innerHTML = 'Outros: ' + listaOutros;

            alert('Lista esvaziada com sucesso!');
            break;
        } else if (temCerteza == 2) {
            alert('Sem problemas! Sua lista continua prontinha e segura onde está.');
            break;
        } else {
            alert('Desculpa, eu só consigo entender "1" ou "2".');
        }
    }
}


let iniciar = document.querySelector('input[type="submit"]');
iniciar.onclick = function () {
    listaDeCompras();
}


let remover = document.querySelector('input[value="Remover item da lista."]');
remover.onclick = function () {
    removerItem();
}


let limpar = document.querySelector('input[value="Limpar lista."]');
limpar.onclick = function () {
    limparLista();
}
