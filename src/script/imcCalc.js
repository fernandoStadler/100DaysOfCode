

//Mask 
$("#altura").mask("0.00");
$("#peso").mask("00.00");


let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;

let newText = document.getElementById("result");
let btn = document.getElementById("btnCalc");

function imc() {

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let result;
    let sqrAltura;
    let newText = document.getElementById("result");

    sqrAltura = altura * altura;
    result = peso / sqrAltura;

    newText.textContent = parseFloat(result.toFixed(2))
}

function validate() {
    if (this.altura.value == '' | this.peso.value == '') {
        btn.disabled = true
    }
    else {
        const btn = document.getElementById("btnCalc");
        btn.disabled = false
    }
}

function clean() {
    this.peso.value = "";
    this.altura.value = "";
    newText.textContent = "O seu IMC é! ";
    validate();
}

