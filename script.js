window.onscroll = function () {
    // Get the navbar element
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};



// Sign in form 
function toggleModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

// Close modal if the user clicks outside the modal content
window.onclick = function (event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Slideshow
var slideIndex = 1;

// This function will be called on window load
window.onload = function() {
  showSlides(slideIndex);
};

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// -------------------- Email -------------------- // 
function clearEmailInput(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  var emailInput = document.getElementById('email-input');
  emailInput.value = ''; // Clear the value
  emailInput.defaultValue = 'Your email address'; // Set the default value
}

function handleFormSubmit(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  var emailInput = document.getElementById('email-input');
  emailInput.value = ''; // Clear the value

  // Show the Lottie container
  var lottieContainer = document.getElementById('lottie-container');
  lottieContainer.style.display = 'block';
  
  // Setting a timeout to hide the Lottie container after a certain duration
  setTimeout(function () {
    lottieContainer.style.display = 'none';
  }, 2000); // 2000 milliseconds (2.0 seconds)
}


