function updatePrice() {
    const category = document.getElementById('category').value;
    const days = parseInt(document.getElementById('days').value, 10);
    const basePrice = category === 'Standard' ? 100 : 150;
    const totalPrice = basePrice * days;
    document.getElementById('price').textContent = totalPrice;
}

function redirectToPayment() {
    const paymentMethod = confirm("Choose OK for Online Payment or Cancel for Cash Payment");
    if (paymentMethod) {
        alert("Redirecting to Online Payment...");
        // Implement online payment redirection logic here
    } else {
        alert("Redirecting to Cash Payment...");
        // Implement cash payment redirection logic here
    }
}
