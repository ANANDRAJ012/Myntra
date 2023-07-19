function decreaseQuantity(button) {
    var input = button.parentNode.querySelector('input[type=number]');
    if (input.value > 0) {
        input.stepDown();
        updateValue(input);
    }
}

function increaseQuantity(button) {
    var input = button.parentNode.querySelector('input[type=number]');
    input.stepUp();
    updateValue(input);
}

function updateValue(input) {
    var quantity = input.value;
    var price = 244.00; // Change this value to the actual price
    var total = quantity * price;
    document.getElementById("valueDisplay").textContent = "Rs " + total.toFixed(2);
}
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
  
  <script type="javascript"></script>
  var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');
const decreaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
console.log( itemprice.innerHTML);
// console.log(itemval.value);
if(itemval.value <= 0){
itemval.value = 0;
alert('Negative quantity not allowed');
}else{
itemval.value = parseInt(itemval.value) - 1;
itemval.style.background = '#fff';
itemval.style.color = '#000';
itemprice.innerHTML  = parseInt(itemprice.innerHTML) - 415;
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) - 415;
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
}
}
const increaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
// console.log(itemval.value);
if(itemval.value >= 5){
itemval.value = 5;
alert('max 5 allowed');
itemval.style.background = 'red';
itemval.style.color = '#fff';
}else{
itemval.value = parseInt(itemval.value) + 1;
itemprice.innerHTML  = parseInt(itemprice.innerHTML ) + 415;
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + 415;
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
}
Document.getElementById('erro').innerHTML = total_cart_amt;
}

const redirectToOrderConfirm = () => {
  window.location.href = "orderconfirm.html";
}

const  discount_code = () => {
let totalamtcurr = parseInt(total_cart_amt.innerHTML);
let error_trw = document.getElementById('error_trw');
if(discountCode.value === 'ANAND'){
let newtotalamt = totalamtcurr - 415;
total_cart_amt.innerHTML = newtotalamt;
error_trw.innerHTML = "Hurray! code is valid 415 DISCOUNT APPLYED";
error_trw.innerHTML = "415 DISCOUNT APPLYED "
}else{
error_trw.innerHTML = "Try Again! Valid code is ANAND";
}
}

// document.getElementsByName(total_cart_amt).innerHTML=newtotalamt;