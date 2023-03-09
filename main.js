let refresh = document.getElementById('refresh'); //boton para recargar la pagina
refresh.addEventListener('click', _ => {
            location.reload();
})


//declarar y asignararles un valor mediante un input
let nombre = prompt("Ingrese el nombre del alumno: ");

let n1 = parseInt(prompt("Ingrese una nota: "));
let n2 = parseInt(prompt("Ingrese la siguiente nota: "));
let n3 = parseInt(prompt("Ingrese la ultima nota"));


//Funcion para sacar el promedio final de la calificacion
function SacarPromedio(){
    promedio = (n1 + n2 + n3) / 3;        
    return promedio.toFixed(2);

    }

//condicional si el alumno esta aprovado o reprobado    
if(SacarPromedio() <= 10 && SacarPromedio() >= 7){
    alert("El alumno " + nombre + " ha aprovado con: " + SacarPromedio());
}else{
    alert("has reprobado :(");
}