let myObject = { a: 1, b: 2, c: 3 };
let res='';

for(let key in myObject){

    res=res+key+':'+myObject[key]+', ';

}
document.getElementById('demo').innerHTML=res.slice(0,-2);