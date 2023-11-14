
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let calculadora=document.querySelector("#calculadora");
let resultado = document.querySelector("#resultado");

valor1.addEventListener("keyup", function () {
    somar(Number(valor1.value), Number(valor2.value));
});

valor2.addEventListener("keyup", function () {
    somar(Number(valor1.value), Number(valor2.value));
});

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function () {
    somar(Number(valor1.value), Number(valor2.value))
});
let btSubtração = document.querySelector("#btSubtração");
btSoma.addEventListener("click", function () {
    somar(Number(valor1.value), Number(valor2.value))
});
let btMultiplicação = document.querySelector("#btMultiplicação");
btSoma.addEventListener("click", function () {
    somar(Number(valor1.value), Number(valor2.value))
});
let btDivisão = document.querySelector("#btDivisão");
btSoma.addEventListener("click", function () {
    somar(Number(valor1.value), Number(valor2.value))
});
function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}
let selectedLanguage = document.querySelector("#idioma");
selectedLanguage.addEventListener("change", function () {
    if (this.value == "pt") {
        btSoma.value = "Soma";
        btSubtração.value = "Subtração";
        btMultiplicação.value = "Multiplicação";
        btDivisão.value = "Divisão";
        calculadora.textContent = "Calculadora";
    }
    else if (this.value == "en") {
        btSoma.value = "Sum"
        btSubtração.value = "Subtraction";
        btMultiplicação.value = "Multiplication";
        btDivisão.value = "Division";
        calculadora.textContent = "Calculator";
    }
    else if (this.value == "es") {
        btSoma.value = "Suma"
        btSubtração.value = "Sustracción";
        btMultiplicação.value = "Multiplicación";
        btDivisão.value = "División";
        calculadora.textContent = "Calculadora";

    }
})
