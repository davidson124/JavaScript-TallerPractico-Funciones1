// 3. CONTAR ELEMENTOS PARES 

// * Función contarPares(array) que cuente
// cuántos números pares hay.
// * Ejemplo: contarPares([3, 8, 2, 10]) →

const numPares =[2, 5, 6, 34, 29, 18, 20, 56, 40];



function contPares (numerosParesArray){

    console.log('HALLAREMOS LA CANTIDAD DE PARES EN LA LISTA');
    console.log(`La lista se compone de: ${numerosParesArray}`);

    setTimeout(()=>{
        let pares = numerosParesArray[0];
   
    for(let d = 1; d < numerosParesArray.length; d++){
        if( numerosParesArray[d] % 2 === 0){
            pares += 1;
        }
    }
    alert(`la cantidad de números pares son ${pares}`);
    },1800) 
}
contPares(numPares);