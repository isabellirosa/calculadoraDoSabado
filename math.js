
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let calculadora=document.querySelector("#calculadora");
let resultado = document.querySelector("#resultado");

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function () {
    somar(Number(valor1.value), Number(valor2.value))
});
let btSubtração = document.querySelector("#btSubtração");
btSubtração.addEventListener("click", function () {
    subtrair(Number(valor1.value), Number(valor2.value))
});
let btMultiplicação = document.querySelector("#btMultiplicação");
btMultiplicação.addEventListener("click", function () {
    multiplicar(Number(valor1.value), Number(valor2.value))
});
let btDivisão = document.querySelector("#btDivisão");
btDivisão.addEventListener("click", function () {
    dividir(Number(valor1.value), Number(valor2.value))
});
function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}
function subtrair(a, b) {
    let subtracao = a - b;
    resultado.innerHTML = subtracao;
}
function dividir(a, b) {
    let divisao = a / b;
    resultado.innerHTML = divisao;
}
function multiplicar(a, b) {
    let multiplicacao = a * b;
    resultado.innerHTML = multiplicacao;
}
/*let selectedLanguage = document.querySelector("#idioma");
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
})*/

