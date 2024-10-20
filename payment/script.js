function payOnline() {
    alert("Redirecting to Online Payment...");
    // Implement online payment logic here
}

function payOffline() {
    alert("Please pay with cash at the counter.");
    // Implement offline payment logic here
}

function startQRScanner() {
    const qrScanner = document.getElementById('qr-scanner');
    qrScanner.style.display = 'block';

    const html5QrCode = new Html5Qrcode("preview");
    html5QrCode.start(
        { facingMode: "environment" }, // Use rear camera
        {
            fps: 10,    // Optional, frame per seconds for qr code scanning
            qrbox: 250  // Optional, if you want bounded box UI
        },
        qrCodeMessage => {
            alert(`QR Code detected: ${qrCodeMessage}`);
            html5QrCode.stop();
        },
        errorMessage => {
            // parse error, ignore it.
        })
    .catch(err => {
        console.error(`Unable to start scanning, error: ${err}`);
    });
}

// Start the QR scanner when the page loads
window.onload = startQRScanner;
