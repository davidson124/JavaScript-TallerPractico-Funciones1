// 9. COBINAR DOS OBJETOS

// * Función combinarObjetos(objeto1, objeto2) que una sus propiedades.
// * Ejemplo:
// combinarObjetos({ a: 1 }, { b: 2 }) → { a: 1, b: 2 }

//SOLUTION

const listOne = [];
const listTwo = [];

function combinarObjetos(listOne, listTwo){

 listOne.nombre = "david";
 listOne.age = 38;
 listOne.functio = "Obrero";
 listTwo.area = "Store";
 listTwo.proyect="paint";
 listTwo.security="Health and Live";
    console.log(listOne, listTwo);
    const fusion = {
        ...listOne,
        ...listTwo
    };
    setTimeout(()=>{
        console.log(fusion);
    },1400); 
}
 combinarObjetos(listOne, listTwo)

                