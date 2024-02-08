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



// ------------------------ Login Register Form ---------------------------
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
    // Function to handle form submission
    function submitForm() {
      // Get the form elements
      var email = document.getElementsByName('email')[0].value;
      var password = document.getElementsByName('psw')[0].value;

      // Prepare the data to be sent
      var formData = {
          "mEmail": email,
          "mPassword": password
      };

      // Send the data to the RestDB API endpoint
      fetch('https://guinealabdata-a5d9.restdb.io/rest/member', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'x-apikey': '65c1f98a72864db5dadcc4cf' // API key
          },
          body: JSON.stringify(formData)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log('Data sent successfully:', data);

          // Optionally, display a success message to the user
          alert('Registration successful!'); // You can customize this message

          // Close the modal
          document.getElementById('signupModal').style.display = 'none';
      })
      .catch(error => {
          console.error('There was a problem sending the data:', error);

          // Optionally, display an error message to the user
          alert('Registration failed. Please try again.'); // You can customize this message
      });
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


// -------------------- About Us -------------------- // 
// Function to toggle modal display
function toggleModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

// Close the About Us modal if the close button is clicked
document.getElementById('closeAboutUsModal').addEventListener('click', function() {
  toggleModal('aboutUsModal');
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the current URL path
  var currentPath = window.location.pathname;

  // Check if the current path contains "aboutUs"
  if (currentPath.includes("aboutUs")) {
      // Add the "active" class to the "About Us" link
      document.getElementById('aboutUsLink').classList.add('active');
  }
});

// -------------------- Scroll to Top -------------------- // 
function scrollToTop() {
  // Scroll smoothly to the top of the page
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// -------------------- Scroll to Contact Us -------------------- // 
document.addEventListener('DOMContentLoaded', function() {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', function(e) {
          e.preventDefault();

          var targetId = this.getAttribute('href');
          var targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              var offsetTop = targetElement.offsetTop;
              
              window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  }
});











