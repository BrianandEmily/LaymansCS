
function msg(){
    var num1 = document.getElementById("num1").value;
  
    var num3 = Number(num1);

    let num2 = document.getElementById("num2").value;

    var num4 = Number(num2);

    var sum = num3 + num4;

    document.getElementById("sum").innerHTML = sum;

}