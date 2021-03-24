// Scroll to top.
var topBtn = document.querySelector(".top");
document.addEventListener('scroll', scrollToTop);
topBtn.addEventListener('click', goTop);

function scrollToTop(){
  var scrollShowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var aspectRatio = 0.1;
  if((document.documentElement.scrollTop / scrollShowHeight) > aspectRatio){ 
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function goTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}







