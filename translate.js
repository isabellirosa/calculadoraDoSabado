let linguaPortuguesa = document.createElement ("script");
linguaPortuguesa.src= "./idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

let linguaEspanhola = document.createElement ("script");
linguaEspanhola.src= "./idiomas/espanhol.js";
document.head.appendChild(linguaEspanhola);

let linguaInglesa = document.createElement ("script");
linguaInglesa.src= "./idiomas/ingles.js";
document.head.appendChild(linguaInglesa);

let selectedIdioma = document.querySelector("#idioma");
selectedIdioma.addEventListener("change",
function(){
    translate(this.value);
});

function translate(idioma){
     let traducao = (idioma == "pt")? portugues():(idioma == "es")? espanhol():(idioma == "en")?ingles():null;
     setLanguage(traducao);
}

function setLanguage(novoIdioma){
    let btSoma = document.querySelector("#btSoma");
    btSoma.value = novoIdioma.soma;
    let btSubtração = document.querySelector("#btSubtração");
    btSubtração.value = novoIdioma.subtracao;
    let btDivisão = document.querySelector("#btDivisão");
    btDivisão.value = novoIdioma.divisao;
    let btMultiplicação = document.querySelector("#btMultiplicação");
    btMultiplicação.value = novoIdioma.multiplicacao;
    let titulo = document.querySelector("#titulo");
    titulo.innerHTML = novoIdioma.titulo;

}