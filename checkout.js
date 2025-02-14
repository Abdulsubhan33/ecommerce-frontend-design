// checkout.js
let currentStep = 1;
const totalAmount = 840;  // For example, this can come from cart data

function nextStep() {
    currentStep++;
    updateStep();
}

function updateStep() {
    const steps = document.querySelectorAll('.step');
    const forms = document.querySelectorAll('.step-form');

    steps.forEach(step => step.classList.remove('active'));
    forms.forEach(form => form.classList.remove('active'));

    document.getElementById(`step${currentStep}`).classList.add('active');
    document.getElementById(`step${currentStep}-form`).classList.add('active');
    document.getElementById(`step${currentStep}`).classList.add('active');
}

function copyShippingInfo() {
    if (document.getElementById('use-shipping').checked) {
        document.getElementById('billing-name').value = document.getElementById('name').value;
        document.getElementById('billing-address').value = document.getElementById('address').value;
        document.getElementById('billing-phone').value = document.getElementById('phone').value;
    }
}

function placeOrder() {
    alert("Your order has been placed successfully!");
    // Simulate an API call here (using fetch/axios)
}
