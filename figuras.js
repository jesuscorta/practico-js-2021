// Cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm y " 
    + baseTriangulo + "cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// Círculo
console.group("Circulo");

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es : " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

// Area

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm2");

console.groupEnd();