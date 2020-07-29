//MASK
$("#kmDist").mask("0000000");
$("#medVeic").mask("000000");
$("#precFuel").mask("#.##0,00", {reverse: true});

function validate() 
{
let dist = document.getElementById("kmDist").value;
let cons_med = document.getElementById("medVeic").value;
let price_fuel = document.getElementById("precFuel").value;
    
    if(dist=="" | cons_med=="" | price_fuel=="")
    {
        btnCalc.disabled=true;
    } 
    else
    {
        btnCalc.disabled=false;
    }
}
function clean ()
{
    let dist = document.getElementById("kmDist").value="";
    let cons_med = document.getElementById("medVeic").value="";
    let price_fuel = document.getElementById("precFuel").value="";
    validate();
    cleanAlert();
}

function cleanAlert() 

{
    let resultText = document.getElementById("result");
    resultText.className= "";
    resultText.textContent= "";
}
function createAlert() 

{
    let resultText = document.getElementById("result");
    resultText.className= "alert alert-yellow dark-font mt-4 text-center"; 
}

function fuelCalc(){

createAlert();
let dist = document.getElementById("kmDist").value;
let cons_med = document.getElementById("medVeic").value;
let price_fuel = document.getElementById("precFuel").value.replace(",",".");
let fuel_total;
let result = document.getElementById("result");


fuel_total = dist / cons_med;
let total = (parseFloat(fuel_total)) * price_fuel;

let format_text = total.toLocaleString("pt-BR",{style: "currency", currency:"BRL"});

result.textContent = format_text;

}







