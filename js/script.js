const searchIcon = document.getElementById('searchIcon');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

searchIcon.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});
