// 19. Calcular impuestos:

// * Crear la función calcularImpuestos(salarios, tasa) que reciba un array de salarios y aplique la tasa de impuesto a cada uno.
// Retorna un nuevo array.
// * Ejemplo: calcularImpuestos([1000, 2000], 0.1) → [100, 200]

//SOLUTION

let salario = [1200, 1100, 570, 2300, 340, 660];
let porcentaje = 1.4;

function calcularImpuestos(salarios, tasa){
    console.log('TASA DE IMPUESTOS SEGUN SALARIO 2025');
    console.log('    SALARIO      TASA');
    for(let d = 0; d < salarios.length; d ++){
        let monto = salarios[d];
        monto = monto*tasa/100;
        setTimeout(()=>{
            console.log(' > ',salarios[d]+' $' +'   =   '+ monto.toFixed(2)+' %')
        },1200);
    }
}
calcularImpuestos(salario, porcentaje);