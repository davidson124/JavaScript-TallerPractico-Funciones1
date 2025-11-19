let colores = ["rojo", "verde", "azul", "amarillo", "morado"];

function buscarElemento (encontrarColor){

    let buscar = prompt('Ingrese un color').toLowerCase();

    alert('Buscando color ...');

    for(let d = 0; d < encontrarColor.length; d++){
        if(buscar == encontrarColor[d] ){
            return alert('El color esta en base de datos');
         
        }
        if(buscar == Number(buscar)){
           return alert('Ingrese un valor correcto');
            
        }
        else{
            return alert('El color no esta en base de datos');
          
        }
        
    }
              
}
buscarElemento(colores)


