const quizdata = [{question: "who is the prime minister of india",

a: "Vishal",
b:"Narendra Modi",
c: "Rahul Gandhi",
d: "Arvind Kejriwal",
 
correct:"b"},
{question: "What does German word 'Guten morgen' means",

a: "Good Morning",
b:"Good Night",
c: "Good Noon",
d: "Good Bye",
correct: "a"},

{question: "The best programming language of 2020 ",

a: "javaScript",
b:"Python",
c: "Java",
d: "C++",
correct: "b"},

{question: "What should be the main course of breakfast",

a: "Milk",
b:"Bread",
c: "Toast",
d: "Aaloo Paratha",
correct: "a"},];

const result = document.getElementById("result");
const answerEl = document.querySelectorAll(".answer"); 
const questionE1 = document.getElementById("questionE1");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

let currentquiz = 0;

loadquiz();

function loadquiz(){

    deselect();

const currentquizdata = quizdata[currentquiz];
questionE1.innerText = currentquizdata.question;

option1.innerText = currentquizdata.a;
option2.innerText = currentquizdata.b;
option3.innerText = currentquizdata.c;
option4.innerText = currentquizdata.d;

}
let score = 0;

function getselected(){
    const answerEl = document.querySelectorAll(".answer");
    let answer = undefined;
    answerEl.forEach((answerEl) =>{
           
           
               if(answerEl.checked){
                answer = answerEl.id;
               }   
    });
    return answer;
}

function deselect(){
    answerEl.forEach((answerEl) =>{
    answerEl.checked = false;
});
}

const submit = document.getElementById("submit");

submit.addEventListener("click",() =>{

    const answer = getselected();
    if(answer && answer === quizdata[currentquiz].correct ){
        score++
    }
    currentquiz++;   
    if (currentquiz < quizdata.length){
        loadquiz();
    }
    else {
      result.innerHTML = `<h2>You Scored ${score}/${quizdata.length}</h2>`;
    }

});