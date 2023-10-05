const welcomeMessage = "Willkommen auf unserer Cloud Engineering und DevOps Webseite!";
const header = document.querySelector('h1');
const showMoreButton = document.getElementById('showMoreButton');
const additionalInfo = document.getElementById('additionalInfo');

header.addEventListener('click', () => {
    alert(welcomeMessage);
});

showMoreButton.addEventListener('click', () => {
    if (additionalInfo.style.display === 'none') {
        additionalInfo.style.display = 'block';
        showMoreButton.textContent = 'Weniger anzeigen';
    } else {
        additionalInfo.style.display = 'none';
        showMoreButton.textContent = 'Mehr erfahren';
    }
});
