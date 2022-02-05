
/*
    ===== Código de TypeScript =====
*/

//Recibe dos parametros de tipo number y devuelve el tipo number
function sumar(a: number, b: number): number {
    return a + b;
}

function sumar2(a: number, b: number) {
    return (a + b).toString();
}

//Funcion sumar en funcion de flecha
const sumarFlecha=(a:number, b:number) => {
    return a + b;
}

//Especificar el tipo de salida a una funcion de flecha
const sumarFlecha2 = (a: number, b: number):number => {
    return a + b;
}

function multiplicar(numero:number, otroNumero?:number, base:number=2):number {
    return numero * base;
}

//Dara como resultado 20 ya que el primer numero es 10 el segundo no se tiene en cuenta y el que viene por
//defecto cargado en los parametros de funcion es 2
const resultado3 = multiplicar(10, 20);
/*el resultado sera 10 ya que el primer numero es 5, no tiene segundo numero pero el numero base viene
cargado en los parametros de la funcion y es 2 por lo cual 2*5=10*/ 
const resultado4 = multiplicar(5);

const resultado = sumar(10, 20);
const resultado2 = sumar(40, 50);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);