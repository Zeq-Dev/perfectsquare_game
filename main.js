var queues;
var squared;
var correct = new Audio('resources/correct.mp3');
var incorrect = new Audio('resources/incorrect.mp3');

const answer_form = document.getElementById('answer');
const answer_parent = document.getElementById('answerParent');
const number_queue = document.querySelector('#number');
const start_button = document.getElementById('start-button');
const submit_button = document.getElementById('submit-button');
const queue = document.getElementById('queue');
const score = document.querySelector('#score');

function randomNumber() {
    let newNumber = Math.floor(Math.random() * 30);
    squared = newNumber;
    return newNumber;
}

function start() {
    queues = 1;
    queue.innerHTML = queues
    score.innerHTML = '0'
    perfectSquare = randomNumber();
    number_queue.innerHTML = perfectSquare + '²';
    start_button.style.display = "none";
    submit_button.style.display = "block";
    answer_form.disabled = false;
    answer_form.focus();
}

function checkAns() {
    if (queues == 10) {
        if (squared * squared == answer_form.value) {
            score.innerHTML = Number(score.innerHTML) + 1;
            correct.play();
        }
        queue.innerHTML = 0
        number_queue.innerHTML = "Press Start!";
        start_button.style.display = "block";
        submit_button.style.display = "none";
        answer_form.disabled = true;
    } else if (squared * squared == answer_form.value) {
        score.innerHTML = Number(score.innerHTML) + 1;
        perfectSquare = randomNumber();
        number_queue.innerHTML = perfectSquare + '²';
        queues += 1;
        queue.innerHTML = queues
        correct.play();
    } else if (answer_form.value == '') {
        return;
    } else if (squared * squared != answer_form.value) {
        console.log(squared * squared + 'CORRECT ANS,');
        perfectSquare = randomNumber();
        number_queue.innerHTML = perfectSquare + '²';
        queues += 1;
        queue.innerHTML = queues
        incorrect.play();
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
