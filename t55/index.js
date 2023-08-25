const list = document.querySelectorAll('img');
const container = document.querySelector('.container')

let arr = Array.from(list);

arr.forEach((item) => {

    item.addEventListener('click', (event) => {

        container.children[0].src = event.target.src;
        container.style.display = 'block';

    })

})


