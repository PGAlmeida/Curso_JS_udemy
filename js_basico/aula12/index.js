let a = 'A';
let b = 'B';
let c = 'C';

let aux = a
a = b
b = c
c = aux

[a ,b, c] = [b, c, a]

console.log(a, b, c)