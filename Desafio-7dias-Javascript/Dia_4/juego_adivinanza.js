        function jugar() {
            // Genera un número aleatorio entre 0 y 10
            const minimo = 0;
            const maximo = 10;
            const numeroAdivinar = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

            // Número de intentos permitidos
            const maxIntentos = 3;

            let intento = 0;
            let adivinado = false;

            while (intento < maxIntentos) {
                let respuesta = parseInt(prompt("Adivina el número (entre 0 y 10): "));

                if (respuesta === numeroAdivinar) {
                    alert("¡Felicidades! Has adivinado el número.");
                    adivinado = true;
                    break;
                } else {
                    alert("Incorrecto, intenta de nuevo.");
                }

                intento++;
            }

            if (!adivinado) {
                alert("Lo siento, no adivinaste el número. El número era: " + numeroAdivinar);
            }
        }
