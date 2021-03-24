// Scroll to top.
var topBtn = document.querySelector('.top');
document.addEventListener('scroll', scrollToTop);
topBtn.addEventListener('click', goTop);

function scrollToTop() {
  var scrollShowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight; // Store scrollHeight - clientHeight.
  var aspectRatio = 0.1; // Store aspectRatio for show or hide top button.
  if (document.documentElement.scrollTop / scrollShowHeight > aspectRatio) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
}

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Hamburger js.
var menu = document.querySelector('.menu');
var closeHamburger = document.querySelector('.close');
var hamburger = document.querySelector('.hamburger');
closeHamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  var clickItemName = this.getAttribute('class');
  switch (clickItemName) {
    case 'hamburger':
      menu.classList.add('menushow');
      closeHamburger.style.display = 'block';

      window.onscroll = function () {
        // Disable scroll.
        window.scrollTo(0, 0);
      };
      break;

    case 'close':
      menu.classList.remove('menushow');
      closeHamburger.style.display = 'none';
      window.onscroll = function () {}; // Enable scroll.
      break;

    default:
      break;
  }
}

// Load more js start.
var allLi = document.querySelectorAll(".news-show-more ul li");
var showMore = document.querySelector(".show-more-js a");
showMore.addEventListener('click', handleShowMore);
var start = 9; // Store start of li elementf for loop.

function handleShowMore(e){
  e.preventDefault();
  for(i = start; i < start + 3; i++){ // Apply style to three elements each time.
    allLi[i].style.display = "block";
    console.log(i)
    if(i === 17) this.parentNode.style.display = "none";
  }
  start += 3;
}