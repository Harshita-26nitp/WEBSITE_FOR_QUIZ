const questions=[
    {
        question:"What is the pH value of the human body?",
        answers:[
            {text:"9.2 to 9.8",correct:false},
            {text:"7.0 to 7.8",correct:true},
            {text:"6.1 to 6.3",correct:false},
            {text:"5.4 to 5.6",correct:false},
        ]
    },
{
    question:"Which of the following are called 'Key Industrial animals'?",
    answers:[
        {text:"Producers",correct:false},
        {text:"Tertiary consumers",correct:false},
        {text:"Primary consumers",correct:true},
        {text:"None of these",correct:false},
    ]
},
{
    question:" The Samkhya School of Philosophy was founded by",
    answers:[
        {text:"Gautam Buddha",correct:false},
        {text:"Mahipala",correct:false},
        {text:"Gopala",correct:false},
        {text:"Kapila",correct:true},
    ]
},
{
    question:"Pustaz grasslands are situated at?",
    answers:[
        {text:"South Africa",correct:false},
        {text:"China",correct:false},
        {text:"Hungary",correct:true},
        {text:"USA",correct:false},
    ]
},
{
    question:"Which of the given compounds is used to make fireproof clothing?",
    answers:[
        {text:"Aluminum chloride",correct:false},
        {text:"Aluminum Sulphate",correct:true},
        {text:"Magnesium Chloride",correct:false},
        {text:"Magnesium Sulphate",correct:false},
    ]
}
];
const questionElement = document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHtml="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        
    });
}
    function resetState(){
        nextButton.style.dispplay="none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild)
        }
    }
    function selectAnswer(e){
        const selectedBtn=e.target;
        const isCorrect=selectedBtn.dataset.correct=="true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
             score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextButton.style.display="block";
    
}
function showScore(){
  resetState();
  questionElement.innerHTML="You scored " + score+" out of "+questions.length+ "!";
  nextButton.style.display="block"; 
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }

});
startQuiz();


