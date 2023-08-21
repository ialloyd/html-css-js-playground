function createCounter() {
    let countA = 0;
    let countB = 0;
    
        function incrementA () {

            countA++;
            countB--;
            document.getElementsByTagName('h4')[0].innerHTML='A:'+countA+' '+'B:'+countB;
            if (countA === 10) {
                countA=0;
                countB=0;
                document.getElementsByTagName('h5')[0].innerHTML="Player A wins!";
            }
        }
        function incrementB() {

            countB++;
            countA--;
            document.getElementsByTagName('h4')[0].innerHTML='A:'+countA+' '+'B:'+countB;
            if (countB === 10) {
                countA=0;
                countB=0;
                document.getElementsByTagName('h5')[0].innerHTML="Player B wins!";
            }
        }
    
        function retrieve() {
            document.getElementsByTagName('h4')[0].innerHTML='A:'+countA+' '+'B:'+countB;
        }

        return {incrementA, incrementB, retrieve}

}


createCounter().retrieve();

document.getElementById('player-a').addEventListener('click', createCounter().incrementA);
document.getElementById('player-b').addEventListener('click', createCounter().incrementB);

