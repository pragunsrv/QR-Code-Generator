document.getElementById('qr-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var text = document.getElementById('text-input').value.trim();
    var errorMessage = document.getElementById('error-message');

    if (text === '') {
        errorMessage.textContent = 'Please enter some text';
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    var qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    new QRCode(qrcodeContainer, text);
});
