//bildspel
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}


function submitForm(){
  console.log("debug");
  //debugger; 

  const förnamn = document.forms["guestbook"]["förnamn"].value;
  const efternamn = document.forms["guestbook"]["efternamn"].value;
  
  console.log(förnamn);
  console.log(efterepost);


  //date

  const date = Date.now();
  console.log(date);
  const today = new Date(date);
  console.log(today);

  //posts
  var message = document.getElementById("message").innerHTML;

  message +=`
  ${förnamn}, (${efternamn})
  <br>
  ${today.toUTCString()}
  <hr>
  `;
  document.getElementById("message").innerHTML = message;

  return false;
}

// kontaktformulär
 function kontakt(){
   alert("Ditt meddelande är nu skickat...")
 }
