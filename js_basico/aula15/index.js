//let n1 = 9.15874;
//let n2 = Math.floor(n1);
//let n2 = Math.ceil(n1); arredondar
//let n2 = Math.round(n1)

//console.log(Math.max(1,2,25,5)) - maior
//console.log(Math.min(1,2,25,5)) - menor

//const aleatorio = Math.random()
//console.log(aleatorio)

//let raiz = 2
//console.log(raiz ** 0.5)// raiz quadrada

const numero = Number(prompt('Digite um número: '))
const numeroTitulo = document.getElementById('numero_titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}. </p>`;
texto.innerHTML += `<p>Arredondar para baixa: ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p>Arredondar para cima: ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}. </p>`;