var queues;
var squared;

const answer_form = document.getElementById('answer');
const answer_parent = document.getElementById('answerParent');
const number_queue = document.querySelector('#number');
const start_button = document.getElementById('start-button');
const submit_button = document.getElementById('submit-button')
const score = document.querySelector('#score');

function randomNumber() {
    let newNumber = Math.floor(Math.random() * 30);
    squared = newNumber;
    return newNumber;
}

function start() {
    queues = 0;
    score.innerHTML = '0'
    perfectSquare = randomNumber();
    number_queue.innerHTML = perfectSquare + '²';
    start_button.style.display = "none";
    submit_button.style.display = "block";
    answer_form.disabled = false;
    answer_form.focus();
}

function checkAns() {
    if (queues == 9) {
        if (squared * squared == answer_form.value) {
            score.innerHTML = Number(score.innerHTML) + 1;
        }
        number_queue.innerHTML = "Press Start!";
        start_button.style.display = "block";
        submit_button.style.display = "none";
        answer_form.disabled = true;
    } else if (squared * squared == answer_form.value) {
        score.innerHTML = Number(score.innerHTML) + 1;
        perfectSquare = randomNumber();
        number_queue.innerHTML = perfectSquare + '²';
        queues += 1;
    } else if (answer_form.value == '') {
        return;
    } else if (squared * squared != answer_form.value) {
        console.log(squared * squared + 'CORRECT ANS,');
        perfectSquare = randomNumber();
        number_queue.innerHTML = perfectSquare + '²';
        queues += 1;
    }
}

function enterSub() {
    answer_parent.addEventListener("submit", e => {
        if (answer_form.value === '') {
            e.preventDefault();
        } else {
            checkAns();
            answer_form.value = '';
        }
    })
}

function buttonSub() {
    checkAns();
    answer_form.value = '';
}
