// Cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();




// Triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

// const lado1 = 6;
// const lado2 = 6;
// const base = 4;
// const altura = 5.5;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 + "cm, " 
//     + ladoTriangulo2 + "cm y " 
//     + baseTriangulo + "cm"
// );

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();





// Círculo
console.group("Circulo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es : " + PI);

// Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

// Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm2");

console.groupEnd();