// 6. CALCULAR PROMEDIO DE NOTAS

// * Función promedioNotas(estudiante) que reciba un objeto estudiante con propiedad notas (array) y devuelva el promedio.
// * Ejemplo:
// promedioNotas({ nombre: "Ana", notas: [80, 90, 70] }) → 80


let estudiantes = [
    {nombre: 'Ana', notas: [85, 92, 78, 90, 88, 76, 95]},
    {nombre: 'Carlos', notas: [85, 92, 78, 90, 88, 76, 95]},
    {nombre: 'Andres', notas: [85, 92, 78, 90, 88, 76, 95]},
    {nombre: 'Julian', notas: [85, 92, 78, 90, 88, 76, 95]},
    {nombre: 'Camila', notas: [85, 92, 78, 90, 88, 76, 95]}
    ];

function promedioNotas(estudiante){
    alert('🧮 EVALUE EL PROMEDIO DE NOTAS POR ALUMNO 🧮');
    console.log('🕌 COLEGIO SAN JERONIMO 🏛️');
    const alumno = prompt('🏢Ingrese el nombre del alumno:');
    if(!isNaN(alumno)){
        alert('❌ NO SE ADMITEN NUMEROS ❌');
        return;
    }
    if(alumno === ''){
        alert('❌ NO INGRESASTE ALGUN VALOR ❌');
    }
    let alumnoEncontrado = false;
    let sumaNotas = 0;
    let cantidadNotas = 0;

    for(let d = 0; d < estudiante.length; d++){
        if(estudiante[d].nombre.toLowerCase() === alumno.toLowerCase()){
            alumnoEncontrado = true;
            for(let n = 0; n < estudiante[d].notas.length; n++){
            sumaNotas += estudiante[d].notas[n];
            cantidadNotas++;
            }break;
        } 
    }
setTimeout(()=>{    if(alumnoEncontrado){
        let promedio = sumaNotas / cantidadNotas;
        console.log(
            'ALUMNO: '+alumno +'\nPromedio: ' +promedio.toFixed(2)
        );
        alert(
            'Alumno: '+alumno+'\nPromedio: ' +promedio.toFixed(2)
        );
    }else{
        alert('ALUMNO NO REGISTRADO EN BASE DE DATOS');
    }
},1000)
}
promedioNotas(estudiantes);