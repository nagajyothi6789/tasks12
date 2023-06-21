var value1 = Math.round(Math.random() * 150);
var value2 = Math.round(Math.random() * 100);
function calculate(){debugger;
    document.getElementById("number1").value = value1;
    document.getElementById("number2").value = value2;
    // getRndInteger();
}

   function getRndInteger(){
    var result= (value1+value2);
    
    document.getElementById("result").innerHTML = result;
    console.log(result);
  }
