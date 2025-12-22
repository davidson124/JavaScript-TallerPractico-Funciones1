// 17.	Generar tabla de multiplicar:

// Crea la función tablaMultiplicar(n) que imprima la tabla del n del 1 al 10.

//SOLUTION


const numero = Number(prompt('Ingrese el número amultiplicar: '));

function tablaMultiplicar(n){
    if (isNaN(n)){
        alert('NO SE ADMITEN LETRAS');
        return;
    }
    if( n == ' ' || n == null){
        alert('NO INGRESASTE ALGUN VALOR');
        return;
    }
    alert('MULTIPLICANDO...')
    console.log('MULTIPLICION 1 AL 10')
    for (let d = 1; d < 11; d ++){
        let multi = n * d;
    setTimeout(()=>{
        console.log(n + ' * ' + d +' = '+multi);
    },1000);
    }
}
tablaMultiplicar(numero);