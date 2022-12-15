let imgSrcs = [];

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

let siteContent = document.getElementById('site-content');
for(let i=0; i<27; i++){
  imgSrcs.push(`../../assets/objects/object${i}.png`);
  
  let imageElement = document.createElement("img");
  imageElement.src = imgSrcs[i];
  imageElement.setAttribute("id","object-"+i);
  siteContent.append(imageElement);

  $("#object-"+i).draggable();

  // let productName = document.createElement("div");
  // productName.setAttribute("id","product-name")
  // productName.textContent ='Product Name';
  // siteContent.appendChild(productName);
}
console.log(imgSrcs)

$("#cart-box").droppable({
  drop: function(event,ui) {
    $(event.toElement)
      .addClass("in-cart");
      ui.draggable.draggable({disabled: true});  
  }
});
