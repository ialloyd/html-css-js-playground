let search = document.getElementsByTagName('input')[0];
let rows = document.getElementsByTagName('tr');

search.addEventListener('input', (event) => {

    for (let i = 1; i < rows.length; i++) {

        if (rows[i].firstElementChild.textContent.toLowerCase()
            .includes(event.target.value.toLowerCase())) {

            rows[i].style.display = '';


        }
        else {

            rows[i].style.display = 'none';


        }
    }
})