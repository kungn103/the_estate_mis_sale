// revealing pages 
var part1= document.getElementById("part-1");
var part2= document.getElementById("part-2");
var part3= document.getElementById("part-3");
var part4= document.getElementById("part-4");


function show2(){
  part2.classList.add("show");
  part3.classList.add("show");
  part4.classList.add("show");
  part1.classList.add("hide");
}

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