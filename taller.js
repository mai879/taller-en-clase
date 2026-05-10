
// Universidad El Bosque//
// Taller Programación JavaScript//
// Simulador de Obligaciones Laborales//
;)
//Datos de usuario//
//punto1//

let nombreCompleto = "";
let edad = 0;
let tipodeDocumento = "";
let nùmerodeDocuemnto = ""; 

    nombreCompleto = prompt("Ingrese su nombre completo");
    edad = parseInt(prompt("Ingrese su edad"));
    tipoDocumento = prompt("Ingrese su tipo de documento");
    numeroDocumento = prompt("Ingrese su número de documento");

//punto2//
// validacon del perfil//

if (edad < 18) {

    alert("El usuario es menor de edad y no puede continuar");

} else if (edad < 25) {

    alert("Usuario beneficiario por cotizante");

} else if (edad >= 60) {

    let mesadaPensional = parseFloat(prompt("Ingrese el valor de su mesada pensional"));

    const pensionPorcentaje = 0.04;

    let pension = mesadaPensional * pensionPorcentaje;

    console.log("Mesada pensional: $" + mesadaPensional);
    console.log("Pensión: $" + pension);

} else {

//punto 3//
//informacion salarial//

let salario = 0;
let comisiones = 0;
let totalHorasExtra = 0;
let nivelRiesgo = "";

    salario = parseFloat(prompt("Ingrese su salario"));
    comisiones = parseFloat(prompt("Ingrese sus comisiones"));
    totalHorasExtra = parseFloat(prompt("Ingrese el total de horas extra"));

nivelRiesgo = prompt(
    "Ingrese el nivel de riesgo: Minimo, Bajo, Medio, Alto o Maximo"
);