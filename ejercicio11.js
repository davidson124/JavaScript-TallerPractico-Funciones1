// 11. CALCULAR AREA Y PERIMETRO DE UN RECTANGULO:

// * Función calcularRectangulo(ancho, alto) que retorne un objeto con area y perimetro.
// * Ejemplo:c calcularRectangulo(3, 4) → {area: 12, perimetro: 14 }.

//SOLUCTION

function calcularRectangulo(ancho, alto){
    alert('SE CALCULARA EL AREA Y PERIMETRO DE UN RECTANGULO');
    setTimeout(()=>{
         console.log('La base es: ',ancho);
         console.log('La altura es: ',alto);
         setTimeout(()=>{
         const area = ancho * alto;
         const perimetro = ((ancho*2) + (alto*2));
         console.log('El área del rectángulo es: ',area);
         console.log('El perímetro del rectangulo es ',perimetro);
   },1700)
    },1000)
   
}
calcularRectangulo(3, 4);