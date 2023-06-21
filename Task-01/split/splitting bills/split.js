function calculate(){debugger;
    var user1 = document.getElementById("number1").value;
    var user2 = document.getElementById("number2").value;
    
    var division = user1/user2 

    var desima = division.toFixed(2)
    var resultvalue = document.getElementById("result");
    resultvalue.innerHTML = desima
    
}