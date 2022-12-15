
// cart moving
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

// // items dragging
$("#electronics").draggable();
$("#clothing").draggable();
$("#misc").draggable();
$("#household").draggable();
$("#accessories").draggable();
$("#stationery").draggable();
