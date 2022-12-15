let imgSrcs = [];



// PART 4 - ANGEL SLIDESHOW
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

let siteContent = document.getElementById('site-content');
console.log(siteContent);
for(let i=0; i<328; i++){
  imgSrcs.push(`../assets/objects/object${i}.png`);
  
  let imageElement = document.createElement("img");
  imageElement.src = imgSrcs[i];
  imageElement.setAttribute("id","object-"+i);
  siteContent.append(imageElement);

  $("#object-"+i).draggable();
}
console.log(imgSrcs)

// // items dragging
// $("#object-1").draggable();
// $("#object-15").draggable();
// $("#object-28").draggable();
// $("#object-75").draggable();
// $("#object-76").draggable();
// $("#object-89").draggable();
// $("#object-106").draggable();
// $("#object-134").draggable();
// $("#object-171").draggable();
// $("#object-127").draggable();
// $("#object-200").draggable();
// $("#object-203").draggable();
// $("#object-270").draggable();
// $("#object-326").draggable();

$("#cart-box").droppable({
  drop: function(event,ui) {
    console.log("eventttttt", event);
    console.log("not event", ui);
    $(event.toElement)
      .addClass("hide");
  }
  
});