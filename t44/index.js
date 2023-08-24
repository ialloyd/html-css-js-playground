const ulist=document.getElementById('id01');
const list=document.querySelectorAll('li');
const sortButton=document.querySelector('button');

const arr=Array.from(list);

let flag=true;
sortButton.addEventListener('click',()=>{

    arr.sort((a,b)=>{

        if(flag){

            return Number(a.textContent)-Number(b.textContent);

        }
        else{

            return Number(b.textContent)-Number(a.textContent);
        }

    })

    flag=!flag;

    for(let item of arr){

        ulist.appendChild(item);
    }

})








