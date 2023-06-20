var n1 = document.getElementById('numero1');
var n2 = document.getElementById('numero2');
var btn = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
btn.addEventListener('click', function () {
    res.innerHTML = calcular(+n1.value, +n2.value).toString();
});
