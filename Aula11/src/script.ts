//Retorno void

function removerElemento(el: HTMLElement) : void {
    el.remove();
}

removerElemento(document.getElementById('teste') as HTMLElement);






type QualquerFuncao = () => void; //não "espera" nenhum tipo de retorno

const algo: QualquerFuncao = () => {
    return "bla bla";
}