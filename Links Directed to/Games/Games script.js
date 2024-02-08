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


document.addEventListener('DOMContentLoaded', function () {
    // Prompt user for their email
    var userEmail = prompt('Please enter your email:');

    // Fetch user data from RestDB
    fetch('https://guinealabdata-a5d9.restdb.io/rest/membership?q={"mEmail":"' + userEmail + '"}', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': '65c1f98a72864db5dadcc4cf' // Replace with your actual API key
        },
    })
    .then(response => response.json())
    .then(data => {
        // Display Pore Patrols information
        var poreCounter = document.getElementById('pore-counter');

        if (data.length > 0) {
            var porePatrols = data[0].PorePatrols;
            poreCounter.textContent = (porePatrols !== undefined ? porePatrols : 0);
        } else {
            poreCounter.textContent = 'Error';
        }
    })
    .catch(error => console.error('Error:', error));
});



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

document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the "ADD TO CART" button
    var addToCartButton = document.getElementById('product1-add-to-cart-text');
    addToCartButton.addEventListener('click', function () {
        addToCart();
    });
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
