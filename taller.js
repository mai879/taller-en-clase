// Universidad El Bosque//
// Taller Programación JavaScript//
// Simulador de Obligaciones Laborales//

//Datos de usuario//
//punto1//

let nombreCompleto = "";
let edad = 0;
let tipoDocumento = "";
let numeroDocumento = "";

nombreCompleto = prompt("Ingrese su nombre completo");
edad = parseInt(prompt("Ingrese su edad"));
tipoDocumento = prompt("Ingrese su tipo de documento (RC, TI, CC, CE, PP)");
numeroDocumento = prompt("Ingrese su número de documento (sin puntos ni comas)");

// validacion nombre: solo letras y espacios //
while (!nombreCompleto || !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(nombreCompleto) || nombreCompleto.trim() === "") {
    alert("Nombre inválido. Solo se permiten letras y espacios.");
    nombreCompleto = prompt("Ingrese su nombre completo");
}

// validacion edad: solo entre 0 y 100 //
while (isNaN(edad) || edad < 0 || edad > 100) {
    alert("Edad inválida. Ingrese un número entre 0 y 100.");
    edad = parseInt(prompt("Ingrese su edad"));
}

// validacion tipo de documento //
let tiposValidos = ["RC", "TI", "CC", "CE", "PP"];
while (!tipoDocumento || !tiposValidos.includes(tipoDocumento.toUpperCase())) {
    alert("Tipo de documento inválido. Las opciones son: RC, TI, CC, CE, PP");
    tipoDocumento = prompt("Ingrese su tipo de documento (RC, TI, CC, CE, PP)");
}

// validacion numero de documento: solo digitos, entre 5 y 15 caracteres //
while (!numeroDocumento || !/^\d{5,15}$/.test(numeroDocumento)) {
    alert("Número de documento inválido. Solo dígitos, entre 5 y 15 caracteres, sin puntos ni comas.");
    numeroDocumento = prompt("Ingrese su número de documento (sin puntos ni comas)");
}

//punto2//
// validacion del perfil//

if (edad < 18) {

    alert("El usuario es menor de edad y no puede continuar");

} else if (edad < 25) {

    alert("Usuario beneficiario por cotizante");

} else if (edad >= 60) {

    let mesadaPensional = parseFloat(prompt("Ingrese el valor de su mesada pensional"));

    // validacion mesada pensional //
    while (isNaN(mesadaPensional) || mesadaPensional <= 0) {
        alert("Valor inválido. La mesada pensional debe ser mayor a 0.");
        mesadaPensional = parseFloat(prompt("Ingrese el valor de su mesada pensional"));
    }

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

    // validacion salario //
    while (isNaN(salario) || salario <= 0) {
        alert("Salario inválido. Debe ser un número mayor a 0.");
        salario = parseFloat(prompt("Ingrese su salario"));
    }

    comisiones = parseFloat(prompt("Ingrese sus comisiones (0 si no aplica)"));

    // validacion comisiones //
    while (isNaN(comisiones) || comisiones < 0) {
        alert("Valor inválido. Las comisiones no pueden ser negativas.");
        comisiones = parseFloat(prompt("Ingrese sus comisiones (0 si no aplica)"));
    }

    totalHorasExtra = parseFloat(prompt("Ingrese el total de horas extra (0 si no aplica)"));

    // validacion horas extra //
    while (isNaN(totalHorasExtra) || totalHorasExtra < 0) {
        alert("Valor inválido. Las horas extra no pueden ser negativas.");
        totalHorasExtra = parseFloat(prompt("Ingrese el total de horas extra (0 si no aplica)"));
    }

    let nivelesValidos = ["minimo", "bajo", "medio", "alto", "maximo"];
    nivelRiesgo = prompt("Ingrese el nivel de riesgo: Minimo, Bajo, Medio, Alto o Maximo");

    // validacion nivel de riesgo //
    while (!nivelRiesgo || !nivelesValidos.includes(nivelRiesgo.toLowerCase())) {
        alert("Nivel de riesgo inválido. Las opciones son: Minimo, Bajo, Medio, Alto o Maximo");
        nivelRiesgo = prompt("Ingrese el nivel de riesgo: Minimo, Bajo, Medio, Alto o Maximo");
    }

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

// total devengado = la suma de estos valores //

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

let ingresoGravado =
    totalDevengado -
    ingresosNoConstitutivos;

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

//punto 5
// resultados//
console.log("Nombre: " + nombreCompleto);

console.log("Documento: " + numeroDocumento);

console.log("Salario: $" + salario);

console.log("Ingreso Base Cotización: $" + IBC);

console.log(
    "Fórmula: " +
    salario +
    " + " +
    auxilioTransporte +
    " + " +
    comisiones +
    " + " +
    totalHorasExtra
);

console.log("Salud: $" + salud);

console.log("Pensión: $" + pension);

console.log("Fondo Solidaridad: $" + fondoSolidaridad);

console.log("ARL: $" + ARL);

console.log("Retención Fuente: $" + retencionFuente);

console.log("Total Deducciones: $" + totalDeducciones);

console.log("TOTAL A PAGAR: $" + totalPagar);

}