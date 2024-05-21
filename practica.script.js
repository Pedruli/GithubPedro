var nombre = "Juan";
var apellido = "Pérez";
console.log(nombre + apellido);
var num1 = 10;
var num2 = 5;
var suma = num1 + num2;
console.log(suma);
var nuevaSuma = suma + 3;
console.log(nuevaSuma);

let helado = 1; // Puedes asignar aquí el valor del helado que quieras
let topping = prompt("¿Qué topping desea? (Oreo, KitKat, Kinder)").toLowerCase(); 
let precio = 0;
let precioFinal = 0;

// Condicional para determinar el precio del topping
if (topping === "oreo") {
    precio = 10;
} else if (topping === "kitkat") {
    precio = 15;
} else if (topping === "kinder") {
    precio = 25;
} else {
    console.log("No tenemos este topping");
}

// Si se eligió un topping válido, se calcula el precio final
if (precio !== 0) {
    precioFinal = helado + precio;
    console.log("El helado cuesta $" + precioFinal);
}
// Simulación de pedido con switch
let pedido = prompt("¿Qué desea pedir? (carne, pescado, verdura)").toLowerCase();

switch (pedido) {
    case "carne":
        console.log("Como bebida se le ofrece vino tinto.");
        break;
    case "pescado":
        console.log("Como bebida se le ofrece vino blanco.");
        break;
    case "verdura":
        console.log("Como bebida se le ofrece agua.");
        break;
    default:
        console.log("Elija carne, pescado o verdura.");
}

// Creación y recorrido de un array con un ciclo for
let datos = ["dato1", "dato2", "dato3"];
for (let i = 0; i < datos.length; i++) {
    console.log("Elemento " + (i + 1) + ": " + datos[i]);
}

// Bucle while
let numero = 5;
while (numero < 11) {
    console.log(numero + " es menor que 11");
    numero++;
}
