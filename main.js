function main() {
    let NombreDeUsuario = prompt("ingrese su nombre")
    
    alert("hola " + NombreDeUsuario)
    
    alert("En que puedo ayudarte?, puedo ofrecerte las siguientes opciones")

    alert("Puedo consultar tu estado de animo, si quieres que haga esto ingresa: preguntame como estoy. Puedo preguntarte tu edad, para lo que necesito que ingreses: preguntame mi edad. Por otro lado puedo hacerte un calculo de intereses de un supuesto prestamo, en base a la cantidad de cuotas del mismo y el monto que vas a solicitar, para lo que necesito que ingreses: calcula cuanto pagaria de interes. Y por ultimo puedo ofrecerte hacer calculos de factoriales del numero que elijas para lo que necesito que ingreses: hazme un factorial")
    
    let Consigna = prompt("que quieres que haga por ti?").toLowerCase();

    if (Consigna == "preguntame como estoy") {
        let Estado = prompt("Como te encuentras hoy " + NombreDeUsuario + ",bien o mal?").toLowerCase();

        if (Estado == "mal") {
            alert ("lamento mucho que te encuentres mal, espero mejore tu animo durante el dia")
        }
        else if (Estado == "bien") {
            alert ("me alegro mucho que te sientas bien en este día, espero siga mejorando tu animo, saludos!")
        }
    }
    else if (Consigna == "preguntame mi edad") {
        let edadaceptada = 18;
        let edadusuario = parseInt(prompt ("Cual es tu edad " + NombreDeUsuario + "?"))
        if (edadusuario < edadaceptada) {
            alert ("Este no es un sitio para menores, porfavor retirate")
        }else if (edadusuario === edadaceptada) {
            alert ("Que bueno que cumplas con la edad minima requerida, que disfrutes tu experiencia en nuestra pagina")
        }else if (edadusuario > edadaceptada) {
            alert ("Nos alegramos que seas mayor de edad")
        }
    }
    else if (Consigna == "calcula cuanto pagaria de interes") {
        let montosolicitado = prompt ("ingresa la cantidad que deseas solicitar")
        if (0 < Number(montosolicitado) && Number(montosolicitado)<= 100000) {
            let cuotasdeseadas = prompt ("en cuantas cuotas desea pagar su prestamo?")
            if (Number(cuotasdeseadas) <= 6) {
                alert ("monto final a pagar " + (Number(montosolicitado) + Number(montosolicitado * 0.35)) + "$")
            }
            else if (6 < Number(cuotasdeseadas) && Number(cuotasdeseadas) <= 12) {
                alert ("monto final a pagar " + (Number(montosolicitado) + Number(montosolicitado*.45)) + "$")
            }
            else if (12 < Number(cuotasdeseadas) && Number(cuotasdeseadas) <= 24) {
                alert ("monto final a pagar " + (Number(montosolicitado) + Number(montosolicitado*.55)) + "$")
            }
            else {
                alert ("no otorgamos prestamos a más de 24 cuotas")
            }
        }
        else if ( Number(montosolicitado) > 100000) {
            alert ("tenemos un limite de 100000$ por persona, ingresa otro monto " + NombreDeUsuario)
        }
    }
    if (Consigna === "hazme un factorial") {
        
        let numero = prompt ("ingresa el numero que quieres calcular")

        let resultado = 1;

        for (let i = 2; i <= numero; i++) {
        resultado *= i;
        }

        console.log(`El factorial de ${numero} es: ${resultado}`);
    }
}

main();
      