// 7. FILTRAR ESTUDUAINTES APROBADOS

// * Función aprobados(listaEstudiantes) que reciba un array de objetos (cada uno con nombre y nota) y devuelva un nuevo array con los que tengan nota >= 60.

// SOLUTION

let estudiantes = [
    {nombre: 'Ana', nota: 59 },
    {nombre: 'Carlos', nota: 23},
    {nombre: 'Andres', nota: 85},
    {nombre: 'Julian', nota: 81},
    {nombre: 'Camila', nota: 61}
    ];
    console.log('ALUMNOS CON NOTAS MAYORES A 60');
function aprobados (listaEstudiantes){
    let notaMayor = 0; 
    for(let d = 0; d < estudiantes.length; d++){
        if(estudiantes[d].nota > 60 ){
            notaMayor = estudiantes[d]
        };
        console.log(notaMayor);
    }
}
aprobados(estudiantes)