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
var allLi = document.querySelectorAll('.news-show-more ul li');
var showMore = document.querySelector('.show-more-js a');
if (showMore) showMore.addEventListener('click', handleShowMore);
var start = 9; // Store start of li elementf for loop.

function handleShowMore(e) {
  e.preventDefault();
  for (i = start; i < start + 3; i++) {
    // Apply style to three elements each time.
    allLi[i].style.display = 'block';
    if (i === allLi.length - 1) this.parentNode.style.display = 'none';
  }
  start += 3;
}

// Lightbox js start.
var clickableLi = document.querySelectorAll('.all-conferences ul li');
if (clickableLi) clickableLi.forEach(function (clickLi) {
    clickLi.addEventListener('click', toggleLightBox);
  });

function toggleLightBox(e) { // This function open and close lightBox.
  e.preventDefault();
  var clickedElemnt = e.target.tagName; // Depending upon element perform actions.
  switch (clickedElemnt) {
    case "IMG":
      this.children[0].classList.add('lightBox');
    break;

    case "FIGURE":
      this.children[0].classList.remove('lightBox');
    break;
  
    default:
      break;
  }
}

// Form validation. 
var form = {
  errorCount: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null}, // If any of the form field is valid then it will set to object otherwise null and this field give referance to submit function.
  formInputs: document.querySelectorAll('input[class=home_user_input]'),
  validate: function (e) { // This function validate field on event keyup.
    var regex;
    var currelemnt = e.target;
    switch (currelemnt) {
    case form.formInputs['0']:
      regex = [/^[a-zA-Z]{2,15}$/,2,16,'lenerror','syntaxerror']; // First name regex.
    break;

    case form.formInputs['1']:
      regex = [/^[a-zA-Z]{2,15}$/,2,16,'lenerror','syntaxerror']; // Last name regex.
    break;

    case form.formInputs['2']:
      regex = [/^[a-zA-Z0-9]+@[a-zA-Z]{0,7}\.[a-zA-Z]{2,5}$/,4,21,'gmaillenerror','gmailerror']; // Gmail regex.
    break;

    case form.formInputs['3']:
      regex = [/^[0-9]{10}$/,9,11,'phonelenerror','phoneerror'];
    break;
    
    case form.formInputs['4']:
      regex = [/./,4,21,'gmaillenerror','syntaxerror'];
    break;

    case form.formInputs['5']:
      if(form.formInputs['4'].value){
        var regexpass = new RegExp(form.formInputs['4'].value);
      }else{
        var regexpass = /\B\b/;
      }
      regex = [regexpass,4,21,'gmaillenerror','passworderror'];
    break;
    
    default:
    break;
    }

    if(!(currelemnt.value.length > regex[1] && currelemnt.value.length < regex[2])){
      removeOrAddError(regex[3],currelemnt);
    } else if(!(regex[0].test(currelemnt.value))){
      removeOrAddError(regex[4],currelemnt);
    } else {
      removeOrAddError('validfield',currelemnt);
    }
  },
  submit: function (e) {
    e.preventDefault(); // For form to submit data remove this line.
    a = {};
    for(var input in form.errorCount){
      if(form.errorCount[input] === null){
        e.preventDefault();
        a.target = form.formInputs[input];
        form.validate(a);
      }
    }
  },
};
function removeOrAddError(apply, element) { // This function shows and removes error massage on each fields.

  var errorcode = ['lenerror','validfield','syntaxerror','gmaillenerror','gmailerror','phonelenerror','phoneerror','passworderror']; // Store all error code.

  for (err of errorcode) {
    element.parentNode.classList.remove(err);
  }
  element.parentNode.classList.add(apply);

  switch (element) {
    case form.formInputs[0]:
      apply === 'validfield'
        ? (form.errorCount['0'] = form.formInputs[0])
        : (form.errorCount['0'] = null); // This indicates that if current field is valid or not. If field is valid then it's store in object so we referance it later.
      break;

    case form.formInputs[1]:
      apply === 'validfield'
        ? (form.errorCount['1'] = form.formInputs[1])
        : (form.errorCount['1'] = null);
      break;

    case form.formInputs[2]:
      apply === 'validfield'
        ? (form.errorCount['2'] = form.formInputs[2])
        : (form.errorCount['2'] = null);
      break;

    case form.formInputs[3]:
      apply === 'validfield'
        ? (form.errorCount['3'] = form.formInputs[3])
        : (form.errorCount['3'] = null);
      break;

    case form.formInputs[4]:
      apply === 'validfield'
        ? (form.errorCount['4'] = form.formInputs[4])
        : (form.errorCount['4'] = null);
      break;

    case form.formInputs[5]:
      apply === 'validfield'
        ? (form.errorCount['5'] = form.formInputs[5])
        : (form.errorCount['5'] = null);
      break;

    default:
      break;
  }
}

for (input of form.formInputs) {
  input.addEventListener('keyup', form.validate); // Fire validate funciton.
  var nameattr = input.getAttribute('placeholder');
  input.parentNode.setAttribute('data-field-name', nameattr); // Set attribute to each field to show specific error message.
}

var submit = document.querySelector('input[type=submit]');
if(submit) submit.addEventListener('click', form.submit); // Fire submit function.

// Video slider.
var sliderWindow = document.querySelector('.news-windows-all');
var leftBtn = document.querySelector('.icon-btn-left');
var rightBtn = document.querySelector('.icon-btn-right');
var lastChild = document.querySelector('.news-each-window:last-child');
var eachWindowSize = 0;
var maxSize = null;

if(leftBtn) leftBtn.addEventListener('click',leftClick);
if(rightBtn) rightBtn.addEventListener('click',rightClick);

function rightClick(){ // On right click we give style to ul and same for left.
  if(eachWindowSize === 1880) return false;
  eachWindowSize += 235;
  sliderWindow.style.cssText = "transform: translateX(-"+eachWindowSize+"px); transition: .5s;";
}

function leftClick(){
  if(eachWindowSize === 0) return false;
  eachWindowSize -= 235;
  sliderWindow.style.cssText = "transform: translateX(-"+eachWindowSize+"px); transition: .5s;";
}