// Obtener los elementos del DOM (Document Object Model) por su ID
let numCaracteres = document.getElementById('cantidad'); // Campo de entrada para la cantidad de caracteres
let boton = document.getElementById('generar'); // Botón para generar la contraseña
let mostrarContrasena = document.getElementById('contrasena'); // Campo donde se mostrará la contraseña generada
// Cadena de caracteres disponibles para generar la contraseña
const cadenaCaractertes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&_-{}<>*()';
let limpiarBoton = document.getElementById('limpiar'); // Botón para limpiar la contraseña
let mostrarValidez = document.getElementById('validacion')


/* 
Función que valida la cantidad de caracteres de la contraseña.
Si es mayor o igual a 8, crea una contraseña con la cantidad de 
caracteres solicitados.
*/
function generarContraseña(){
    let newContraseña = ''; //se inicializa la nueva contraseña 
    // Convierte el valor ingresado en el campo de entrada a un número entero
    let numEntrada = parseInt(numCaracteres.value);

    if(numEntrada <8){ // Verifica si el número ingresado es menor que 8
        alert("Tu contraseña debe tener 8 o más caracteres");
        return; // Sale de la función si la cantidad de caracteres es insuficiente
    }

    // Genera la contraseña aleatoria
    for (let i = 0; i<numEntrada; i++){
        // Selecciona un carácter aleatorio de la cadena de caracteres disponibles
        let carAleatorio = cadenaCaractertes[Math.floor(Math.random() * cadenaCaractertes.length)];
        newContraseña += carAleatorio; // Agrega el carácter aleatorio a la nueva contraseña
    }
    // Muestra la contraseña en el campo correspondiente
    mostrarContrasena.value = newContraseña;
    validarSeguridad(newContraseña); //Manda a llamar a la función que valida la contraseña 

}

function validarSeguridad(contrasena) {
    const contieneNumero = /\d/.test(contrasena); // Verifica si la contraseña contiene al menos un número
    const contieneMayuscula = /[A-Z]/.test(contrasena); // Verifica si contiene al menos una letra mayúscula
    const contieneSimbolo = /[!@#$%^&*()]/.test(contrasena); // Verifica si contiene al menos un símbolo especial

    if (contieneNumero && contieneMayuscula && contieneSimbolo) {
        mostrarValidez.value = "La contraseña es fuerte"; // Muestra un mensaje indicando que la contraseña es fuerte
        mostrarValidez.style.color = "green"; // Cambia el color del mensaje a verde
    } else {
        mostrarValidez.value = "La contraseña es débil. Asegúrate de incluir al menos un número, una mayúscula y un símbolo especial.";
        mostrarValidez.style.color = "red"; // Cambia el color del mensaje a rojo
    }
}

// Función para limpiar la contraseña y los mensajes
function limpiarCampos() {
    mostrarContrasena.value = ''; // Limpia el campo de la contraseña generada
    mostrarValidez.value = ''; // Limpia el mensaje de seguridad
    numCaracteres.value = ''; // Limpia el campo de entrada de la cantidad de caracteres
}







