// ======================================
// Universidad El Bosque
// Taller Programación JavaScript
// Simulador de Obligaciones Laborales
// ======================================
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

let salario = "";
let comisiones = "";
let totalhorasExtra = "";
let niveldeRiesgo= "";

//constantes//
const salariominimolegalVigente = 1750905 ;
const salariominimointegralVigente = 22761765;
const subsidiodeTrasporte = 249095;
const uvT = 52.37;
const psalud = 0.04;
const pension = 0.04;
const riego1= 0.522;
const riego2= 1.044;
const riego3= 2.436;
const riego4= 4.350;
const riego5= 6.960;
const fondodesolidaridadPensonal=0.01;

//if y else//

if (edad < 18)  {
    //no se calcula//
    } ;

    if (edad >= 18 && edad <= 25 ){
        //no se calula pq no es beneficiario//
        };

        if (edad >= 25 && edad <= 60 ){
            //se calculan obligaciones bligaciones//
            };

            edad >60 ? pension: false;

            //punto4//
            let calculoIbc =  ibc * ( salario + comisiones + totalhorasExtra);
            let auxilioTransporte = 0;
            if (salarioBasico <= (salarioMinimo * 2)) {
                auxilioTransporte = 162000;
                     // Valor de referencia
                     }
                     let valorPension = calculoIbc * pension;
                     if (fondoSolidaridad) {
                         valorSalud = 162000;
                              // Valor de referencia
                              }
                                  
                                  let valorSalud = calculoIbc * psalud;
                                  let fondoSolidaridad = 0;
                                  if (calculoIBC >= (salarioMinimo * 4)) {
                                      fondoSolidaridad = calculoIBC * 0.01;
                                      }
                                      let arl = calculoIbc * (niveldeRiesgo / 100);

                                      function calcularPorcentaje(base*porcentaje) {
                                          let calcuar = base porcentaje 
                                              return = resultado
                                                  }