let numeroTreinta = 30;
let stringTreinta = '30';

let resultadoTreinta = '';

// Comparar numeroTreinta y stringTreinta

if (numeroTreinta === stringTreinta) {  // Usamos === para comparar valor y tipo
    document.getElementById('resultados').innerHTML += 'Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo<br>';
} else {
    document.getElementById('resultados').innerHTML += 'Las variables numeroTreinta y stringTreinta no tienen el mismo tipo<br>';
}

