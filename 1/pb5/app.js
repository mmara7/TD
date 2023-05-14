var firstNumber=$('#firstNumber').val();
var firstNumber=parseInt(firstNumber);
var secondNumber=$('#secondNumber').val();
var secondNumber=parseInt(secondNumber);

var result = 0;
function printValue(divId, value){
    $("#"+divId).html(value);
}

printValue("result",result);

$("#equal").on('click',operations);
$("#inc").on('click',sum);
$("#dec").on('click',scadere);
$("#inm").on('click',inmultire);
$("#imp").on('click',impartire);

function sum(){
    result = firstNumber+secondNumber;
}

function scadere(){
    result = firstNumber-secondNumber;
}

function inmultire(){
    result = firstNumber*secondNumber;
}

function impartire(){
    result = firstNumber/secondNumber;
}

function operations(){
  printValue("result",result);
}

