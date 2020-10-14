
// referenciar id del html

let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let pass = document.getElementById("pass");

let botonenviar = document.getElementById("enviar");


// verificar el contenidod e las cajas
botonenviar.addEventListener("click", validarformulario);



// funcion para verificzr el envio de datos

function validarformulario (evento) {  // se le agrega un parametro al formulario para que esto prevenga el default y se pause si no tiene nada en el formilario

    evento.preventDefault();

    console.log(nombre.value); // esto captura los valores de las cajas del formulario
    console.log(correo.value);
    console.log(pass.value);

    if (nombre.value == "" && correo.value == "" && pass.value == "")
    {
        nombre.classList.add("is-invalid");  // esto agrega una clase se bootstrap para colorear cajas rojas
        correo.classList.add("is-invalid");
        pass.classList.add("is-invalid");
    }
    else
    if (nombre.value == "" && correo.value != "")
    {
        nombre.classList.add("is-invalid");  // cuando se le pone el remove es para quitar el color rojo si esta lleno
        correo.classList.remove("is-invalid");
        pass.classList.add("is-invalid");
    }
    else
    if (nombre.value != "" && correo.value == "")
    {
        nombre.classList.remove("is-invalid");  // esto agrega una clase se bootstrap para colorear cajas rojas
        correo.classList.add("is-invalid");
        pass.classList.add("is-invalid");
    }

}