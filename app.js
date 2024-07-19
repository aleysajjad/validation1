function data()
 {

    var a= document.getElementsByClassName("n1");
    var b= document.getElementsByClassName("n2");
    var c= document.getElementsByClassName("n3");
    var d= document.getElementsByClassName("n4");


    if(a==""||b==""||c==""||d==""){
    alert("All Field Are mendortaty");
        return false;
     }
    
     else if(b.length<11 ||b.length>11){
            alert("number should be of 10 digit ");
            return false;
        }

 else if(isNaN(b)){
    alert("only number are allowed")
    return false;
 }

 else if (c!=d){
    alert("please enter same password");
    return false;
 }

  else
{
    true;
  }

}
