// cart
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("cart");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 500);
}

var myIndex1 = 0;
carousel1();

function carousel1() {
  var i;
  var x = document.getElementsByClassName("checkout");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex1++;
  if (myIndex1 > x.length) {myIndex1 = 1}    
  x[myIndex1-1].style.display = "block";  
  setTimeout(carousel1, 500);
}

