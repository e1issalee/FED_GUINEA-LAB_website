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

// -------------------- Sign in  -------------------- // 
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

document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the "ADD TO CART" button
    var addToCartButton = document.getElementById('product1-add-to-cart-text');
    addToCartButton.addEventListener('click', function () {
        addToCart();
    });
});

// -------------------- Add to cart Modal -------------------- // 
// Function to add item to cart
function addToCart() {
    // Your logic to add item to the cart

    // Show the cart modal
    showCartModal();

    // Set the Lottie animation source
    var lottiePlayer = document.getElementById('lottiePlayer');
    lottiePlayer.src = 'path/to/your/animation.json'; // Replace with the actual path to your Lottie animation file
}

// Function to show the cart modal
function showCartModal() {
    var cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';

    // Setting a timeout to hide the modal after a certain duration
    setTimeout(function () {
        cartModal.style.display = 'none';
    }, 1500); // 1500 milliseconds (1.5 seconds)
}

// Function to close the modal
function closeModal() {
    var cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
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
  