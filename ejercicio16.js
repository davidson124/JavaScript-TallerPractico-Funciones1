// 16. Calcular factorial:

// Crea la función factorial(n) que calcule el
// factorial de un número (ej: 5! = 5*4*3*2*1).
// SOLUTION

const numero = Number(prompt('Ingrese un número mayor a 0: '));

function calcularFactorial(numero){
    if (isNaN(numero) || numero <= 0){
        alert('Error: digitaste un dato incorrecto')
    }else{
         console.log('HALLAR FACTORIAL')
    let factorial = 1;
    let recorrido= '';
    for(let d = numero; d >= 1; d --){
        factorial *= d;
        if (d === 0){
            recorrido += d;
        }else{
            recorrido += '('+ d +') ';
        }
    }
    setTimeout(()=>{
        console.log('El factorial de: '+numero +' es ihgual a',recorrido+' = '+factorial);
    },1300)
    }
   
}
calcularFactorial(numero)