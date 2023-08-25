const clickMe = document.querySelector('button');
const progress = document.getElementById('myBar');
const percent = document.querySelector('p');
let id;
clickMe.addEventListener('click', () => {
    clearInterval(id);
    let width = 10;
    id = setInterval(() => {
        width++;
        progress.style.width = width + '%';
        progress.textContent = width + '%';

        if (width == 100) {

            clearInterval(id);
        }
    }, 30)
})