const pwd = document.querySelector("input[type='password']");
const message = document.getElementById('message');
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

pwd.addEventListener('focus', () => {

    message.style.display = 'block';

});
pwd.addEventListener('blur', () => {

    message.style.display = 'none';

});

pwd.addEventListener('input', (event) => {

    if (event.target.value.match(/[A-Z]/)) {

        capital.classList.remove('invalid')
        capital.classList.add('valid')
    }
    else {

        capital.classList.remove('valid')
        capital.classList.add('invalid')

    }

    if (event.target.value.match(/[a-z]/)) {

        letter.classList.remove('invalid')
        letter.classList.add('valid')
    }
    else {

        letter.classList.remove('valid')
        letter.classList.add('invalid')


    }

    if (event.target.value.match(/[0-9]/)) {

        number.classList.remove('invalid')
        number.classList.add('valid')
    }
    else {

        number.classList.remove('valid')
        number.classList.add('invalid')


    }

    if (event.target.value.length >= 8) {

        length.classList.remove('invalid')
        length.classList.add('valid')
    }
    else {

        length.classList.remove('valid')
        length.classList.add('invalid')

    }

})