let entrada = prompt("Por favor, ingrese su nombre");

while (entrada == "") {
    alert ("Campo vacío");
    entrada = prompt("Por favor, ingrese su nombre");
}
if (entrada != ""){
    alert( "Nombre ingresado");
}
   
let entrada2 = prompt("Por favor, ingrese su apellido");
while (entrada2 == "") {
    alert ("Campo vacío");
    entrada2 = prompt("Por favor, ingrese su apellido");
}
if (entrada2 != ""){
    alert( "Apellido ingresado");
}
let entrada3 = prompt( " Por último, ingrese su año de nacimiento");
while ((entrada3 == "") || (entrada3 > 2023)) {
    alert ("Fecha inválida");
    entrada3 = prompt("Por favor, ingrese su año de nacimiento");
}
if ((entrada3 != "") && ( entrada3 < 2023)){
    alert( "Fecha ingresada");
}
let fecha = 2023;
let nacimiento = parseInt(entrada3);
let año = fecha - nacimiento;
let nombrecompleto = entrada + " " + entrada2
let salida = "Bienvenido/a"+ "  " + nombrecompleto + " de " + año + " " + "años";
alert(salida);
