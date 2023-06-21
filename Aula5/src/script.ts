let idade: string | number = 90; //union types

idade = "25";

function mostrarIdade(idade: string | number) {
    //console.log("Minha idade é " + idade.toUpperCase()); Se fizer assim da erro pq o type number não tem o função upperCase
    if (typeof idade === 'string') {
        console.log("Minha idade é " + idade.toUpperCase())
    } else {
        console.log(idade);
    }
}

mostrarIdade(90);
mostrarIdade('90');