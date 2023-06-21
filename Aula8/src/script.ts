//types literais

let nome: 'wallace' = 'wallace';

//nome = 'joao';
//em casos de declaração de variáveis não não muito úteis


//Casos úteis para a utilização
function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center') {
    return `<div style="text-align: ${alinhamento}>${texto}</div>`
}

mostrarTexto('Wallace', 'left');
//mostrarTexto('Wallace', 'direita'); //da erro porque "direita" não é um tipo literal



type VerdadeiroOuFalso = true | false;
function temNome(nome: string) : VerdadeiroOuFalso {
    return nome !== '' ? true : false;
}


type Opcoes = {
    width: number,
    height: number
}

function configurar(props: Opcoes| 'auto') {
}

configurar({ width: 100, height: 200 });
configurar('auto');


//Faz sentido usar os tipos literais quando se tem union types