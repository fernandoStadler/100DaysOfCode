
//Mask 

$("#multiplicando").mask("0000");
$("#multiplicador").mask("0000");

function mult() {

    let i;
    let multiplier = parseFloat(document.getElementById("multiplicador").value);
    let multiplying = parseFloat(document.getElementById("multiplicando").value);
    let result;
    let modal = document.getElementById("multResult");

    for (i = 0; i < multiplier + 1; i++) {
        result = multiplying * i;
        modal.innerHTML += multiplying + " x " + (i) + " = " + result + "<br/>";
    }


}



function validate() {

    $("#exampleModalLong").on("hide.bs.modal", function (e) {
        let modal = document.getElementById("multResult");
        multiplier = document.getElementById("multiplicador").value = "";
        multiplying = document.getElementById("multiplicando").value = "";
        modal.innerHTML = "";


        validate();
    })
    let btn_mult = document.getElementById("btn_mult");
    let multiplicador = document.getElementById("multiplicador");
    let multiplicando = document.getElementById("multiplicando");
    let modalBoot = document.getElementById("exampleModalLong");

    if (multiplicador.value == "" | multiplicando.value == "") {

        btn_mult.disabled = true;
        modalBoot = document.getElementById("exampleModalLong").className = "modal fade";




    }

    else {


        modalBoot = document.getElementById("exampleModalLong").className = "modal fade show";
        btn_mult.disabled = false;



    }
}

function clean() {



    let modal = document.getElementById("multResult");
    multiplier = document.getElementById("multiplicador").value = "";
    multiplying = document.getElementById("multiplicando").value = "";
    modal.innerHTML = "";


    validate();

}

