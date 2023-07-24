let contador = 0;
let passGuardada = "galarga";

do{
    let passIngresada = prompt (" Ingresa tu pass");

    if(passIngresada != passGuardada){
        contador += 1
        alert (`Incorrecto, van ${contador} intentos de 3`);
    }

    if( passGuardada === passIngresada){
        console.log( `Bienvenido/a`);
        break;
    }

    if (contador === 3) {
        alert("Has alcanzado el máximo número de intentos. Acceso denegado.");
        break;
    }
}while (contador < 3);