let color = '#000'; // Changed const to let

function randomColorGenerator() {
    color = '#' + generateRandom() + generateRandom() + generateRandom();
    document.getElementById('color').innerText = color; // Corrected method name
    document.getElementsByClassName('main')[0].style.backgroundColor = color; // Corrected method name and added index
    navigator.clipboard.writeText(color); // Corrected method name
}

function generateRandom() {
    let generatedRandomNumber = Math.floor(Math.random() * 256);
    let hex = generatedRandomNumber.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

// Initial background color setup
document.getElementsByClassName('main')[0].style.backgroundColor = color; // Corrected method name and added index