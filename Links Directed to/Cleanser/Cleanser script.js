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