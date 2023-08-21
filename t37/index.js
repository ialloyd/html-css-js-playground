let str = document.getElementsByTagName('input');
let h1 = document.getElementsByTagName('h1');
let sent = '';
let find = '';
let rep = '';
str[0].addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        h1[0].innerHTML = str[0].value;
        sent = str[0].value;
    }
});

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    h1[1].innerHTML = str[1].value;
    find = str[1].value;
    h1[2].innerHTML = str[2].value;
    rep = str[2].value;
    let res = sent.replaceAll(find, rep);
    h1[3].innerHTML = res;

});