const pessoa = {
    nome: "Ana",
    idade: 16,
    genero: "Mulher",
    estuda: true
};

pessoa.sobrenome = "Clara";

console.log("Nome:", pessoa.nome);
console.log("Sobrenome:", pessoa.sobrenome);

delete pessoa.idade;

console.log("Pessoa:", pessoa);

pessoa.hobbies = ["ler", "escrever", "cantar"];
console.log("Pessoa:", pessoa);


// FOR IN -> Percorrendo as chaves do objeto
for(const chave in pessoa) {
    console.log("Chave:", chave);
    console.log("Valores:", pessoa[chave]);
};


// MÉTODOS PARA OBJETOS:

const chaves = Object.keys(pessoa);
const valores = Object.values(pessoa);
const entradas = Object.entries(pessoa);

console.log("Chaves:", chaves);
console.log("Valores:", valores);
console.log("Entradas:", entradas);