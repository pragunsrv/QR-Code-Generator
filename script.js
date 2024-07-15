document.getElementById('qr-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var text = document.getElementById('text-input').value.trim();
    var size = parseInt(document.getElementById('size-input').value.trim());
    var color = document.getElementById('color-input').value.trim();
    var errorMessage = document.getElementById('error-message');
    var downloadBtn = document.getElementById('download-btn');

    if (text === '' || isNaN(size) || size <= 0) {
        errorMessage.textContent = 'Please enter valid text and size';
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    var qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    var qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: size,
        height: size,
        colorDark: color,
        colorLight: "#ffffff"
    });

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
