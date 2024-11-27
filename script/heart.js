const heart = document.getElementById('heart');
const heartFill = document.getElementById('heart-fill');

heart.addEventListener('click', () => {
    heart.style.display = 'none';  
    heartFill.style.display = 'inline';  
});

heartFill.addEventListener('click', () => {
    heart.style.display = 'inline';  
    heartFill.style.display = 'none';  
});