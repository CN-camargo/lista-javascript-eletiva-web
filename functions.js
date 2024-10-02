//Exercício 1
function tipoDeDado(valor) {
    let tipo;

    if (!isNaN(parseFloat(valor)) && isFinite(valor)) {
        tipo = "number";
    }
    else if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
        tipo = "boolean";
    }
    else if (valor.toLowerCase() === "null") {
        tipo = "null";
    }
    else if (valor.startsWith('[') && valor.endsWith(']')) {
        tipo = "array";
    }
    else if (valor.startsWith('{') && valor.endsWith('}')) {
        tipo = "object";
    }
    else {
        tipo = "string";
    }

    document.getElementById('resultado-exerc01').innerText = tipo;
}


//Exercício 2
function maiorDeIdade(idade) {

    let resultado;

    if(idade >= 18) {
        resultado = "É maior de idade.";
        document.getElementById('resultado-exerc02').innerText = resultado;
        return true;
    }
    else if(idade > 12) {
        resultado = "É um adolescente.";
    }
    else if(idade >= 0) {
        resultado = "É uma criança.";
    }
    else if(idade ) {
        resultado = "Digite uma idade válida.";
    }

    document.getElementById('resultado-exerc02').innerText = resultado;
    return false;

}

//Exercício 3
function tabuada(numero, limite) {
    let tabuada = "";
    limite = limite === "" ? 10 : limite;
    numero = numero;

    for (let i = 0; i <= limite; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }

    return tabuada;
}

function mostrarTabuada() {
    let numero = document.getElementById('numero').value;
    let limite = document.getElementById('limite').value;

    let resultado = tabuada(numero, limite);

    document.getElementById('resultado-exerc03').innerText = resultado;
}

//Exercício 4
function somarArray(sequencia, multiplicador) {

    let numerosArray = sequencia.split(/\s+/).map(Number);

    let soma = 0;

    multiplicador = multiplicador ? Number(multiplicador) : 1;

    for (let i = 0; i < numerosArray.length; i++) {
        soma += numerosArray[i] * multiplicador;
    }

    document.getElementById('resultado-exerc04').innerText = soma;
}

//Exercício 5
function reverterString(stringQualquer) {

    stringQualquer = stringQualquer.trim();

    let chars = stringQualquer.split('');
    let stringQualquerInvertida = '';

    for(let i = chars.length - 1; i >= 0; i--) {
        stringQualquerInvertida = stringQualquerInvertida + chars[i];
    }

    document.getElementById('resultado-exerc05').innerText = stringQualquerInvertida;

}

//declarar variável global para posterior atualização de dados
let pessoa;

//Exercício 6
function descreverPessoa(nome, idade, cidade) {

    let descricao = '';

    pessoa = {
        nome:   nome,
        idade:  idade,
        cidade: cidade
    };

    descricao = `Seu nome é ${pessoa.nome}, você tem ${pessoa.idade} anos e mora em ${pessoa.cidade}.`;

    document.getElementById('resultado-exerc06').innerText = descricao;

}

function atualizarPessoa(novaIdade, novaCidade) {

    let descricaoAtualizada = '';

    if(novaIdade) {
        pessoa.idade = novaIdade;
    }
    if(novaCidade) {
        pessoa.cidade = novaCidade;
    }

    descricaoAtualizada = `Seu nome é ${pessoa.nome}, você tem ${pessoa.idade} anos e mora em ${pessoa.cidade}.`;
    document.getElementById('resultado-exerc06').innerText = descricaoAtualizada;

}

//Exercício 7
function filtrarPares(sequenciaDeNumeros) {

    let numerosArray = sequenciaDeNumeros.split(/\s+/).map(Number);
    const numerosPares = new Array();

    for(let i = 0; i < numerosArray.length; i++) {
        if(numerosArray[i] % 2 == 0) {
            numerosPares.push(numerosArray[i]);
        }
    }

    document.getElementById('resultado-exerc07').innerText = numerosPares.toString();

}

function filtrarImpares(sequenciaDeNumeros) {

    let numerosArray = sequenciaDeNumeros.split(/\s+/).map(Number);
    const numerosImpares = new Array();

    for(let i = 0; i < numerosArray.length; i++) {
        if(numerosArray[i] % 2 !== 0) {
            numerosImpares.push(numerosArray[i]);
        }
    }

    document.getElementById('resultado-exerc07').innerText = numerosImpares.toString();

}

//Exercício 8
function adicionarPropriedade(novaPropriedade, valorNovaPropriedade) {

    if(!pessoa.hasOwnProperty(novaPropriedade)) {

        pessoa[novaPropriedade] = valorNovaPropriedade;
        document.getElementById('resultado-exerc08').innerText = `Propriedade '${novaPropriedade}' adicionada com o valor: ${pessoa[novaPropriedade]}`;

    } else {
        document.getElementById('resultado-exerc08').innerText = `A propriedade '${novaPropriedade}' já existe no objeto e tem valor de ${pessoa[novaPropriedade]}.`;
    }

}

//Exercício 9
let count = 0;

function alterarParagrafo() {
    let disp = document.getElementById("resultado-exerc09");
    count++;
    disp.innerHTML = count;    
}

//Exercício 10
function simularFetch() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("Dados recebidos");
        }, 2000);
    });
}

async function consumirFetch() {
    try {
        const mensagem = await simularFetch();
        console.log(mensagem);
    } catch (error) {
        console.error("Erro:", error);
    }
}