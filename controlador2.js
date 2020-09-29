// entradas del sistema

let numeroContrato = "888-158";
let estratoEconomico = "2"
let valorCuentaServicios = 250000;


// proceso

if (estratoEconomico == "1")
{
    console.log("tenes 40% de descuento")
}
else 
    if (estratoEconomico == "2" )  //si se ponene 3 simbolos de = es para comparar ya numeros enteros
    {
      console.log("tenes 30% de descuento")   
    }
    else
        if ( estratoEconomico == "3")
        {
            console.log("tenes descuento del 20%")
        }
            else
            {
                console.log("No tiene ningun descuento")
            }   