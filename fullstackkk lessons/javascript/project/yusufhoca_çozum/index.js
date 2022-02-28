const down = document.querySelector(".down")
const up = document.querySelector(".up")
const guess = document.querySelector("#guess-number")
const guessBtn = document.querySelector("#guess-btn")
const report = document.querySelector(".report")
const attempts = document.querySelector(".attempts")
const easy = document.querySelector("#easy")
const hard = document.querySelector("#hard")
const resetBtn = document.querySelector(".reset")

let isGameOver = false;
const prevGuesses = []

let answer = Math.floor(Math.random() * 100) + 1
console.log(answer)

guessBtn.addEventListener("click", () => {
    
    if (isGameOver) return;

    if (prevGuesses.includes(guess.value)) {
        report.innerText = `You already guessed ${guess.value}`;
    }
    else {
        if (guess.value > answer) {
            report.innerText = "Little lower!";
            up.innerText = guess.value

        } else if (guess.value < answer) {
            report.innerText = "Little higher!";
            down.innerText = guess.value
        } else {
            report.innerText = `You got it! The answer was ${answer}.`
           
        }

        prevGuesses.push(guess.value)
        attempts.innerText -= 1

        
        if (attempts.innerText == "0"){
            report.innerText = `You run out of attempts! The answer was ${answer}.`
           
        }

    }
})

resetBtn.addEventListener("click", () => {
    guess.value ="";
    
    up.innerText = 100
    down.innerText = 1
    report.innerText = "Make a guess!"
    attempts.innerText = 10
    for (let i = 0; i < prevGuesses.length; i++) {
        prevGuesses.shift()
        
    }
    prevGuesses.pop()
    console.log(prevGuesses);
})

