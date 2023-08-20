let myObject = { a: 1, b: 2, c: 3 };
let res={};

function func(myObject, fn, t){
    
    for(let key in myObject){

        res[myObject[key]]=key;

    }
    setTimeout(fn, t*1000);
}

let fn=()=>document.getElementById('demo').innerHTML=JSON.stringify(res);
func(myObject, fn, 5)