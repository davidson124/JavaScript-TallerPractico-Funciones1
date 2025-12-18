// 12. Buscar el estudiante con la nota más alta:

// * Función mejorEstudiante(listaEstudiantes) que reciba un array de objetos estudiante y devuelva el nombre del que tenga la nota más alta.

//SOLUTION

const claseEstudiantes =[
                        {name:"David",    nota: 2.5},
                        {name: "Carlos",  nota: 3},
                        {name: "Maicol",  nota: 5},
                        {name: "Juan",    nota: 3.5},
                        {name: "Gabriel",  nota: 4.5},
                        {name: "hermes",  nota: 4.9},
                        {name: "Ruben",   nota: 1.5},
                        {name: "Jacinto", nota: 2}

];

function mejorEstudiante(listaEstudiantes){
    let notaMayor = -1;
    let estudiante ='';
    console.log('VERIFICAR LA NOTA MAS ALTA');
    console.log('La lista se compompone de, ',claseEstudiantes)
    for(let d = 0; d < listaEstudiantes.length; d++){
        let estudianteNota = listaEstudiantes[d];
            if(estudianteNota.nota > notaMayor){
                notaMayor = estudianteNota.nota;
                estudiante = estudianteNota.name;
                
            }
    }
    setTimeout(()=>{
        console.log('La nota más alta la tiene '+ estudiante +' con un valor de',notaMayor)
    },1200)
    
    return estudiante;
}
mejorEstudiante(claseEstudiantes)