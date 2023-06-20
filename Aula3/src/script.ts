// function firstLetterUpperCase(name: string): string {
//     let firstLetter = name.charAt(0).toUpperCase();

//     return firstLetter + name.substring(1);
// }

// let nome:string = firstLetterUpperCase('wallace');

//tsc script.ts --noEmitOnError
//tsc src/script.ts --outDir public

// function somar(n1: number, n2: number): number {
//     return n1 + n2;
// }

// let res = somar(0, 24);

let names = ["bonieck", "pedro", "paulo", "cristina"];

names.forEach(function (nome) {
    console.log(nome.toUpperCase());
});
