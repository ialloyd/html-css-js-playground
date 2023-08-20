function createCounter() {
    let countA = 0;
    let countB = 0;
    return {
        incrementA: function () {

            countA++;
            countB--;
            document.getElementsByTagName('h4')[0].innerHTML='A:'+countA+' '+'B:'+countB;
            if (countA === 10) {
                countA=0;
                countB=0;
                document.getElementsByTagName('h5')[0].innerHTML="Player A wins!";
            }
        },
        incrementB: function () {

            countB++;
            countA--;
            document.getElementsByTagName('h4')[0].innerHTML='A:'+countA+' '+'B:'+countB;
            if (countB === 10) {
                countA=0;
                countB=0;
                document.getElementsByTagName('h5')[0].innerHTML="Player B wins!";
            }
        },
    
        retrieve: function () {
            document.getElementsByTagName('h4')[0].innerHTML='A:'+countA+' '+'B:'+countB;
        }
    };
}

const counter = createCounter();
counter.retrieve();

document.getElementById('player-a').addEventListener('click', counter.incrementA);
document.getElementById('player-b').addEventListener('click', counter.incrementB);

