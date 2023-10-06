const nome = "Pedro"
const sobrenome = 'Gomes'
const idade = 18
const peso = 100
const altura = 1.70
let imc;
let anoNascimento;
let anoAtual = 2023
imc = peso/(altura*altura)
anoNascimento = anoAtual - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, 
pesa ${peso} Kg, tem ${altura} e seu IMC é 
de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)