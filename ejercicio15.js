// 15.	Validar contraseña:
// ○	Función validarContraseña(contraseña) que veriﬁque si tiene al menos 8 caracteres, un número y una mayúscula. Retorne true o false.

//SOLUTION

let contraseñaIngresada = prompt('Ingrese la contraseña: ');

function validarContraseña(contraseña){
    
    if(contraseña.length < 8 ){
        alert('LA CONTRASEÑA TIENE MENOS DE 8 CARACTERES');
        return;
    }
    let ingresoNumero = false;
    let ingresoMayuscula = false;
    for (let d = 0; d < contraseña.length; d ++){
        let comparador = contraseña[d];
        
        if (comparador >= '0' && comparador <= '9'){
            ingresoNumero = true;
        }
        if(comparador >= 'A' && comparador <= 'Z' ){
            ingresoMayuscula=true;
        } 
    }
    if(ingresoNumero && ingresoMayuscula){
            alert('LA CONTRASEÑA SE CREO CORRECTAMENTE');
        }else{
            alert('LA CONTRASEÑA DEBE TENER AL MENOS UN NUMERO \nY UNA LETRA MAYUSCULA');
        }
}
validarContraseña(contraseñaIngresada)