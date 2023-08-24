let typeWriter=document.querySelector('p');
let text='Lorem ipsum typing effect! Great stuff! Cant wait to check out the Try it Yourself!';
let clickMe=document.querySelector('button');
let char='';
let i=0;

let fn=()=>{

    if(i<text.length){
        char=char+text[i];
        typeWriter.textContent=char;
        ++i;
    }
    else{
        clearInterval(id);
    }
    
}

let a=()=>id=setInterval(fn,50);
clickMe.addEventListener('click',a);

// let fn=()=>{

//     if(i<text.length){

//         char=char+text[i];
//         typeWriter.textContent=char;
//         setTimeout(fn,50);
//         i++;
//     }
    
// }

// clickMe.addEventListener('click',fn);