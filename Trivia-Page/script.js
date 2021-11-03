// TODO: Add code to check answers to questions
let incorrect = document.getElementById('incorrect');
let wrongOpt = document.querySelectorAll('.wrong');

wrongOpt.forEach((button)=>{
        button.addEventListener('click', function() {
        button.style.backgroundColor="red";
        incorrect.style.display="block";
        if(correct.style.display =="block"){
        button.disabled = true;
        button.style.backgroundColor = "#d9edff";
        
    }
        setTimeout(function(){
         incorrect.style.display = "none";
         button.style.backgroundColor="#d9edff";
        }, 1000);
    
        });
});

let correct = document.getElementById('correct');
let rightOpt = document.querySelectorAll('.right')
rightOpt.forEach((button)=>{
        button.addEventListener('click', function() {
        button.style.backgroundColor="green";
        correct.style.display="block";
    
        
    });
});

let AnswerIncorrect = document.getElementById('AnswerIncorrect');
let AnswerCorrect = document.getElementById('AnswerCorrect');
let input = document.querySelector('input');

function answer(e){
if (input.value === 'Milkshake'){
    input.style.backgroundColor = "green";
    AnswerCorrect.style.display="block";
    e.preventDefault();
    } else {
        input.style.backgroundColor = "red";
        AnswerIncorrect.style.display = "block";
        setTimeout(function(){
         AnswerIncorrect.style.display = "none";
         input.style.backgroundColor = "white";
        }, 1000);
    }
e.preventDefault();
}

document.querySelector('.form').addEventListener('submit', answer);

function erase(){
    document.getElementById('form').reset();
    AnswerIncorrect.style.display = "none";
    AnswerCorrect.style.display = "none"
};



