const resultadoDiv = document.getElementById('result');

function isEmpty(str) {
    return !str.trim().length;
}

function calculoPelaIdade(idade, peso) {
    if (isEmpty(idade)) {
        return 0;
    }
    if (0 < idade <= 17) {
        return (peso * 40)/1000;
    }
    if (18 <= idade < 55) {
        return (peso * 35)/1000;
    }
    if (55 <= idade <= 65) {
        return (peso * 30)/1000;
    }
    if (idade >= 66) {
        return (peso * 25)/1000;
    }
}

function changeResult(input) {
    if (!input) {
        return '';
    }
    return `${input.toFixed(1)} litros por dia`; 
}

function calculateWeight() {
    const peso = document.getElementById('kg').value;
    const idade = document.getElementById('age').value;
    const quantidadeAgua = calculoPelaIdade(idade, peso);
    
    resultadoDiv.textContent = changeResult(quantidadeAgua);
}