function buttonClicked(){
    stringEntered = 
    document.getElementById("string-entered").value;

    regularExpressionEntered = 
    document.getElementById("regular-expression").value;

    regularExpressionEntered = new RegExp(regularExpressionEntered);
    regularExpressionEntered


    if(regularExpressionEntered.test(stringEntered)){
        document.getElementById("result").innerHTML = "true";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerHTML = "false";
        document.getElementById("result").style.color = "red";
    }

    console.log(stringEntered);
    console.log(regularExpressionEntered)
}