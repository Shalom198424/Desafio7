function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por cero";
    }
}

function calculadora() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt("Elige una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");

        if (opcion === '5') {
            alert("¡Hasta la próxima, Shalom!");
            continuar = false;
            break;
        }
        let num1 = parseFloat(prompt("Introduce el primer número:"));
        let num2 = parseFloat(prompt("Introduce el segundo número:"));

        let resultado;
        switch (opcion) {
            case '1':
                resultado = sumar(num1, num2);
                alert(`El resultado de la suma es: ${resultado}`);
                break;
            case '2':
                resultado = restar(num1, num2);
                alert(`El resultado de la resta es: ${resultado}`);
                break;
            case '3':
                resultado = multiplicar(num1, num2);
                alert(`El resultado de la multiplicación es: ${resultado}`);
                break;
            case '4':
                resultado = dividir(num1, num2);
                alert(`El resultado de la división es: ${resultado}`);
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción entre 1 y 5.");
        }
    }
}

calculadora();
