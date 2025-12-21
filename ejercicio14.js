// 14. Ordenar array de números (ascendente):

// * Función ordenarArray(array) que ordene números sin usar sort().
// * Pista: Usa el algoritmo Bubble Sort.

const array = [1,4,56,76,34,22,657,12,45,2,5,8,2,4,6];
function ordenarArray(array){

    console.log('BUBBLE SORT');
    console.log('Esta es la lista a ordenar',array)
    for(let n = 0; n < array.length - 1; n ++){
        for(let d = 0; d < array.length - n -1; d ++){
            if(array[d]>array[d+1]){
                let temp = array[d];
                array[d]=array[d+1];
                array[d+1]=temp;
            }
        }
    }
    setTimeout(()=>{
        console.log('Lista ordenada', array);
    },1500);  
}
ordenarArray(array)