var modal = document.getElementById('modal');
var body = document.getElementById('b');
var slideIndex = 1; // default slide index.
var modalSlideIndex = 1; // default modal slide index.


//modal switch function  
function show(index) {
  modal.style.display = "block";
  body.style.overflow = "hidden";
  updateIndex('item', index);
  showSlide('item', modalSlideIndex); // when open modal show slide.
}

function closeModal() {
  modal.style.display = "none";
  body.style.overflow = ""
}


window.onclick = function (e) {
  if (e.target === modal) {
    closeModal()
  }
}


function prevSlide(classname) {
  var currentIndex = getCurrentIndeBy(classname);
  var prevIndex = currentIndex - 1;
  showSlide(classname, prevIndex);
}

function nextSlide(classname) {
  var currentIndex = getCurrentIndeBy(classname);
  var nexIndex = currentIndex + 1;
  showSlide(classname, nexIndex);
}


function getCurrentIndeBy(classname) {
  switch (classname) {
    case 'slide':
      return slideIndex;
    case 'item':
      return modalSlideIndex;
    default:
      throw new Error('Can not find such slide!');
  }
}

function updateIndex(classname, updateIndex) {
  switch (classname) {
    case 'slide':
      slideIndex = updateIndex;
      break;
    case 'item':
      modalSlideIndex = updateIndex;
      break;
    default:
      return new Error("Can not find such slide");
  }
}


function showSlide(classname, index) {
  var slides = document.getElementsByClassName(classname);  // if slide is in modal or not;

  if (index < 1) {
    index = slides.length;
  }
  if (index > slides.length) {
    index = 1;
  }
  updateIndex(classname, index);

  for (var j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}