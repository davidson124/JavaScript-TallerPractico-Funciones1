
// 1. Sumar elementos de un array:
// ○ Crea una función sumarArray(array)
// que reciba un array de números y devuelva
// la suma.
// ○ Ejemplo: sumarArray([1, 2, 3]) → 6.

const array = [4, 5, 6, 9, 15, 20, 30];

console.log('Lista: ', array);

setTimeout(()=>{
    function sumarArray(sumArray){
    let sumaNumeros = 0
    for (let array of sumArray){
        sumaNumeros = sumaNumeros + array;
    }
 alert(`la suma de los números es ${sumaNumeros}`)
}
sumarArray(array);
},1000);




