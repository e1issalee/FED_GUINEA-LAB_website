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

document.addEventListener('DOMContentLoaded', function () {
    var infoIcon = document.getElementById('info-icon');
    var howToPlayContainer = document.querySelector('.how-to-play-container');

    infoIcon.addEventListener('click', function () {
        if (howToPlayContainer.style.display === 'block') {
            howToPlayContainer.style.display = 'none';
        } else {
            howToPlayContainer.style.display = 'block';
        }
    });
});





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
