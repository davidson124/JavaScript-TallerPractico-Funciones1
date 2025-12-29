// 20. Simulador de carrito de compras:
// * Función totalCarrito(carrito) que reciba un array de objetos { producto, precio, cantidad, descuento } y calcule el total a pagar.

// SOLUTION

let carrito = [];
let continuar = true;

function totalCarrito(carrito){
    let total = 0;
    for(let d = 0; d < carrito.length; d ++){
        let producto = carrito[d];
        let subtotal = producto.precio * producto.cantidad; 
        total += subtotal;
        console.log( (d + 1) + '. ' +
            producto.producto +
            ' | Precio: $' + producto.precio +
            ' | Cantidad: ' + producto.cantidad +
            ' | Subtotal: $' + subtotal
        );
    }   
    return total;
}
while(continuar){
    let menu = prompt('Ingrese una opción: \n 1. Comprar.\n 2. Total.\n 3. Salir.');
    if(menu === '1'){
        let nombre = prompt('Nombre del producto: ');
        if(Number(nombre)){
            alert('Este apartado no acepta números.');
            continue;
        }
        if(nombre === '' || nombre === null){
            alert('Dato no ingresado');
           continue;
        }
        let cantidad = Number(prompt('Ingrese la cantidad: '));
        let precio = Number(prompt('Ingrese el valor del producto: '));
        if(isNaN(precio) || isNaN(cantidad)){
            alert('Precio o cantidad inválidos ');
            continue;
        }
        let producto = {
            producto: nombre,
            precio: precio,
            cantidad: cantidad
        };
        carrito.push(producto);
        alert('El producto se agrego correctamente');
    }
    else if(menu === '2'){
        if(carrito.length===0){
            alert('El carrito esta vacio');
            continue;
        }
        let total = totalCarrito(carrito);
        let descuento = total*0.009;
        let totalFinal = total - descuento;
        console.log(carrito);  
        alert('DESCUENTO: '+descuento+'\n'+ 'PRODUCTOS SELECCIONADOS',carrito);
        alert('RESUMEN DE COMPRA\n '+'subtotal: '+ total.toFixed(2)+'\n'+'Total a pagar: '+totalFinal.toFixed(2));
        
    }
    else if (menu === '3') {
        alert('Saliendo del sistema...');
        continuar = false;
    }
    else {
        alert(' Opción inválida');
    }
}
    
   
    
    