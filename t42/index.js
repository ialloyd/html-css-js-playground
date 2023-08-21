const button=document.getElementsByTagName('button')[0];

const list=document.getElementsByTagName('li');

let arr=[];

for(let item of list){

        arr.push(item);
}

button.addEventListener('click',()=>{

    arr.sort((a,b)=>a.textContent.localeCompare(b.textContent));

   
    for(let x of arr){

        list[0].parentElement.appendChild(x);
    }
 
})