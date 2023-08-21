const buttons = document.getElementsByTagName('button');
const list = document.getElementsByClassName('filterDiv');

buttons[0].addEventListener('click', () => {

    for (let i = 0; i < list.length; i++) {

        list[i].style.display = ''

    }

});

buttons[1].addEventListener('click', () => {

    for (let i = 0; i < list.length; i++) {

        if (list[i].className.includes('cars')) {

            list[i].style.display = ''
        }
        else {

            list[i].style.display = 'none';
        }

    }

});

buttons[2].addEventListener('click', () => {

    for (let i = 0; i < list.length; i++) {

        if (list[i].className.includes('animals')) {

            list[i].style.display = ''
        }
        else {

            list[i].style.display = 'none';
        }

    }

});

buttons[3].addEventListener('click', () => {

    for (let i = 0; i < list.length; i++) {

        if (list[i].className.includes('fruits')) {

            list[i].style.display = ''
        }
        else {

            list[i].style.display = 'none';
        }

    }

});

buttons[4].addEventListener('click', () => {

    for (let i = 0; i < list.length; i++) {

        if (list[i].className.includes('colors')) {

            list[i].style.display = ''
        }
        else {

            list[i].style.display = 'none';
        }

    }

});