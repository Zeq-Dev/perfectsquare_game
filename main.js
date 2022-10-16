var score = document.getElementById('score');
var queues = 1;
var perfectSquare = '#' + queues;

function randomNum() {
    queues = 0;
    score.innerHTML = 0;
    perfectSquare = Math.floor(Math.random() * 30);
    document.getElementById("number").innerHTML = perfectSquare + '²';
    document.getElementById("start-button").style.display = "none";
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("answer").disabled = false;
    document.getElementById("answer").focus();   
}

function submitBut () {
    var answer = document.getElementById('answer').value;
    document.getElementById('answer').value = '';
    console.log('#'+queues)
    if (queues == 10) {
        document.getElementById("number").innerHTML = "Press Start!";
        document.getElementById("start-button").style.display = "block";
        document.getElementById("submit-button").style.display = "none";
        document.getElementById("answer").disabled = true;
    } else if (perfectSquare * perfectSquare == answer) {
        score.innerHTML = parseInt(score.innerHTML) + 1;
        perfectSquare = Math.floor(Math.random() * 30);
        document.getElementById("number").innerHTML = perfectSquare + '²';
        queues + 1;
    } else if (answer == '') {
        return;
    } else {
        console.log(perfectSquare * perfectSquare);
        console.log('INCORRECT');
        perfectSquare = Math.floor(Math.random() * 30);
        document.getElementById("number").innerHTML = perfectSquare + '²';
        queues + 1;
    }
}

function subAnw() {
    document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
            var answer = document.getElementById('answer').value;
            document.getElementById('answer').value = '';
            console.log('#'+queues)
            if (queues == 10) {
                document.getElementById("number").innerHTML = "Press Start!";
                document.getElementById("start-button").style.display = "block";
                document.getElementById("submit-button").style.display = "none";
                document.getElementById("answer").disabled = true;
            } else if (perfectSquare * perfectSquare == answer) {
                score.innerHTML = parseInt(score.innerHTML) + 1;
                perfectSquare = Math.floor(Math.random() * 30);
                document.getElementById("number").innerHTML = perfectSquare + '²';
                queues += 1;
            } else if (answer == '') {
                return;
            } else {
                console.log(perfectSquare * perfectSquare);
                console.log('INCORRECT');
                perfectSquare = Math.floor(Math.random() * 30);
                document.getElementById("number").innerHTML = perfectSquare + '²';
                queues += 1;
            }
        }
    })
}
