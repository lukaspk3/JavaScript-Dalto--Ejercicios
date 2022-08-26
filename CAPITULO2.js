/* let free=false
const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad?");
        if (edad > 18) {
            if (time>=2 && time <7 && free == false){
                alert(`son las ${time}hs, pasas gratis`);
                free = true;
            }else {
                alert(`son las ${time}hs, pasa pero pagas`);
            }
        }else {
            alert(`son las ${time}hs, no pasas por menor`);
        }
}

validarCliente (12);
validarCliente (01);
validarCliente (02);
validarCliente (03);
validarCliente (8); */




/* let cantidadAlumnos = prompt("Cuantos Alumnos son?");
let alumnosTotales = [];

for (i=0; i<cantidadAlumnos; i++) {
    alumnosTotales [i] = [prompt("Nombre del Alumno"),0];
}

//alumnosTotales  ejemplo prompt "2"
//    Lucas
//    Manuel



//FUNCION FLECHA
const tomarAsistencia =(nombre,p)=>{ //FUNCION CON 2 DATOS
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++; 
    } 
}



// LLAMAMOS LA FUNCION FLECHA PARA QUE LO HAGA DURANTE 30 DIAS
for (i=0; i<30 ; i++){
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno[0]]}:<br>
    _________Presentes: ${alumnosTotales[alumno][1]}<br>
    _________Ausencias: ${30-alumnosTotales[alumno][1]}`;
    if (30-alumnosTotales[alumno[1]]>18) {
        resultado += "REPROBADO POR AUSENCIAS<br>"
    }else {
        resultado +="<br>"
    }
    document.write(resultado);
}
*/


var operacion= prompt(`que operacion deseas realizar 1-suma; 2-resta; 3-multiplicar; 4-dividir?`);

if (operacion==1) {
    valor1 = prompt(`1er valor a sumar`);
    valor2 = prompt(`2do valor a sumar`);
    suma =parseInt(valor1) + parseInt(valor2);
    alert(suma);
}
else if (operacion==2) {
    valor1 = prompt(`1er valor a restar`);
    valor2 = prompt(`2do valor a restar`);
    resta =parseInt(valor1) - parseInt(valor2);
    alert(resta);
}
else if (operacion==3) {
    valor1 = prompt(`1er valor a multiplicar`);
    valor2 = prompt(`2do valor a multiplicar`);
    multiplicacion =parseInt(valor1) * parseInt(valor2);
    alert(multiplicacion);
}
else if (operacion==4) {
    valor1 = prompt(`1er valor a dividir`);
    valor2 = prompt(`2do valor a dividir`);
    division =parseInt(valor1) / parseInt(valor2);
    alert(division);
}
else {
    alert("no seleccionaste una opcion correcta")
}