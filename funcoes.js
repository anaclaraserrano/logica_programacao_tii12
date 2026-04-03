// para declarar uma função, será necessário a palavra reservada "function" + nome da função.

function saudacao(nome) {
    console.log("Olá", nome);
};
saudacao("Fernanda");
saudacao("Pedro");

// Função com retorno
function calcDobro(numero) {
    return numero*2;
};

const numeroDobro = calcDobro(50);
console.log("O dobro de 50 é:", numeroDobro);

// arrow function
const saud = (nome) => {
    console.log("Olá", nome);
};

saud("Rafa");

const calculoDobro = (numero1) => {
    return numero1*2;
};
console.log(calculoDobro(25));

// função mais simplificada.
const saudacao2 = nome => console.log("Olá", nome);
saudacao2("Chico");

const dobro = numero => numero*2;
console.log(dobro(10));