// entradas del sistema

let numeroContrato = "888-158";
let estratoEconomico = 3
let valorCuentaServicios = 250000;


// proceso

/*  if (estratoEconomico == "1")
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
            }   */


// proceso switch, solo se pone si yo se a quien voy a analizar y sus estados

switch (estratoEconomico) // en el switch solo se pone a quien debo analizar sin ninguna condicion como en el if
{

    case 1 : 
        console.log("tenes 40% de descuento");
        break;
    
    case 2 :
        console.log("tenes 30% de descuento");
        break;

    case 3 :
        console.log("tenes descuento del 20%");
        break;
    
    default : 
        console.log("No tiene ningun descuento"); // si nungun caso se pone se pone un caso pro default
        break;
}

