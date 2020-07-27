//MASK

$("#kmDist").mask("0000000");
$("#medVeic").mask("000000");
$("#precFuel").mask('#.##0.00', {reverse: true});
$("#result").mask('#.##0.00', {reverse: true});






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
}

function fuelCalc(){

let dist = document.getElementById("kmDist").value;
let cons_med = document.getElementById("medVeic").value;
let price_fuel = document.getElementById("precFuel").value;
let fuel_total;
let result = document.getElementById("result");

fuel_total = dist / cons_med;

let total = (parseFloat(fuel_total)) * price_fuel;

result.textContent= parseFloat(total.toFixed(2));

}

