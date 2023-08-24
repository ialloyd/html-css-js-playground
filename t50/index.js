const list=document.querySelectorAll('.btn');

let arr=Array.from(list);

arr.forEach((item)=>{

    item.addEventListener('click',(event)=>{

        let currentActive=document.querySelector('.active');
        currentActive.className=currentActive.className.replace('active','');
        event.target.classList.add('active');
        
    })

})