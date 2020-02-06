
 function getMinValue() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
     if (number1 == number2){
         alert("The Values are equal")
     }
     else
     alert(Math.min(number1,number2)+ " " + "is the minimum value")
 } 