function validate(){
  p = validateUname();
   if(p==true)
  q = valiadtePw();
  if(q==true)
  location.replace("list2.html");
}



function validateUname() {
  
  var username = document.getElementById("exampleInputEmail1").value;
  if (username == null || username == "") {
      alert("Please enter the username.");
      return false;
  }
   else if(username == "admin")
     return true ;
   else alert("Invalid username");
}

   function valiadtePw(password){

    var password = document.getElementById("exampleInputPassword1").value;
    if (password == null || password == "") {
      alert("Please enter the password.");
      return false;
  }
  else if(password == 12345)
    return true;
  else alert('Invalid Password');
  }

   function logout(){
    location.replace("index.html");
   }