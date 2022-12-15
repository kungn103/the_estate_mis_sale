// cart switch
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

// help switch 
var myIndexHelp = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("help");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndexHelp++;
  if (myIndexHelp > x.length) {myIndexHelp = 1}    
  x[myIndexHelp-1].style.display = "block";  
  setTimeout(carousel2, 700);
}

let help = document.getElementById("help-text");
function showHelp(){
  if(help.classList.contains('hide')){
    help.classList.add("show");
  }
 
  if(help.classList.contains('show')){
    help.classList.add("hide");
  }
}
// // loading items onto site 
// let imgSrcs = [];
// let siteContent = document.getElementById('site-content');
// for(let i=0; i<328; i++){
//   imgSrcs.push(`../assets/objects/object${i}.png`);
  
//   let imageElement = document.createElement("img");
//   imageElement.src = imgSrcs[i];
//   imageElement.setAttribute("id","object-"+i);
//   siteContent.append(imageElement);

//   $("#object-"+i).draggable();
// }

// // items dragging
$("#object-1").draggable();
$("#object-15").draggable();
$("#object-28").draggable();
$("#object-75").draggable();
$("#object-76").draggable();
$("#object-89").draggable();
$("#object-106").draggable();
$("#object-111").draggable();
$("#object-134").draggable();
$("#object-152").draggable();
$("#object-171").draggable();
$("#object-127").draggable();
$("#object-193").draggable();
$("#object-200").draggable();
$("#object-203").draggable();
$("#object-237").draggable();
$("#object-250").draggable();
$("#object-270").draggable();
$("#object-326").draggable();

$("#cart-box").droppable({
  drop: function(event,ui) {
    $(event.toElement)
      .addClass("in-cart");
      ui.draggable.draggable({disabled: true});  
  }
});
