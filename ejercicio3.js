const numPares =[2, 5, 6, 34, 29, 18, 20, 56, 40];

function contPares (numerosParesArray){
    let contador = 0;
    for(let d = 0; d<=numerosParesArray.length; d++){
        if(d == d/2){
            contador = d += 1;
        }
    }
    alert(`la cantidad de números pares son ${contador}`);
}
contPares(numPares);