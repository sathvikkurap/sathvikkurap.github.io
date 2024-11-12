function checkQuadraticResidue() {
    const num = parseInt(document.getElementById("numberInput").value);
    const mod = parseInt(document.getElementById("modInput").value);
    const resultElement = document.getElementById("result");

    if (isNaN(num) || isNaN(mod) || mod <= 0) {
        resultElement.textContent = "Please enter a valid number and a positive modulo.";
        return;
    }

    let isQuadraticResidue = false;
    for (let i = 0; i < mod; i++) {
        if ((i * i) % mod === num % mod) {
            isQuadraticResidue = true;
            break;
        }
    }

    if (isQuadraticResidue) {
        resultElement.textContent = `${num} is a quadratic residue modulo ${mod}.`;
    } else {
        resultElement.textContent = `${num} is NOT a quadratic residue modulo ${mod}.`;
    }
}
