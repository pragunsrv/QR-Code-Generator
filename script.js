document.getElementById('qr-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var text = document.getElementById('text-input').value;
    if (text.trim() === '') {
        alert('Please enter some text');
        return;
    }

    var qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    new QRCode(qrcodeContainer, text);
});
