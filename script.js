let score = 0


function math(){
    document.querySelector('body').style.filter = 'hue-rotate(150deg)';
    
    let x = 0
    let sing
    let answer
    let question = document.querySelector('#Questão')
    let sign_chooser = Math.floor((Math.random() * 2) + 1);
    let where_answer = Math.floor((Math.random() * 6) + 1);
    let number_1 = Math.floor((Math.random() * 100) + 1);
    let number_2 = Math.floor((Math.random() * 100) + 1);
    let sign_choosed = sign_chooser; 

    switch(sign_choosed){
        case 1:
            answer = number_1 + number_2
            sing = '+'
            break
        case 2:
            answer = number_1 - number_2
            sing = '-'
            break
    }

    question.innerHTML = `${number_1} ${sing} ${number_2} = X`
    while(x <= 7){
        x += 1
        document.querySelector(`#pergunta_${where_answer}`).innerText = answer;
        document.querySelector(`#pergunta_${x}`).innerText = Math.floor((Math.random() * 100) + 1);
    }
} 

function check(buttomValue){
    let correctAnswer = eval(document.querySelector('#Questão').innerText.slice(0, 7))
    let userAnswer = buttomValue
    
    
    document.querySelector('#score-text').innerText = "Score: "
    if (Number(correctAnswer) === Number(userAnswer)){
        score = 10
        document.querySelector('#score-number').innerText = Number(document.querySelector('#score-number').innerText) + score
        math()
    } else{
        score = 5
        document.querySelector('body').style.filter = 'hue-rotate(50deg)';
        document.querySelector('#score-number').innerText = Number(document.querySelector('#score-number').innerText) - score
    }
}