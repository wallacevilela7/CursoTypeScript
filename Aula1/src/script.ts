let n1 = document.getElementById('numero1') as HTMLInputElement;
let n2 = document.getElementById('numero2')  as HTMLInputElement;
let btn = document.getElementById('calcular') as HTMLElement;
let res = document.getElementById('resultado') as HTMLElement;

function calcular(n1 : number, n2 : number) {
    return n1 + n2;
}

btn.addEventListener('click', function () {
    res.innerHTML = calcular(+n1.value, +n2.value).toString();
});