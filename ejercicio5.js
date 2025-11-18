let colores = ["rojo", "verde", "azul", "amarillo", "morado"];

let buscar = String(prompt('Ingrese un color'));

alert('Buscando color ...');

function buscarElemento (encontrarColor){
    for(d of encontrarColor){
        if(buscar == d){
            alert('El color esta en base de datos');
            return;
        }
        if(buscar == Number(buscar)){
            alert('Ingrese un valor correcto');
            return;
        }
        else{
            alert('El color no esta en base de datos');
            return;
        }
        
    }
              
}
buscarElemento(colores)


