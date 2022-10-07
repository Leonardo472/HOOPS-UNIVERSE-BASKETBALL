var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var imageslide = 1;
showSlide(imageslide);

function plusSlide(n){
  showSlide(imageslide+=n);
}

function currentSlide(n){
  showSlide(imageslide=n);
}

function showSlide(n){
  var idx;
  var Slide = document.getElementsByClassName('slide');
  var dots = document.getElementsByClassName('dots');
  if(n>Slide.length){
    imageslide=1;
  }
  if(n<1){
    imageslide = Slide.length;
  }
  for(idx=0;idx<Slide.length;idx++){
    Slide[idx].style.display="none";
  }
  for(idx=0;idx<dots.length;idx++){
    dots[i].className = dots[i].className.replace("Active","");
  }
  Slide[imageslide-1].style.display="block";
  dots[imageslide-1].className+="Active";
}