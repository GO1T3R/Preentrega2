//declarar y asignararles un valor mediante un input
let nombre = prompt("Ingrese el Nombre del Alumno: ");

// materias y califcaciones
let m1 = prompt("Ingrese el Nombre de la Primera Materia: ");
let n1 = parseInt(prompt(`Ingrese la Nota de la Materia: ${m1}`));

let m2 = prompt("Ingrese el Nombre de la Segunda Materia: ");
let n2 = parseInt(prompt(`Ingrese la Nota de la Materia: ${m2}`));

let m3 = prompt("Ingrese el Nombre de la Tercera Materia: ");
let n3 = parseInt(prompt(`Ingrese la Nota de la Materia: ${m3}`));

// Se almacena los datos en un array
materiasCalificaciones = [
    {materia: m1, calificacion: n1},
    {materia: m2, calificacion: n2},
    {materia: m3, calificacion: n3},
]

//Funcion para sacar el promedio final de la calificacion
function SacarPromedio(){
    promedio = (n1 + n2 + n3) / 3;        
    return promedio.toFixed(2);
    }

//Filtrar calificaciones
let reprobadas;
reprobadas = materiasCalificaciones.filter( promedio => promedio.calificacion < 7);

//condicional si el alumno esta aprovado o reprobado    
if(SacarPromedio() <= 10 && SacarPromedio() >= 7){
    alert("El alumno " + nombre + " ha aprovado con: " + SacarPromedio());
    alert('Tus calificaciones: ')
    materiasCalificaciones.forEach(function(objecto) {
        alert(`sacaste ${objecto.calificacion} en la materia ${objecto.materia}`);
    })
    
}else{
    alert(`El alumno: ${nombre} ha reprobado`);
    alert(`Las materias que has reprobado son:\n ${JSON.stringify(reprobadas)}`);
}