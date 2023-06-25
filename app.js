document.addEventListener("DOMContentLoaded", function() {
  const addButtons = document.querySelectorAll(".btn");
  const cartTotal = document.getElementById("total");
  const closeShopping = document.querySelector(".closeShopping");
  const listCard = document.querySelector(".listCard");
  
  // Initialize cart items array and total
  let cartItems = [];
  let total = 0;
  
  // Add event listeners to all add to cart buttons
  addButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      const box = this.parentNode;
      const item = {
        name: box.querySelector("h3").textContent,
        price: parseFloat(box.querySelector(".price").textContent.slice(1)),
        quantity: 0,
        total: 0
      };
      
      // Open a prompt window to set the quantity
      const quantityWindow = prompt(`Enter the quantity for ${item.name}:`, "1");
      if (quantityWindow !== null && quantityWindow !== "") {
        const quantity = parseInt(quantityWindow);
        if (!isNaN(quantity) && quantity > 0) {
          item.quantity = quantity;
          
          // Calculate item total price and update cart
          item.total = item.price * item.quantity;
          cartItems.push(item);
          total += item.total;
          updateCart();
        } else {
          alert("Invalid quantity. Please enter a valid number greater than 0.");
        }
      }
    });
  });
  
  // Function to update the cart section
  function updateCart() {
    let cartHTML = "";
    cartItems.forEach(function(item, index) {
      cartHTML += `
        <div class="cart-item">
          <span>${item.name}</span>
          <div class="quantity">
            <button class="decrease-quantity" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="increase-quantity" data-index="${index}">+</button>
          </div>
          <span>$${item.total.toFixed(2)}</span>
          <button class="delete-item" data-index="${index}">Delete</button>
        </div>
      `;
    });
    
    // Update the cart total
    cartTotal.textContent = total.toFixed(2);
    
    // Update the cart items
    listCard.innerHTML = cartHTML;
    
    // Add event listeners to decrease quantity buttons
    const decreaseButtons = document.querySelectorAll(".decrease-quantity");
    decreaseButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const index = parseInt(this.getAttribute("data-index"));
        const item = cartItems[index];
        
        if (item.quantity > 1) {
          item.quantity--;
          item.total = item.price * item.quantity;
          total -= item.price;
          updateCart();
        }
      });
    });
    
    // Add event listeners to increase quantity buttons
    const increaseButtons = document.querySelectorAll(".increase-quantity");
    increaseButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const index = parseInt(this.getAttribute("data-index"));
        const item = cartItems[index];
        
        item.quantity++;
        item.total = item.price * item.quantity;
        total += item.price;
        updateCart();
      });
    });
    
    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll(".delete-item");
    deleteButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const index = parseInt(this.getAttribute("data-index"));
        const item = cartItems[index];
        
        // Confirm deletion using a window
        const confirmWindow = confirm(`Are you sure you want to delete ${item.name}?`);
        if (confirmWindow) {
          cartItems.splice(index, 1);
          total -= item.total;
          updateCart();
        }
      });
    });
  }
  
  // Add event listener to close shopping cart
  closeShopping.addEventListener("click", function() {
    document.getElementById("menu").style.display = "none";
  });
});
