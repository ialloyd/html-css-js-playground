let image = document.getElementById('image');
let container = document.getElementById('container');
let source = document.getElementById('source');

let dragOver = (event) => {

    event.preventDefault();
    document.getElementsByTagName('p')[0].innerHTML = event.target.id;

}

let dropDown = (event) => {

    let element = document.getElementById(event.dataTransfer.getData('img'));
    event.target.appendChild(element);
    document.getElementsByTagName('p')[0].innerHTML = event.target.id + '98';

}

image.addEventListener('dragstart', (event) => {

    event.dataTransfer.setData('img', event.target.id);
    document.getElementsByTagName('p')[0].innerHTML = event.target.id;
})

container.addEventListener('dragover', dragOver);

container.addEventListener('drop', dropDown);

source.addEventListener('dragover', dragOver)

source.addEventListener('drop', dropDown)








