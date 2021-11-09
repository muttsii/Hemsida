//bildspel
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("bildspel");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

// kontaktformulär
 function kontakt(){
   alert("Ditt meddelande är nu skickat...")
 }

 //Tabbar klienttekniker
 function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}