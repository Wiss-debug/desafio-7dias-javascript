function iniciarPrograma() {
    
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuántos años tienes?");
    let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
    
    alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);
    
    // Bucle para asegurar que la respuesta sea válida
    let gustaLenguaje;
    while (true) {
        gustaLenguaje = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
        
        if (gustaLenguaje === "1") {
            alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
            break; // Salir del bucle si la respuesta es válida
        } else if (gustaLenguaje === "2") {
            alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
            break; // Salir del bucle si la respuesta es válida
        } else {
            alert("Respuesta no válida. Por favor, responde con 1 o 2.");
        }
    }
}

// Ejecutar el programa al cargar la página
iniciarPrograma();
