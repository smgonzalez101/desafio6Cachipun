/*1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es decir, cuántas veces deberá jugar contra la computadora.Por cada juego, se debe
mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta dependiendo de las veces que haya indicado el usuario que desea jugar. 
2. Solicitar al usuario que indique su jugada.Las opciones son las siguientes: -Piedra - Papel - Tijera
3. Generar una jugada automática para la máquina usando la función Math.random()
de Javascript.
4. Definir a un ganador considerando la jugada del usuario y la generada
automáticamente para la máquina.
.Indicar el resultado de la partida dependiendo del caso: -Felicitar al ganador en caso de ser el usuario.●Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
la que gane. - Declarar un empate.*/

var piedra = 0;
var papel = 1;
var tijera = 2;
var alternativas = ["Piedra", "Papel", "Tijera"];
var opcionComputadora = 0;
var opcionUsuario;
var acumulador = 0;
var contador = 0;

alert("Juguemos contra la computadora.")
var cantJugar = parseInt(prompt("Ingresa la cantidad de jugadas a realizar: "));
while (contador != cantJugar) {
    contador++;
    acumulador += cantJugar;


    opcionUsuario = prompt("Ingresa tu opción:\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
    alert("Opción que seleccionaste es: " + alternativas[opcionUsuario]);

    if (opcionUsuario == piedra || opcionUsuario == papel || opcionUsuario == tijera) {
        opcionComputadora = Math.floor(Math.random() * (2 - 0 + 1) + 0)
        alert("La computadora eligió: " + alternativas[opcionComputadora]);
        if (opcionUsuario == piedra) {

            if (opcionComputadora == piedra) {
                alert("¡Empate...");

            } else if (opcionComputadora == papel) {
                alert("¡Perdiste...!");

            } else if (opcionComputadora == tijera) {
                alert("¡Ganaste...Felicidades.!");
            }

        } else if (opcionUsuario == papel) {

            if (opcionComputadora == piedra) {
                alert("¡Ganaste...Felicidades!");

            } else if (opcionComputadora == papel) {
                alert("¡Empate...!");

            } else if (opcionComputadora == tijera) {
                alert("¡Perdiste ...!");
            }

        } else if (opcionUsuario == tijera) {

            if (opcionComputadora == piedra) {
                alert("¡Perdiste...!");

            } else if (opcionComputadora == papel) {
                alert("¡Ganador...Felicidades!");

            } else if (opcionComputadora == tijera) {
                alert("¡Empate...!");
            }
        }

    } else {
        alert("Opción ingresada NO válida, intentalo de nuevo!");
        contador--;

    }
}

document.write("Terminó el juego...");