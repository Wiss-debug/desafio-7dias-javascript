function calculate() {
    // Obtener los valores de los inputs
    let num1 = parseFloat(document.getElementById('num1').value);
    let operation = document.getElementById('operation').value;
    let num2 = parseFloat(document.getElementById('num2').value);

    let result;

    // Comprobar si el usuario seleccionó "Salir"
    if (operation === 'exit') {
        alert("Hasta la próxima");
        document.getElementById('result').textContent = "Programa finalizado";
        return; // Detener la ejecución de la función.
    }

    // Realizar la operación basada en la selección del usuario
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: División por 0';
            }
            break;
        default:
            result = 'Operación no válida';
    }

    // Mostrar el resultado solo si se ha realizado una operación válida
    if (operation !== 'exit') {
        document.getElementById('result').textContent = result;
    }
}


