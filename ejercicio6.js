function suma(a,b){
    return a + b
}
function resta(a,b){
    return a - b
}

function calculadora(operador){
    if (operador === "+"){
        return suma
    } else if(operador === "-"){
        return resta
    }
}

let respuesta = calculadora ("+")
console.log(respuesta(5,5))
