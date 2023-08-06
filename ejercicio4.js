const productos = [
    {nombre:"huevos", precio: 1700},
    {nombre:"harina", precio: 500},
    {nombre:"azúcar", precio: 600},
    {nombre:"mantequilla", precio: 700},
    {nombre:"leche", precio: 450},
]

let carrito = []

let seleccion = prompt("¿Desea comprar algún producto? (si o no)")

while( seleccion!= "si" && seleccion != "no"){
alert ("selecciona si o no")
seleccion = prompt("Hola, ¿desea comprar algún producto? (si o no)")
}
 if(seleccion == "si"){
    alert(" A continuación, nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => (`${producto.nombre} ${producto.precio} $`))
        alert(todoslosProductos.join (" - "))
 } else if(seleccion == "no"){
    alert(" Muchas gracias, hasta pronto")
 }

 while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito ingresando el nombre")
    let precio = 0

 if(producto =="huevos" || producto == ("azucar"|| "azúcar" ) || producto =="harina" || producto =="mantequilla"|| producto =="leche"  ){
    switch(producto){
        case "huevos":
        precio = 1700;
        break
        case ("azucar" || "azúcar"):
        precio = 600;
        break
        case "harina":
        precio = 500;
        break
        case "mantequilla":
        precio = 700;
        break
        case "leche":
        precio = 450;
        break
     default:
        break;
    }
    let unidades = parseInt(prompt ("¿Cuántas unidades desea llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt( "¿Desea agregar más productos?")
    while( seleccion == "no"){
        alert("Gracias por su compra, regrese pronto.")
        carrito.forEach((carritoFinal) => {
            console.log(`producto:${carritoFinal.producto},  unidades:${carritoFinal.unidades}, 
            total a pagar: ${carritoFinal.unidades} * ${carritoFinal.precio} `)
        })
        break
    }
}

const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades,0)
alert(`el total a pagar por su compra es: ${total}`)