

//Mask 
$("#altura").mask("0.00");
$("#peso").mask("000");

//Variables
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
    if (result < 18.5) {
        clean();
        newText.textContent = "Magreza: " + parseFloat(result.toFixed(2));
        document.getElementById("result").className = "alert alert-danger  mt-2 text-center";
        document.getElementById("magreza").style.backgroundColor = "red";
        document.getElementById("magreza").style.color = "white";
    }

    if (result >= 18.5 && result <= 24.9) {
        clean();
        newText.textContent = "Normal: " + parseFloat(result.toFixed(2));
        document.getElementById("result").className = "alert alert-primary  mt-2 text-center";
        document.getElementById("normal").style.backgroundColor = "skyblue";
        document.getElementById("normal").style.color = "black";
    }
    if (result >= 25.0 && result <= 29.9) {
        clean();
        newText.textContent = "Sobrepeso: " + parseFloat(result.toFixed(2));
        document.getElementById("result").className = "alert alert-warning mt-2 text-center";
        document.getElementById("sobrepeso").style.backgroundColor = "yellow";
        document.getElementById("sobrepeso").style.color = "black";
    }
    if (result >= 30.0 && result <= 39.9) {
        newText.textContent = "Obesidade: " + parseFloat(result.toFixed(2));
        document.getElementById("result").className = "alert alert-danger mt-2 text-center";
        document.getElementById("obesidade").style.backgroundColor = "darkred";
        document.getElementById("obesidade").style.color = "white";
    }
    if (result >= 40.0) {
        newText.textContent = "Obesidade grave: " + parseFloat(result.toFixed(2));
        document.getElementById("result").className = "alert alert-danger mt-2 text-center";
        document.getElementById("grave").style.backgroundColor = "darkred";
        document.getElementById("grave").style.color = "white";
    }
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
    newText.textContent = "";
    document.getElementById("result").className = ""
    document.getElementById("magreza").style.backgroundColor = "white";
    document.getElementById("magreza").style.color = "black";
    document.getElementById("normal").style.backgroundColor = "white";
    document.getElementById("normal").style.color = "black";
    document.getElementById("sobrepeso").style.backgroundColor = "white";
    document.getElementById("sobrepeso").style.color = "black";
    document.getElementById("obesidade").style.backgroundColor = "white";
    document.getElementById("obesidade").style.color = "black";
    document.getElementById("grave").style.backgroundColor = "white";
    document.getElementById("grave").style.color = "black";


    validate();
}

