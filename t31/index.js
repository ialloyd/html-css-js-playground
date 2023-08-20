let h1 = document.getElementById('demo')

let arr = [1, 2, 3]

let obj = {};

for(let i=arr.length-1; i>=0; i--){

    obj={value:arr[i], rest:obj}


}

h1.innerHTML=JSON.stringify(obj);
