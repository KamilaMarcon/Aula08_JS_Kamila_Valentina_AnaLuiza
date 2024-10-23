//Trabalhando com objetos no js

//criar uma variavel do tipo objeto 
//objeto sua caracteristica é {}
//ultimo elemento não contem ,


let pessoa = {
    nome: 'Kamila',
    idade: 52,
    altura: 1.58,
    cargo: 'estudante'
};

console.log(pessoa);
console.log(pessoa.idade);
console.log(pessoa.cargo);

let carro = {
    nome: 'Brasilia',
    cor: 'Amarela',
    Ano: 2000,
    Marca: 'Volkswagen'
}

console.log(carro.nome+' '+carro.cor);

//criando um array de objetos
//caracteristica array é colchete
let alunos = [
    {nome:'Valentina', CGM: 16789865000, turma:'2DS'},
    {nome:'Kamila', CGM: 17766869000, turma:'2DS'},
    {nome:'Kamintina', CGM: 16789865000, turma:'2DS'}
];

console.log(alunos);

console.log(alunos[1]);

console.log(alunos[0].CGM);