let list=document.getElementsByTagName('li');
let search=document.getElementsByTagName('input')[0];

search.addEventListener('input',(event)=>{
    
    for(let i=0; i<list.length; i++){

        if(!list[i].children[0].textContent.toLowerCase().includes(event.target.value.toLowerCase())){

           list[i].style.display='none';
        }
        else{

            list[i].style.display='block';
        }
    }


})
