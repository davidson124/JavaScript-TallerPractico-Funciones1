
const array = [4, 5, 6, 9, 15, 20];

function sumarArray(sumArray){
    let sumaNumeros = 0
    for (let array of sumArray){
        sumaNumeros = sumaNumeros + array;
    }
 console.log(`la suma de los números es ${sumaNumeros}`)
}
sumarArray(array);


