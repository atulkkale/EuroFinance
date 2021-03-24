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
var menuLi = document.querySelectorAll('.menu li a');
var closeHamburger = document.querySelector('.close');
var hamburger = document.querySelector('.hamburger');
closeHamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', toggleMenu);

console.log(menu);

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
