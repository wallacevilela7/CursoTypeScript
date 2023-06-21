//Criar o próprio type pode ser útil quando de deseja reaproveitá-lo ao longo do código

type Idade = string | number;

let idade: Idade = 90;

function mostrarIdade(i: Idade) : Idade {
    return i;
}

//Criar o próprio type para objetos

type User = {
    nome: string,
    idade: number
}

//function resumo(usuario: {nome: string, idade: number}) Implementando o uso do type user para simplificar a chamada nesta função

function resumo(usuario: User) {
    return `Olá ${usuario.nome} você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Wallace',
    idade: 24
});


//Criar um type usando interface

interface User2 {
    nome: string,
    idade: number
} //Funciona exatamente igual ao usuario criado com o type