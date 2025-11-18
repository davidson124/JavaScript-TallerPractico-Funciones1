// 2. Encontrar el número mayor:
// ○ Función numeroMayor(array) que retorne
// el número más grande de un array.
// ○ Ejemplo:

const numeros = [4, 6, 80, 19, 22, 30, 44, 29, 1, 3];

function NumMa(numerosArray){
    let numeroMayor = numeros[0];
    for(let d = 0; d <= numerosArray.length; d++){
        if(numeroMayor < numerosArray[d] ){
            numeroMayor = numerosArray[d];
            console.log(`El número mayor es ${numeroMayor}`)
        }
    }
}
NumMa(numeros);