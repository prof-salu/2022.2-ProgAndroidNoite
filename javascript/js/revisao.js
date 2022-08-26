// variaveis no JS
    // VARIAVEIS nao podem utulizar palavras reservadasd
    // VARIAVEIS nao podem começar com numeros
    // VARIAVEIS nao pode conter espaços e hifens
    // VARIAVEIS sao case sensitives

var primNome = 'Ana';
//primNome = 13;
let ultNome = 'Oliveira';

//Constantes
//Nao podem ter o seu valor alterado
const PI = 3.1416;

//Impressao

console.log(primNome);
console.log(ultNome);
console.log(PI);
console.log(primNome + ' ' + ultNome);

//Tipos primitivos
    //String
    //Number
    //Boolean
    //undefined
    //null

let disciplina = 'Prog Android';
let cargaHoraria = 80;
let estaAprovado = true;
let curso = undefined;
let campus = null;

console.log(typeof disciplina);
console.log(typeof cargaHoraria);
console.log(typeof estaAprovado);
console.log(typeof curso);
console.log(typeof campus);

//Objetos
let pessoa = {
    nome : 'Carlos',
    sobrenome : 'Miguel',
    idade : 44,
    profissao: 'Mecanico',
    cpf: '123456789'
}

console.log('Nome: ' + pessoa.nome);
console.log('Sobrenome: ' + pessoa.sobrenome);
console.log('Idade: ' + pessoa.idade);
console.log('Profissão: ' + pessoa.profissao);
console.log('CPF: ' + pessoa.cpf);

//Nova propriedade (DOT NOTATION)
pessoa.curso = 'Sistemas de informação';
console.log('Curso: ' + pessoa.curso);

//Nova propriedade (BRACKET NOTATION)
pessoa['natural'] = 'Niteroi';
console.log('Naturalidade: ' + pessoa.natural);

//Funcoes
function saudacao(){
    console.log('Ola mundo!');
}

function saudacaoDisciplina(disciplina){
    console.log('Bem vindos a disciplina de ' + disciplina);
}

function calculaMedia(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

let soma = function(n1, n2){
    return n1 + n2;
}

let mult = (n1, n2) => n1 * n2;

//function calls
saudacao();
saudacaoDisciplina('Desenvolvimento Android');
console.log(calculaMedia(4,6,8));
console.log(soma(8, 7));
console.log(mult(5, 7));