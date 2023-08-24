const drop = document.querySelector('button');
const content = document.querySelector('.dropdown-content');
const search = document.querySelector('input');
const links = document.querySelectorAll('a');
let flag = true;

let arr = Array.from(links);
drop.addEventListener('click', () => {

    if (flag) {

        content.style.display = 'block';

    }
    else {

        content.style.display = 'none';
    }

    flag = !flag;

})


search.addEventListener('input', (event) => {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].textContent.toLowerCase().includes(event.target.value.toLowerCase())) {

            arr[i].style.display = '';


        }
        else {

            arr[i].style.display = 'none';

        }
    }


})


