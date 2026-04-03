// H - Higher 
// O - Order
// F - Function
// Função de alta ordem
// Uma função que chama outras funções

function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
};

function soma(num1, num2) {
    return num1+num2;
};

function subtrair(sub1, sub2) {
    return sub1-sub2;
};

const resultado = calcular(10, 5, soma);
const resultado2 = calcular(50, 10, subtrair);

console.log("A soma dos dois números é:", resultado);
console.log("A subtração de dois valores é:", resultado2);