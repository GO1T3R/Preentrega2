//declarar y asignararles un valor mediante un input
let nombre = prompt("Ingrese el nombre del alumno: ");

// materias y califcaciones
let m1 = prompt("Ingrese el nombre de la primera materia");
let n1 = parseInt(prompt(`Ingrese la nota de la materia: ${m1}`));

let m2 = prompt("Ingrese el nombre de  la segunda materia");
let n2 = parseInt(prompt(`Ingrese la nota de la materia: ${m2}`));

let m3 = prompt("Ingrese el nombre de la tercera materia");
let n3 = parseInt(prompt(`Ingrese la nota de la materia: ${m3}`));

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
}else{
    alert("has reprobado :(");
    alert(`Las materias que has reprobado son: ${JSON.stringify(reprobadas)}`);
}