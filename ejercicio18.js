// 18.	Contar vocales en un string:
// *	Crea la función contarVocales(texto) que retorne el número de vocales.
// *	Ejemplo: contarVocales("Hola") → 2.

//SOLUTION

let frase = String(prompt('Ingrese una frase motivacioal: '));

function contarVocales(texto){
    let contador = 0;
    if(Number(texto)){
        alert('NO SE ADMITEN NUMEROS');
        return;
    }
    if(texto == "" || texto == null ){
        alert('NO INGRESASTE INFORMACION');
        return;
    }
    for(let d = 0; d < texto.length; d ++){
        let vocal = texto[d].toLowerCase();
        if(vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u'){
            contador ++;
        }
    }
    alert('CONTANDO LA CANTIDAD DE VOCALES...');
    setTimeout(()=>{
        console.log('La cantidad de vocales es:',contador);
    },1200);
}
contarVocales(frase)