const close=document.querySelectorAll('.close')

const arr=Array.from(close);

arr.forEach((item)=>item.addEventListener('click',(event)=>{

    event.target.parentElement.style.display='none';

}))