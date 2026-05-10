
// Universidad El Bosque//
// Taller Programación JavaScript//
// Simulador de Obligaciones Laborales//
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
    "Ingrese el nivel de riesgo: Minimo, Bajo, Medio, Alto o Maximo" );

//punto 4 //
// calculo de obligaciones//

// CONSTANTES

const salarioMinimoLegalVigente = 1750905;
const subsidioTransporte = 249095;
const UVT = 52.37;

const saludPorcentaje = 0.04;
const pensionPorcentaje = 0.04;
const fondoSolidaridadPorcentaje = 0.01;


// TARIFAS ARL

const riesgos = [

    {
        nombre: "Minimo",
        valor: 0.00522
    },

    {
        nombre: "Bajo",
        valor: 0.01044
    },

    {
        nombre: "Medio",
        valor: 0.02436
    },

    {
        nombre: "Alto",
        valor: 0.04350
    },

    {
        nombre: "Maximo",
        valor: 0.06960
    }

];


// AUXILIO TRANSPORTE

let auxilioTransporte = 0;

if (salario <= salarioMinimoLegalVigente * 2) {

    auxilioTransporte = subsidioTransporte;

}
// la verdad profe no entendi bien esta parte espero me alla quedado bien//

// total devengado =la suma de estos valores //

let totalDevengado =
    salario +
    comisiones +
    totalHorasExtra;
// IBC
let IBC = totalDevengado * 0.70;

// SALUD
let salud = IBC * saludPorcentaje;

// PENSIÓN
let pension = IBC * pensionPorcentaje;


// FONDO SOLIDARIDAD

let fondoSolidaridad = 0;

if (IBC >= salarioMinimoLegalVigente * 4) {

    fondoSolidaridad = IBC * fondoSolidaridadPorcentaje;

}


// ARL

let porcentajeARL = 0;

for (let i = 0; i < riesgos.length; i++) {

    if (
        nivelRiesgo.toLowerCase() ==
        riesgos[i].nombre.toLowerCase()
    ) {

        porcentajeARL = riesgos[i].valor;

    }

}

let ARL = IBC * porcentajeARL;


// RETENCIÓN EN LA FUENTE

let ingresosNoConstitutivos =
    salud +
    pension;
// suma la salud y la pencion

let ingresoGravado =
    totalDevengado -
    ingresosNoConstitutivos;
// se calcula el ingreso 

let ingresoUVT = ingresoGravado / UVT;

let retencionFuente = 0;


if (ingresoUVT > 95 && ingresoUVT <= 150) {

    retencionFuente =
        ((ingresoUVT - 95) * 0.19) * UVT;

}

else if (ingresoUVT > 150 && ingresoUVT <= 360) {

    retencionFuente =
        (((ingresoUVT - 150) * 0.28) + 10) * UVT;

}

else if (ingresoUVT > 360 && ingresoUVT <= 640) {

    retencionFuente =
        (((ingresoUVT - 360) * 0.33) + 69) * UVT;

}

else if (ingresoUVT > 640 && ingresoUVT <= 945) {

    retencionFuente =
        (((ingresoUVT - 640) * 0.35) + 162) * UVT;

}

else if (ingresoUVT > 945 && ingresoUVT <= 2300) {

    retencionFuente =
        (((ingresoUVT - 945) * 0.37) + 268) * UVT;

}

else if (ingresoUVT > 2300) {

    retencionFuente =
        (((ingresoUVT - 2300) * 0.39) + 770) * UVT;

}
// estos else permiten que el sistema tome desiciones dependiendo de distintos casos//

// deducciones

let totalDeducciones =
    salud +
    pension +
    fondoSolidaridad +
    ARL +
    retencionFuente;


// total a pagar

let totalPagar =
    totalDevengado +
    auxilioTransporte -
    totalDeducciones;

