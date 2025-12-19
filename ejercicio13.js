// 13. Eliminar elementos duplicados de un array:
// * Función eliminarDuplicados(array) que retorne un nuevo array sin duplicados.
// * Ejemplo: eliminarDuplicados([1, 2, 2, 3]) → [1, 2, 3].

//SOLUTION

const list = [20, 1, 15, 2, 2, 3, 15, 20];

function eliminarDuplicados(array){
    console.log(list)
    for(let d = 0; d < array.length; d ++){
       for(let r = array.length - 1; r > d; r --){
            if(array[r] === array[d]){
             array.splice(r, 1);
             
           }
        }
    }
    
    return array;
}
setTimeout(()=>{
    console.log(eliminarDuplicados(list));
},1000)

eliminarDuplicados(list)
