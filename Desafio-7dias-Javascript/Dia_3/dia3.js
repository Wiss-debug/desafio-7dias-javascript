function mostrarDestino() {
    var ciudad = document.getElementById("ciudadInput").value.trim();
    var mensaje = document.getElementById("mensaje");
    var imagen = document.getElementById("imagenDestino");
    
    if (ciudad === "Roma") {
        imagen.src = "./assets/roma.PNG";
        imagen.alt = "Coliseo";
        mensaje.textContent = "Bienvenido a Roma, aquí está el Coliseo.";
        imagen.style.display = "block";
    } else if (ciudad === "París") {
        imagen.src = "./assets/Imagem.png";
        imagen.alt = "Torre Eiffel";
        mensaje.textContent = "Bienvenido a París, aquí está la Torre Eiffel.";
        imagen.style.display = "block";
    } else if (ciudad === "") {
        mensaje.textContent = "No escribiste una ciudad válida";
        imagen.style.display = "none";
    } else {
        mensaje.textContent = "La ciudad " + ciudad + " no está dentro del juego destino.";
        imagen.style.display = "none";
    }
}