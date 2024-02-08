let resultMessage = document.getElementById('result')
const levelOne = document.querySelector('#level-1')
const playAgainBtn = document.querySelector('#replay-button')
const audio = new Audio('audio/Blop-Mark_DiAngelo-79054334.mp3')
let allPopped = document.querySelectorAll('.popped')
let allPimples = document.querySelectorAll('.pimple')
let maxPimples = 2;
let currentMax
let timeCount = 15
let currentTimeCount
let active = true
let win = false

function checkAnswers() {
    const answers = document.getElementById("quizForm").elements;
    let correctCount = 0;

    if (answers.q1.value === "d") {
      correctCount++;
    }
    if (answers.q2.value === "a") {
      correctCount++;
    }
    if (answers.q3.value === "a") {
      correctCount++;
    }

    if (correctCount === 3) {
      alert("Congratulations! You got all the questions right!");
      window.location.href = "game.html";
    } else {
      alert("Oops! Try again. You got " + correctCount + " out of 3 questions right.");
    }
  }
  
function gameInit() {
    levelOne.style.display = 'block'
    playAgainBtn.style.display = 'none'
    manyPimples()
}

const createPimple = function (circleSelector) {
    let newPimple = document.createElement('div');
    newPimple.setAttribute('class', 'pimple');

    // Get the dimensions and position of the specified circle
    let circle = document.querySelector(circleSelector);
    let circleRect = circle.getBoundingClientRect();

    // Define fixed positions within the specified circle
    let fixedPositions = [
        { top: circleRect.top + 50, left: circleRect.left + 20 },
        { top: circleRect.top + 80, left: circleRect.left + 50 },
        // Add more positions as needed
    ];

    // Choose a random fixed position
    let randomPosition = fixedPositions[Math.floor(Math.random() * fixedPositions.length)];

    document.body.appendChild(newPimple);
    newPimple.style.top = randomPosition.top + "px";
    newPimple.style.left = randomPosition.left + "px";
    active = true;
    win = false;

    newPimple.addEventListener('click', popPimple = e => {
        newPimple.classList.add('popped');
        audio.play();
        setTimeout(() => {
            newPimple.style.display = "none";
            currentMax -= 1;
            document.body.removeChild(newPimple);
            if (currentMax === 0) {
                youWon();
            }
        }, 1000);
    });
}

function manyPimples() {
    currentMax = maxPimples;
    
    // Create pimples within circle1
    for (let i = 0; i < maxPimples / 2; i++) {
        createPimple('.circle1');
    }

    // Create pimples within circle2
    for (let i = 0; i < maxPimples / 2; i++) {
        createPimple('.circle2');
    }
}

function checkWinLose() {
    if (currentMax > 0 && currentTimeCount === 0) {
        youLose()
    } gameRestart()
}

function youWon() {
    win = true
    resultMessage.innerHTML = 'You won!'
    gameRestart()
}


function gameRestart() {
    levelOne.style.display = 'none'
    playAgainBtn.style.display = 'block'
}

playAgainBtn.addEventListener('click', function () {
    clearPimples()
    gameInit()
    startTimer(timeCount)
    resultMessage.innerHTML = ''
})

function clearPimples() {
    allPimples = document.querySelectorAll('.pimple')
    for (let i = 0; i < allPimples.length; i++) {
        allPimples[i].remove()
    }
}

gameInit()