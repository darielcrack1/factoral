function factorial(n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result.toLocaleString();
}

const form = document.getElementById('factorial-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const number = form.elements['number'].value;
    if (number < 0) {
        alert('Por favor ingrese un número entero positivo.');
    } else {
        const result = factorial(number);
        resultDiv.textContent = `El factorial de ${number} es ${result}.`;
    }
});