document.getElementById('qr-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var text = document.getElementById('text-input').value.trim();
    var type = document.getElementById('type-input').value;
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

    var formattedText;
    switch (type) {
        case 'url':
            formattedText = 'URL:' + text;
            break;
        case 'email':
            formattedText = 'MAILTO:' + text;
            break;
        case 'phone':
            formattedText = 'TEL:' + text;
            break;
        default:
            formattedText = text;
    }

    var qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    var qrcode = new QRCode(qrcodeContainer, {
        text: formattedText,
        width: size,
        height: size,
        colorDark: color,
        colorLight: "#ffffff"
    });

    saveToHistory(formattedText, size, color);

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

function saveToHistory(text, size, color) {
    var historyContainer = document.getElementById('history');
    var historyItem = document.createElement('div');
    historyItem.classList.add('history-item');
    historyItem.innerHTML = `<div class="qrcode-history" style="width:${size}px; height:${size}px; background-color:${color};">
                                <div id="history-qrcode-${Date.now()}"></div>
                             </div>
                             <p>${text}</p>`;
    historyContainer.appendChild(historyItem);

    new QRCode(historyItem.querySelector('div'), {
        text: text,
        width: size,
        height: size,
        colorDark: color,
        colorLight: "#ffffff"
    });
}
