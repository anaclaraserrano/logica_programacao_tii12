//OPERADORES RELACIONAIS
// >, <, ==, ===, <=, >=, !==

const idadeNalon= 26;
const idadeClara= 16;

//comparando valores:
const saoIguais = idadeNalon == idadeClara;
console.log("São iguais? " + saoIguais);

const comparacao = idadeNalon > idadeClara;
console.log("é mior?" + comparacao);

const comparacao2 = idadeNalon < idadeClara;
console.log("é menor?" + comparacao2);


//2 sinais de "=": compração de valores
//3 sinais de "=": comparação estrita de valores e tipos

const comparacao3 = idadeNalon !== idadeClara;
console.log("São dofrentes? " + comparacao3);


//COMPARADORES:E, OU E NÃO

const idade = 13;
const maioridade = idade>=18; //true
const possuiCNH = true;

const podeDirigir = maioridade && possuiCNH // E
console.log("Pode dirigir? "+ podeDirigir);

const podeViajar = maioridade || possuiCNH; // OU
console.log("Pode viajar? " + podeViajar);

const acompanhante = !maioridade; // NÂO
console.log ("Precisa de acompanhante? " + acompanhante)

