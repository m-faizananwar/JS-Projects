const questions = [
    { question: "What's the markup language?", a: "HTML", b: "CSS", c: "Java", d: "PHP", answer: "a" },
    { question: "Which language is used for styling web pages?", a: "HTML", b: "JQuery", c: "CSS", d: "XML", answer: "c" },
    { question: "Which language is used for web development?", a: "PHP", b: "Python", c: "JavaScript", d: "All of the above", answer: "d" },
    { question: "Which is a JavaScript framework?", a: "Django", b: "React", c: "Laravel", d: "Spring", answer: "b" },
    { question: "What does SQL stand for?", a: "Stylish Question Language", b: "Stylesheet Query Language", c: "Structured Query Language", d: "Statements Query Language", answer: "c" },
    { question: "Which is used for database management?", a: "Node.js", b: "MongoDB", c: "Angular", d: "React", answer: "b" },
    { question: "Which language is used for AI and Machine Learning?", a: "Python", b: "C++", c: "Java", d: "All of the above", answer: "a" },
    { question: "Which of the following is a NoSQL database?", a: "MySQL", b: "Oracle", c: "MongoDB", d: "PostgreSQL", answer: "c" },
    { question: "What does CSS stand for?", a: "Cascading Style Sheets", b: "Colorful Style Sheets", c: "Creative Style Sheets", d: "Computer Style Sheets", answer: "a" },
    { question: "Which language is primarily used for Android development?", a: "Swift", b: "Kotlin", c: "Objective-C", d: "Ruby", answer: "b" }
];

let index = 0;
let optionsSelected = [];

const question = document.getElementById('question');
const optionA = document.getElementById('a');
const optionB = document.getElementById('b');
const optionC = document.getElementById('c');
const optionD = document.getElementById('d');

const loadQuestion = () => {
    if (index < questions.length) {
        const data = questions[index];
        question.innerHTML = (index + 1) + '. ' + data.question;
        optionA.innerText = data.a;
        optionB.innerText = data.b;
        optionC.innerText = data.c;
        optionD.innerText = data.d;
    } else {
        console.log("No more questions.");
    }
}

const checkAnswer = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].answer === optionsSelected[i]) {
            score++;
        }
    }
    return score;
}

document.querySelector('.btn').addEventListener('click', () => {
    let inputOptions = document.querySelectorAll('.options');
    let inputSelected = null;
    inputOptions.forEach(input => {
        if (input.checked) {
            inputSelected = input.value;
            optionsSelected.push(inputSelected);
            input.checked = false;
        }
    });

    if (inputSelected) {
        index++;
        if (index < questions.length) {
            loadQuestion();
        } else {
            let score = checkAnswer();
            alert("Your score is " + score + " out of 10");
        }
    } else {
        alert("Please select an option");
    }
});

loadQuestion();
