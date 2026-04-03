const frutas = ["Banana", "Maçã", "Uva", "Laranja", "Limão"];
// posições do vetor: 0, 1, 2, 3, 4

// exibindo o array:
console.log(frutas);

console.log("A primeira fruta:", frutas[0]);
console.log("A última fruta:", frutas[4]);
console.log("Total de frutas:", frutas.length);

// Adicionando um novo elemento ao meu array.
frutas.push("Pêsego");
console.log(frutas);

// Removendo um elemento do meu array.
frutas.splice(2, 1);
console.log(frutas);

// Percorrendo o array com o laço FOR:
for(let i = 0; i<frutas.length;i++) {
    console.log("Indice:", i);
    console.log(frutas[i]);
};

// Percorrendo o array com o método forEach
frutas.forEach((valor, indice) => {
    console.log("Indice:", indice, "Fruta:", valor);
});

// Percorrendo com o for of
for(const fruta of frutas) {
    console.log("Fruta da vez:", fruta);
};


const numeros = [1,2,3,4,5,6,7,8,9,10];

// Usando o método filter para localizar apenas os números pares
const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0; //Condição é verdadeira
});

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 !== 0; //Condição é verdadeira
});

console.log("Todos os números:", numeros);
console.log("Números pares:", numerosPares);
console.log("Números impares:", numerosImpares);

// método map para manipulação dos valores.
// Tratamos dessa forma como valores diferentes (sem modificar o array original).

const quadrados = numeros.map((numero) => {
    return numero*numero;
});

console.log("Valores quadrados:", quadrados);