function imc ()

{

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let result;
    let sqrAltura;
    let newText = document.getElementById("result");

    sqrAltura = altura*altura;

    result=peso /sqrAltura;

    newText.textContent = parseFloat(result.toFixed(2));

}


function clean(){

    let peso = document.getElementById("peso").value="";
    let altura = document.getElementById("altura").value="";
    let newText = document.getElementById("result").textContent="O seu IMC é! ";

    

}

