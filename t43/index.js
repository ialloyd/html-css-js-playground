const sortButton = document.querySelector('button');
const listItems = document.querySelectorAll('li');
const unorderedList = document.querySelector('#id01');

const arr = Array.from(listItems);

let flag = false;
sortButton.addEventListener('click', () => {
    arr.sort((a, b) => {
        if (flag) {
            return b.textContent.localeCompare(a.textContent);
        } else {
            return a.textContent.localeCompare(b.textContent);
        }
    });
    flag = !flag;

    for (let item of arr) {
        unorderedList.appendChild(item);
    }
});
