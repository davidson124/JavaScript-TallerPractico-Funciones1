// 10. CONTAR PROPIEDADES DE UN OBJETO

// * Función contarPropiedades(objeto) queretorne el número de propiedades.
// * Ejemplo: contarPropiedades({ a: 1, b: 2 }) → 2.

//SOLUTION

const list = { name: "Ana", lastName: "Quintero", age: 28, weight: 60, height: 164 };

function countProperties(contarLista){
    let counter = 0;
    console.log(`OBJETO`,list
        
    )

    for (let propiedad in list){
        counter ++
    }
    setTimeout(()=>{
        console.log('La cantidad de propiedades del objeto es:',counter);
    },1000)
    
}

countProperties(list)