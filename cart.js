const cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsContainer = document.getElementById('cartItems');
const subtotalElement = document.getElementById('subtotal');
const taxesElement = document.getElementById('taxes');
const shippingElement = document.getElementById('shipping');
const totalElement = document.getElementById('total');
const proceedToCheckoutButton = document.getElementById('proceedToCheckout');

function updateCart() {
  // Clear existing items
  cartItemsContainer.innerHTML = '';

  let subtotal = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <p>${item.name}</p>
        <p>$${item.price} x <button class="decrease">-</button> <span class="quantity">${item.quantity}</span> <button class="increase">+</button></p>
        <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
        <button class="remove">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);

    // Add event listeners for quantity changes
    cartItem.querySelector('.increase').addEventListener('click', () => updateQuantity(item, 1));
    cartItem.querySelector('.decrease').addEventListener('click', () => updateQuantity(item, -1));
    cartItem.querySelector('.remove').addEventListener('click', () => removeItem(item));

    // Update subtotal
    subtotal += item.price * item.quantity;
  });

  // Update prices
  const taxes = subtotal * 0.1; // Example tax rate
  const total = subtotal + taxes + 5; // Add shipping

  subtotalElement.innerText = `$${subtotal.toFixed(2)}`;
  taxesElement.innerText = `$${taxes.toFixed(2)}`;
  totalElement.innerText = `$${total.toFixed(2)}`;

  // Enable/disable proceed to checkout button
  proceedToCheckoutButton.disabled = cart.length === 0;
}

function updateQuantity(item, delta) {
  if (item.quantity + delta > 0) {
    item.quantity += delta;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }
}

function removeItem(item) {
  const index = cart.indexOf(item);
  if (index > -1) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }
}

// Initial call to update the cart display
updateCart();
