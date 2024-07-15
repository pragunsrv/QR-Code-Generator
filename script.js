document.getElementById('qr-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var text = document.getElementById('text-input').value.trim();
    var errorMessage = document.getElementById('error-message');
    var downloadBtn = document.getElementById('download-btn');

    if (text === '') {
        errorMessage.textContent = 'Please enter some text';
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    var qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    var qrcode = new QRCode(qrcodeContainer, text);

    qrcode.makeCode(text);
    downloadBtn.style.display = 'block';

    downloadBtn.onclick = function() {
        var img = qrcodeContainer.querySelector('img');
        if (img) {
            var link = document.createElement('a');
            link.href = img.src;
            link.download = 'qrcode.png';
            link.click();
        }
    };
});
