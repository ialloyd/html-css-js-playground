const header = document.querySelector('h1');

header.addEventListener('click', (event) => {

    if (event.target.nextSibling.nextSibling.style.display == 'block') {

        event.target.nextSibling.nextSibling.style.display = '';
        event.target.classList.remove('minus');

    }
    else {

        event.target.nextSibling.nextSibling.style.display = 'block';
        event.target.classList.add('minus');

    }


})