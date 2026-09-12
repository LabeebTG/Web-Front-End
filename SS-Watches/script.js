let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function buyNow(name, price) {
    localStorage.setItem("cart", JSON.stringify([{ name, price }]));
    window.location.href = "checkout.html";
}

function loadCheckout() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("checkout-total").textContent = total;
}

document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let transactionId = document.getElementById("transaction-id").value;
    let paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    if (!transactionId) {
        alert("Please enter the transaction ID after making the payment.");
        return;
    }

    let orderDetails = {
        name, email, address, paymentMethod, transactionId, totalAmount: cart.reduce((sum, item) => sum + item.price, 0)
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
    window.location.href = "thankyou.html";
});

if (window.location.pathname.includes("checkout.html")) {
    loadCheckout();
}
function toggleMenu() {
    var sideNav = document.querySelector('.side-nav');
    var overlay = document.querySelector('.overlay');
    if (sideNav.style.width === '250px') {
        sideNav.style.width = '0';
        overlay.classList.remove('active');
    } else {
        sideNav.style.width = '250px';
        overlay.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelector('.side-nav');
    var menuBtn = document.querySelector('.menu-btn');
    var overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    overlay.addEventListener('click', function() {
        toggleMenu();
    });
});