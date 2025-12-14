// 4. INVERTIR ARRAY

// * Función invertirArray(array) que retorne un nuevo array invertido.
// * Ejemplo: invertirArray(["a", "b","c"]) → ["c", "b", "a"].


const invert = ['david', 'pedro', 'carlos', 'ana'];

function invertArray (ArrayInvertido){

    console.log('INVERTIREMOS LA LISTA');
    console.log(`La lista ha invertir es: ${ArrayInvertido}`);
setTimeout(()=>{
let d = ArrayInvertido.length-1;
    do{
        console.log('*',ArrayInvertido[d])
        d--
    }while(d >= 0)
        
},1300)
}
invertArray(invert);

