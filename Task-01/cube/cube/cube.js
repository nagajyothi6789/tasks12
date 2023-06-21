function calculate(){
    var userip = document.getElementById("number").value;
    var cube= userip*userip*userip;
    
    var resultValue = document.getElementById("result");
    resultValue.innerHTML = cube;
  
    //it is for disable  with shade of container
    //document.getElementById("number").disabled = true;
  
  
    //it is used  to totall  disappeared
   // document.getElementById("number").style.display = "none"  ;
  
    //it is used to  disappeared value in input container
    document.getElementById("number").value = ("") 
  
    //document.getElementById('change').style.backgroundColor = 'lightblue';
  }