  
// // items dragging
$("#object-1").draggable();
$("#object-28").draggable();
$("#object-75").draggable();
$("#object-89").draggable();
$("#object-106").draggable();
$("#object-134").draggable();
$("#object-171").draggable();
$("#object-127").draggable();
$("#object-200").draggable();
$("#object-203").draggable();
$("#object-270").draggable();
$("#object-326").draggable();

// PART 4 - ANGEL SLIDESHOW
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("angel");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 90);
}