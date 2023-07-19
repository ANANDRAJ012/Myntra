// Add event listener to "Add to Cart" buttons when the document is ready
document.addEventListener("DOMContentLoaded", function() {
  // Get all the "Add to Cart" buttons
  var addToCartButtons = document.querySelectorAll(".add-to-cart");

  // Add event listener to each button
  addToCartButtons.forEach(function(button) {
    button.addEventListener("click", addToCart);
  });
});

// Function to handle the "Add to Cart" button click
function addToCart(event) {
  var productId = event.target.dataset.productId;
  addToCartFunction(productId);
  event.target.innerText = "Added to Cart";
  event.target.disabled = true;
}

function addToCartFunction(productId) {
  // Add your logic to add the product to the cart
  // ...
}
