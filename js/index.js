var myIndex = 0;
doidera_carousel();

function doidera_carousel() {
  var i;
  var x = document.getElementsByClassName("doidera_img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(doidera_carousel, 2000); // Change image every 2 seconds
}