let numeroUn = 1;
let stringUn = '1';

// Comparar numeroUn y stringUn

if (numeroUn == stringUn) {  // Usamos == para comparar solo el valor
    document.getElementById('resultados').innerHTML += 'Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes<br>';
} else {
    document.getElementById('resultados').innerHTML += 'Las variables numeroUn y stringUn no tienen el mismo valor<br>';
}