let entrada = prompt("Por favor, ingrese su nombre");
if (entrada == ""){
    alert( "campo vacío");
}
else {
    alert("Nombre ingresado"); 
}
let entrada2 = prompt("Por favor, ingrese su apellido");
if (entrada2 == ""){
    alert( "campo vacío");
}
else {
    alert("Apellido ingresado");
}
let entrada3 = prompt( " Por último, ingrese su año de nacimiento")
if (entrada3 == ""){
    alert( "campo vacío");
}
else if (entrada3 > 2022) {
    alert( "ingrese una fecha valida")
}
else {
    alert("fecha ingresada");
}
let fecha = 2023;
let nacimiento = parseInt(entrada3);
let año = fecha - nacimiento;
let nombrecompleto = entrada + " " + entrada2
let salida = "Bienvenido/a"+ "  " + nombrecompleto + " de " + año + " " + "años";
alert(salida);
