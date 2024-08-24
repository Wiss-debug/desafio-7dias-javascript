let numeroDiez = 10;
let stringDiez = '10';

let resultadoDiez = '';

// Comparar numeroDiez y stringDiez

if (numeroDiez == stringDiez) {  // Usamos == para comparar solo el valor
    document.getElementById('resultados').innerHTML += 'Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes<br>';
} else {
    document.getElementById('resultados').innerHTML += 'Las variables numeroDiez y stringDiez no tienen el mismo valor<br>';
}