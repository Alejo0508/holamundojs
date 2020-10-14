

// esto lo que dice es que vaya al documento html y traiga una etiqueta por id y se la asigna a la variable titulitarheta2
let titulotarjeta2 = document.getElementById("titulo2");
let audiovariable = document.getElementById("audio1");
let botonpista1 = document.getElementById("boton1");
let botonpista2 = document.getElementById("boton2");


//let img1 = document.getElementById("img1");
//let img2 = document.getElementById("img2");

// imprime las variables apra ver si si estan referenciadas
console.log(titulotarjeta2); 
console.log(audiovariable); 


// modificar el texto de una referencia

titulotarjeta2.textContent = "Banda Coldplay";


// modificar la fuente o el recurso que se carga en un tag o etiqueta multimedia

//audiovariable.src = "audio/audio2.mp3";
//img1.src = "img/imagen3.jpg";
//img2.src = "img/imagen3.jpg";



// detectar eventos de click

botonpista1.addEventListener("click", cargarpista);
botonpista2.addEventListener("click", cargarpista2);




function cargarpista (){
    audiovariable.src = "audio/audio1.mp3";
}
function cargarpista2 (){
    audiovariable.src = "audio/audio2.mp3";
}






