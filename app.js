// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Eliminar espacios en blanco

    // Validación: verificar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Verificar que el nombre no esté repetido
    if (listaDeAmigos.includes(nombreAmigo)) {
        alert('Este amigo ya fue agregado.');
        return;
    }

    // Agregar el nombre al array
    listaDeAmigos.push(nombreAmigo);

    // Actualizar la lista en pantalla
    actualizarListaDeAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

// Mostrar la lista de amigos 
function actualizarListaDeAmigos() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Limpiar la lista antes de actualizar

    listaDeAmigos.forEach(function (amigo) {
        const elemento = document.createElement('li');
        elemento.textContent = amigo;
        listaHTML.appendChild(elemento);
    });
}

// Sortear un amigo secreto
function sortearAmigo() {
    const resultadoHTML = document.getElementById('resultado');

    // Debe haber al menos dos amigos para sortear
    if (listaDeAmigos.length < 2) {
        alert('Debes agregar al menos dos amigos para realizar el sorteo.');
        return;
    }

    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    resultadoHTML.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
