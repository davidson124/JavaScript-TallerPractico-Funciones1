// 2. Encontrar el número mayor:
// ○ Función numeroMayor(array) que retorne
// el número más grande de un array.
// ○ Ejemplo:

const numeros = [4, 6, 80, 19, 22, 30, 44, 29, 1, 3];

function NumMa (numerosArray){

    console.log(`Lista de números: ${numerosArray}`)

    let numeroMayor = numerosArray[0];

    for(let d = 1; d < numerosArray.length; d++){
        if(numerosArray[d] > numeroMayor ){
            numeroMayor = numerosArray[d];
        }
    }
setTimeout(()=>{
    alert(`Entonces, el número mayor es: ${numeroMayor}`)
},1300)
    
}
NumMa(numeros);


