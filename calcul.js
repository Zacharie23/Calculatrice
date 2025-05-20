function addition(a, b) {
        return a + b;
    }

    function soustraction(a, b) {
        return a - b;
    }

    function multiplication(a, b) {
        return a * b;
    }

    function division(a, b) {
        if (b === 0) {
            number2.classList.add('error-input');
            errorMessage.textContent = 'Erreur : division par zéro';
            return null;
        }
        return a / b;
    }

export { addition, soustraction, multiplication, division };