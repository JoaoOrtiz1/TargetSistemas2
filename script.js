
/*Exercicio 1 */
var indice = 13, soma = 0, k = 0;

while(k < indice){
    k = k + 1;
    soma = soma + k;
}

console.log(soma);

/*Exercicio 2 */

let maxNumber = prompt("Digite o número para verificar na sequência de Fibonacci: ");

maxNumber = parseInt(maxNumber);


if(isNaN(maxNumber)) {
  console.log("Número inválido!");
}else{
  let fibonacci = [0, 1];
  while(fibonacci[fibonacci.length - 1] <= maxNumber){
    let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextNumber);
}
  fibonacci.pop();

  console.log("Sequência de Fibonacci até " + maxNumber + ":");
  console.log(fibonacci);
  if(fibonacci.includes(maxNumber)){
    console.log("O numero " + maxNumber + " está na sequência ");
  }else{
    console.log("O numero " + maxNumber + " não está na sequência ");
  }
}

/*Exercicio 3 

a-)1, 3 ,5 ,7 ,9  -- somar 2 na posição anterior para a proxima posição
b-)2, 4, 8, 16, 32, 64, 128 -- multiplicar a posição anterior por 2 
c-)0, 1, 4, 9, 16, 25, 36, 49 -- quadrado dos numeros ex: 6*6 = 36, 7*7 = 49
d-)4, 16, 36, 64, 100 -- sequencia de numeros pares consecutivos ao quadrado ex: (2*4)*8 = 64, (2*5)*(2*5) = 100
e-)1, 1, 2, 3, 5, 8, 13 -- sequência de Fibonacci onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
f-)2,10, 12, 16, 17, 18, 19, 22
*/
/*Exercicio 4 

Nenhum deles pois no momento do cruzamento os 2 veículos estarão a mesma distancia de Ribeirão preto, 
o cruzamento deles é o ponto em que os 2 veículos estarão juntos ou seja na mesma distancia de qualquer ponto


*/




/*Exercicio 5 */
let texto = "TargetSistemas"; 
let textoInvertido = ""; 


for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}

console.log("Texto original: " + texto);
console.log("Texto invertido: " + textoInvertido);