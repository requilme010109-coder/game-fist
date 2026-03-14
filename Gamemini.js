let score = 0;
let periksaJawaban = 0;
let isJawaban = false;
let soal = 0;
let maksimalSoal = 10;
const totalPertayaan = 10;


function getRamdomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    score = 0;
    soal = 0;
    document.getElementById('score').innerText = score;
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('game-out').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    generatePertayaan()
} 

function generatePertayaan(){
    
    isJawaban = true;
    document.getElementById('pesan').innerText ="";

    const operations = ['+', '-', '*', '/'];
    const operation= operations[getRamdomInt(0,3)];

    if (soal >= maksimalSoal) {
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('game-out').classList.remove('hidden')
    document.getElementById('final-score').innerText = score
    return;
    }
    soal++;

    let num1, num2;

    if (operation === '+') {
        num1 = getRamdomInt(1,50);
        num2 = getRamdomInt(1,50);
        periksaJawaban = num1 + num2;
    } else if (operation === '-') {
        num1 = getRamdomInt(10,50);
        num2 = getRamdomInt(1, num1);
        periksaJawaban = num1 - num2;
    } else if (operation === '*') {
        num1 = getRamdomInt(2,12);
        num2 = getRamdomInt(2,12);
        periksaJawaban = num1 * num2
    } else if (operation === '/') {
        num2 = getRamdomInt(2, 10);
        periksaJawaban = getRamdomInt(2, 10);
        num1 = num2 * periksaJawaban;
    }

     let symbol = operation === '*' ? '×' : (operation === '/' ? '÷' : operation);
            document.getElementById('pertayaan').innerText = `${num1} ${symbol} ${num2} = ?`;


            generateOptions(periksaJawaban)
}


function generateOptions(correct) {
let options = [correct];
  while (options.length < 4) {
    let wrong = correct + getRamdomInt(-5, 5);
    if(wrong !== correct && wrong >= 0 && !options.includes(wrong)) {
        options.push(wrong);
    }
  }

   options.sort(() => Math.random() -0.5);

   const optionsContainer = document.getElementById('jawaban');
   optionsContainer.innerHTML ='';

   options.forEach(opt => {
    const btn = document.createElement('button')
    btn.className = 'option-btn'
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt, btn);
    optionsContainer.appendChild(btn);
   });
}

 function checkAnswer(selected, btnElement) {
            if (!isJawaban) return; 
            isJawaban = false;

            const buttons = document.querySelectorAll('.option-btn');

            if (selected === periksaJawaban) {
                btnElement.classList.add('correct');
                score += 10;
                document.getElementById('score').innerText = score;
                document.getElementById('pesan').innerText = "Benar! 🎉";
                document.getElementById('pesan').style.color = "green";
            } else {
                btnElement.classList.add('wrong');
                document.getElementById('pesan').innerText = "Salah! 😢";
                document.getElementById('pesan').style.color = "red";
                
                buttons.forEach(btn => {
                    if (parseInt(btn.innerText) === periksaJawaban) {
                        btn.classList.add('correct');
                    }
                });
            }

            setTimeout(() => {
                generatePertayaan();
            }, 1500);
        }

        function endGame() {
            location.reload();
        } 
        