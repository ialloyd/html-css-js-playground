document.getElementById('+').addEventListener('click',()=>{

    document.getElementById('result').value = Number(document.getElementById('f1').value )+Number(document.getElementById('f2').value);

});

document.getElementById('-').addEventListener('click',()=>{

    document.getElementById('result').value = Number(document.getElementById('f1').value )-Number(document.getElementById('f2').value);

});

document.getElementById('*').addEventListener('click',()=>{

    document.getElementById('result').value = Number(document.getElementById('f1').value )*Number(document.getElementById('f2').value);

});

document.getElementById('/').addEventListener('click',()=>{

    document.getElementById('result').value = Number(document.getElementById('f1').value )/Number(document.getElementById('f2').value);

});

document.getElementById('reset').addEventListener('click', ()=>{

    document.getElementById('result').value='';
    
});



