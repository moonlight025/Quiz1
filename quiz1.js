function change() {
    document.getElementById('hid123').innerHTML = "CSIE@CGU";
    document.getElementById('pid123').innerHTML = "怎麼那麼棒！！.";
  }
   function myFunction() {   
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "Change this document";
    document.body.appendChild(btn).addEventListener("click", change);     
   }