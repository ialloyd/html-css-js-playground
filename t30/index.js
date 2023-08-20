let h1 = document.getElementById('demo');

function showTime(x,y) {

    let count=0;

    let interval=setInterval(()=>{

        if(count<y){
            ++count;
            h1.innerHTML=new Date().toLocaleTimeString();
           
        }
        else{

            clearInterval(interval);
        }

    }, x*1000);
    

    
}

showTime(2, 5);