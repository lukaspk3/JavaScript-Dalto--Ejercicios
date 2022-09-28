// class Calculadora {

//     constructor(){}
//     suma(num1,num2){
//         return(num1)+(num2);
//     }
//     resta(num1,num2){
//         return(num1)-(num2);
//     }
//     multiplicacion(num1,num2){
//         return(num1)*(num2);
//     }
//     division(num1,num2){
//         return(num1)/(num2);
//     }
//     potenciaCuadrado(num1){
//         return(num1)*(num1);
//     }
//     raizCuadrado(num1){
//         return Math.sqrt(parseInt(num1));
//     }
//     raizCubo(num1){
//         return Math.cbrt(parseInt(num1));
//     }
// }

// var calculadora= new Calculadora();

// var operacion= prompt(`que operacion deseas realizar 1-suma; 2-resta; 3-multiplicar; 4-dividir; 5-potencia2; 6-raiz2; 7-raiz3 ?`);


// if (operacion==1) {
//     num1=parseFloat(prompt(`1er valor a sumar`));
//     num2=parseFloat(prompt(`2do valor a sumar`));
//     alert(calculadora.suma(num1,num2));
// }
// else if (operacion==2) {
//     num1=parseFloat(prompt(`1er valor a restar`));
//     num2=parseFloat(prompt(`2do valor a restar`));
//     alert(calculadora.resta(num1,num2));
// }
// else if (operacion==3) {
//     num1=parseFloat(prompt(`1er valor a multiplicar`));
//     num2=parseFloat(prompt(`2do valor a multiplicar`));
//     alert(calculadora.multiplicacion(num1,num2));
// }
// else if (operacion==4) {
//     num1=parseFloat(prompt(`1er valor a dividir`));
//     num2=parseFloat(prompt(`2do valor a dividir`));
//     alert(calculadora.division(num1,num2));
// }
// else if (operacion==5) {
//     num1=prompt(`1er valor a potenciar al cuadrado`);
//     alert(calculadora.potenciaCuadrado(num1));
// }
// else if (operacion==6) {
//     num1 = prompt(`valor a operar a la raiz cuadrada`);
//     alert(calculadora.raizCuadrado(num1));
// }
// else if (operacion==7) {
//     num1 = prompt(`valor a operar a la raiz cubica`);
//     alert(calculadora.raizCubo(num1));
// }
// else {
//     alert("no seleccionaste una opcion correcta")
// }



// EJERCICIO INSCRIPCION MATERIAS

const obtenerInformacion = (materia)=> {
    const MATERIAS = {
        fisica : ["Monica", "Miguel", "Pepe", "Roberta", "Lucas", "Martin"],
        quimica : ["Pablo", "Juan", "Paco", "Pedro", "Roberta", "Lucas"],
        matematica : ["Liliana", "Pato", "Gaby", "Lucas", "Martin", "Milena"],
        programacion : ["Manuel", "Pedro", "Lucas", "Bruno", "Milena", "Martin"],
    }
    if (MATERIAS[materia] !== undefined){
        return [MATERIAS[materia],materia];
    } else{
        return MATERIAS;
    }
}

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia); 
    let profesor = informacion[0][0]; 
    let alumnos = informacion[0];

//    console.log(`Array completo\n ${informacion} \n\n`);

    alumnos.shift();//elimina el primer elemento osea el profeor

    console.log(`Alumnos presentes en ${(informacion[1])}, son ${alumnos}`);
    console.log(`El profesor es ${profesor}`);
}


const cantidadClases = (alumno) => {
    let informacion = obtenerInformacion();
    let cantidadTotal=0;
    let materiasPresente = [];
    for (info in informacion) {
        if (informacion [info].includes(alumno)) {
        cantidadTotal++;
        materiasPresente.push(" "+ info);
        }
    }
    //console.log(info);
    return console.log(`${alumno} esta en ${cantidadTotal} materias
    Esta cursando ${materiasPresente}
    `);
};



// mostrarInformacion(`fisica`);
// mostrarInformacion(`quimica`);
// mostrarInformacion(`matematica`);
// mostrarInformacion(`programacion`);
cantidadClases(`Lucas`);

