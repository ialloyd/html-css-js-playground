const clickMe = document.querySelector('button');
const box = document.querySelector('.box')
clickMe.addEventListener('click', () => {
    let pos = 0;
    let id = setInterval(() => {
        ++pos;
        box.style.bottom = pos + 'px'
        box.style.right = pos + 'px'
        if (pos == 450) {

            clearInterval(id);

        }
    }, 1)

})