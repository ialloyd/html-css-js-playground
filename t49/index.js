let list=document.querySelectorAll('.btn');

let arr=Array.from(list);

arr.forEach((item)=>{

    item.addEventListener('click',()=>{

            item.classList.toggle('active')
        
    })
})