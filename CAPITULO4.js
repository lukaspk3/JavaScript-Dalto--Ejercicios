class Calculadora {

    constructor(){}
    suma(num1,num2){
        return(num1)+(num2);
    }
    resta(num1,num2){
        return(num1)-(num2);
    }
    multiplicacion(num1,num2){
        return(num1)*(num2);
    }
    division(num1,num2){
        return(num1)/(num2);
    }
    potenciaCuadrado(num1){
        return(num1)*(num1);
    }
    raizCuadrado(num1){
        return Math.sqrt(parseInt(num1));
    }
    raizCubo(num1){
        return Math.cbrt(parseInt(num1));
    }
}

var calculadora= new Calculadora();

var operacion= prompt(`que operacion deseas realizar 1-suma; 2-resta; 3-multiplicar; 4-dividir; 5-potencia2; 6-raiz2; 7-raiz3 ?`);

if (operacion==1) {
    num1=parseFloat(prompt(`1er valor a sumar`));
    num2=parseFloat(prompt(`2do valor a sumar`));
    alert(calculadora.suma(num1,num2));
    }
else if (operacion==2) {
    num1=parseFloat(prompt(`1er valor a restar`));
    num2=parseFloat(prompt(`2do valor a restar`));
    alert(calculadora.resta(num1,num2));
}
else if (operacion==3) {
    num1=parseFloat(prompt(`1er valor a multiplicar`));
    num2=parseFloat(prompt(`2do valor a multiplicar`));
    alert(calculadora.multiplicacion(num1,num2));
}
else if (operacion==4) {
    num1=parseFloat(prompt(`1er valor a dividir`));
    num2=parseFloat(prompt(`2do valor a dividir`));
    alert(calculadora.division(num1,num2));
}
else if (operacion==5) {
    num1=prompt(`1er valor a potenciar al cuadrado`);
    alert(calculadora.potenciaCuadrado(num1));
}
else if (operacion==6) {
    num1 = prompt(`valor a operar a la raiz cuadrada`);
    alert(calculadora.raizCuadrado(num1));
}
else if (operacion==7) {
    num1 = prompt(`valor a operar a la raiz cubica`);
    alert(calculadora.raizCubo(num1));
}
else {
    alert("no seleccionaste una opcion correcta")
}
