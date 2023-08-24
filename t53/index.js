const clickMe = document.querySelector('button');
const progress = document.getElementById('myBar')
const percent = document.querySelector('p')

clickMe.addEventListener('click', () => {
    let width = 10;
    let id = setInterval(() => {
        width++;
        progress.style.width = width + '%';
        progress.textContent = width + '%';

        if (width == 100) {

            clearInterval(id);
        }
    }, 30)
})