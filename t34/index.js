function shiftC(str, shift){

    let res=[];

    for(let x of str){
  
        if(x.match(/[A-Z]/)){

           res.push(String.fromCharCode(((x.charCodeAt(0)-65+shift)%26)+65));
        }
        else if(x.match(/[a-z]/)){

            res.push(String.fromCharCode(((x.charCodeAt(0)-97+shift)%26)+97));
        }
        else{

            res.push(x);
        }

    }

    document.getElementsByTagName('h1')[0].innerHTML=res.join('');
}

shiftC('xyz',3)