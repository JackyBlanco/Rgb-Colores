// Variables para los componentes de color
let rojo = 0;
let verde = 0;
let azul = 0;

// Obtener referencias a los botones y elementos de color por su ID
let aumentarRojo = document.getElementById("aumentarRojo");
let disminuirRojo = document.getElementById("disminuirRojo");
let aumentarVerde = document.getElementById("aumentarVerde");
let disminuirVerde = document.getElementById("disminuirVerde");
let aumentarAzul = document.getElementById("aumentarAzul");
let disminuirAzul = document.getElementById("disminuirAzul");

let colorCodigoRojo = document.getElementById("colorCodigoRojo");
let colorCodigoVerde = document.getElementById("colorCodigoVerde");
let colorCodigoAzul = document.getElementById("colorCodigoAzul");

// Función para actualizar el color de fondo y los códigos de color
function actualizarColor() {
    document.body.style.backgroundColor = "rgb(" + rojo + ", " + verde + ", " + azul + ")";
    colorCodigoRojo.innerText = "rgb(" + rojo + ", 0, 0)";
    colorCodigoVerde.innerText = "rgb(0, " + verde + ", 0)";
    colorCodigoAzul.innerText = "rgb(0, 0, " + azul + ")";
}

// Función para aumentar el componente de color
function aumentarColor(color) {
    if (color === "rojo") {
        if (rojo < 255) rojo += 5;

    } else if (color === "verde") {
        if (verde < 255) verde += 5;

    } else if (color === "azul") {
        if (azul < 255) azul += 5;
    }
    actualizarColor();
}

// Función para disminuir el componente de color
function disminuirColor(color) {
    if (color === "rojo") {
        if (rojo > 0) rojo -= 5;
    } else if (color === "verde") {
        if (verde > 0) verde -= 5;
    } else if (color === "azul") {
        if (azul > 0) azul -= 5;
    }
    actualizarColor();
}

// Asignar eventos a los botones para aumentar y disminuir los colores
aumentarRojo.addEventListener("click", function() { aumentarColor("rojo"); });
disminuirRojo.addEventListener("click", function() { disminuirColor("rojo"); });

aumentarVerde.addEventListener("click", function() { aumentarColor("verde"); });
disminuirVerde.addEventListener("click", function() { disminuirColor("verde"); });

aumentarAzul.addEventListener("click", function() { aumentarColor("azul"); });
disminuirAzul.addEventListener("click", function() { disminuirColor("azul"); });
