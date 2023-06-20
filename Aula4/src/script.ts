
function resumo(usuario: { nome: string, idade?: number }) {
    if (usuario.idade !== undefined) {
        return `Olá, ${usuario.nome}, tude bem? Você tem ${usuario.idade} anos`;
    } else {
        return `Olá, ${usuario.nome}, tudo bem? `;
    }
}

let usuario1 = {
  nome: "Bonieck",
  //idade: 90,
};

resumo(usuario1);
