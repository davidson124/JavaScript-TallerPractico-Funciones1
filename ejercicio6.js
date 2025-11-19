let estudiantes = [
    {nombre: 'Ana', notas: [85, 92, 78, 90, 88, 76, 95]},
    {nombre: 'Carlos', notas: [85, 92, 78, 90, 88, 76, 95]},
    {nombre: 'Andres', notas: [85, 92, 78, 90, 88, 76, 95]},
    {nombre: 'Julian', notas: [85, 92, 78, 90, 88, 76, 95]},
    {nombre: 'Camila', notas: [85, 92, 78, 90, 88, 76, 95]}
    ];

function promedioNotas(estudianteNotas){
    let sumaNotas =0;
    for(let d = 0; d < estudianteNotas.lenght; d++){
        sumaNotas = sumaNotas + estudianteNotas[d].notas;
        
    }
alert(`la suma de las notas de ${estudianteNotas[d].nombre} es ${sumaNotas}`)
}
promedioNotas(estudiantes);