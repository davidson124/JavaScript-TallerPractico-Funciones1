// 5. BUSCAR ELEMENTO
// * Función buscarElemento(array, elemento) que devuelva true si el elemento existe.
// * Ejemplo: buscarElemento(["rojo","azul"], "azul") → true.

let colores = ["rojo", "verde", "azul", "amarillo", "morado"];


function buscarElemento (encontrarColor){
    console.log('Esta es la lista de colores:',encontrarColor);
    const buscar = prompt('Ingrese un color');
    if(buscar === ''){
        alert('NO INGRESASTE ALGUN VALOR');
        return;
    }
    if(!isNaN(buscar)){
        alert('NO SE ADMITEN NUMEROS');
        return;
    }
    alert('Buscando color ...');

    let esElColor = false;

    for(let d = 0; d < encontrarColor.length; d++){
        if(encontrarColor[d] === buscar.toLowerCase()){
            esElColor=true;
            break;
        }
    }
setTimeout(()=>{
     if(esElColor){
        
             console.log('*u* EL COLOR ESTA EN LA BASE DE DATOS *u*');
    }else{
             console.logt('-_- EL COLOR NO ESTA EN LA BASE DE DATOS -_-'); 
    }   
},1000)
             
}
buscarElemento(colores)


