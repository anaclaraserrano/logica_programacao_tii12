//bibliteca do node para receber as informações do usuário via terminal
const readline = require('readline');

    //diz que a leitura será vi terminal
    const leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question("Qual é o seu nome?", (nome) => {
        console.log("Olá ", nome);
        console.log("Seja bem vindo(a)!");
    
    leitor.question("Qual a sua idade?", (idade) => {
        if (idade>=18) {
            console.log("Voce é maor de idade!");
        } else {
            console.log("Voce é menor de idade!");
        };
        leitor.close();
    });

});
