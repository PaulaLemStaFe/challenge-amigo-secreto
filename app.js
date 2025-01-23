// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar un array para almacenar los nombres de los amigos
let amigos = [];

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista existente
    // Iterar sobre el arreglo de amigos y crear elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Actualizar el array de amigos
    amigos.push(nombre);
    // Limpiar el campo de entrada
    input.value = "";
    // Actualizar la lista de amigos en la página
    actualizarListaAmigos();
}

// Función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
