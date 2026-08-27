let questionNum = 1;
let correctAnswer = 4;
let selectedAnswer = 0;
let score = 0;
let answerable = 1;
let time = 20;

const questionNumElement = document.getElementById('questionNum');
const question = document.getElementById('question');
const image = document.getElementById('Image');
const button1 = document.getElementById('answer1');
const button2 = document.getElementById('answer2');
const button3 = document.getElementById('answer3');
const button4 = document.getElementById('answer4');
const timer = document.getElementById('timer');
const scoreDisplay = document.getElementById('scoreDisplay');
let correctAnswerElement = document.getElementById('answer' + correctAnswer);
let selectedAnswerElement = document.getElementById('answer' + selectedAnswer);

function keepAtBottom() {
    window.scrollTo(0, document.body.scrollHeight);
    requestAnimationFrame(keepAtBottom);
}

keepAtBottom();
document.body.style.overflow = "hidden";

questionNumElement.innerHTML = "Question " + questionNum;
question.innerHTML = "What is my name?";
image.src = "whome.jpg";
button1.innerHTML = "Dumbinik >:(";
button2.innerHTML = "Coolinik B)";
button3.innerHTML = "Dominic"
button4.innerHTML = "Dominik"
scoreDisplay.innerHTML = "Score: " + score

async function startTimer() {
    var x = setInterval(function() {
        timer.innerHTML = time;
        time--;
        
        if (answerable == 0) {
            clearInterval(x);
        }

        if (time < 0) {
            clearInterval(x);
            timer.innerHTML = "0";
            selectedAnswer = 0;
            showAnswer(selectedAnswer);
        }
    }, 1000);
}

function showAnswer(selAnswer) {
    answerable = 0;
    selectedAnswerElement = document.getElementById('answer' + selectedAnswer);
    if (selAnswer == correctAnswer) {
        score++;
        scoreDisplay.innerHTML = "Score: " + score
        new Audio('correct.mp3').play();
    }
    if (selAnswer != correctAnswer) {
        if (selAnswer != 0) {
            selectedAnswerElement.innerHTML = selectedAnswerElement.innerHTML + "  ❌";
        }
        new Audio('wrong.mp3').play();
    }
    correctAnswerElement.innerHTML = correctAnswerElement.innerHTML + "  ✅";
    setTimeout (() => {
        nextQuestion()
        answerable = 1;
    }, 3000)
}

function nextQuestion() {
    questionNum++;
    questionNumElement.innerHTML = "Question " + questionNum;
    if (questionNum == 2) {
        question.innerHTML = "When was I released?";
        image.src = "baby.jpg";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "idk";
        button2.innerHTML = "in between 2000 and 2011";
        button3.innerHTML = "2026";
        button4.innerHTML = "2013";
    }
    if (questionNum == 3) {
        question.innerHTML = "What is the game AirXonix";
        image.src = "airxonix.jpg";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "A puzzle game";
        button2.innerHTML = "A horror game";
        button3.innerHTML = "A good game :)";
        button4.innerHTML = "A fighting game";
    }
    if (questionNum == 4) {
        question.innerHTML = "What is the capital of São Tomé and Príncipe";
        image.src = "saotome.jpg";
        correctAnswer = 2;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Tomé São";
        button2.innerHTML = "São Tomé";
        button3.innerHTML = "Sao Tome";
        button4.innerHTML = "Príncipe";
    }
    if (questionNum == 5) {
        question.innerHTML = "What is this?";
        image.src = "nothing.png"
        correctAnswer = 3;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "DOMINIK IMPOSSIBLE QUIZ!!!!";
        button2.innerHTML = "Everything";
        button3.innerHTML = "Nothing";
        button4.innerHTML = "Nothig";
    }
    if (questionNum == 6) {
        question.innerHTML = "QUICK!!!! THE ANSWER IS BLUE!!!!";
        image.src = "blue.jpg";
        correctAnswer = 2;
        time = 5;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Green";
        button2.innerHTML = "Yellow";
        button3.innerHTML = "Red";
        button4.innerHTML = "Blue";
    }
    if (questionNum == 7) {
        question.innerHTML = "Who created Code Ninias?";
        image.src = "codeninjas.jpg";
        correctAnswer = 2;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "David Graham";
        button2.innerHTML = "Me >:)";
        button3.innerHTML = "Valentino";
        button4.innerHTML = "You";
    }
    if (questionNum == 8) {
        question.innerHTML = "What kind of company is Code Ninias?";
        image.src = "nothing.png";
        correctAnswer = 3;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "It isn't a company";
        button2.innerHTML = "A company that teaches coding";
        button3.innerHTML = "An imaginary one";
        button4.innerHTML = "sum like home depot";
    }
    if (questionNum == 9) {
        question.innerHTML = "What is 'your name'?";
        image.src = "nothing.png";
        correctAnswer = 4;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "*You say your name*";
        button2.innerHTML = "Dominik";
        button3.innerHTML = "Valentino";
        button4.innerHTML = "Just some words";
    }
    if (questionNum == 10) {
        question.innerHTML = "Who is this character from One Piece?";
        image.src = "farafara.jpg";
        correctAnswer = 3;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Glubagluba";
        button2.innerHTML = "Heeroheero";
        button3.innerHTML = "Farafara";
        button4.innerHTML = "Skibidibi";
    }
    if (questionNum == 11) {
        question.innerHTML = "How to center div";
        image.src = "nothing.png";
        correctAnswer = 2;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "div{Display: grid; text-align: center;}";
        button2.innerHTML = "div{Display: flex; Justify-content: center; align-items: center;}";
        button2.style.fontSize = "1.5em";
        button3.innerHTML = "div{make me go middle}";
        button4.innerHTML = "div{div-align: center;}";
    }
    if (questionNum == 12) {
        question.innerHTML = "What question is this?";
        image.src = "questionmark.png";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "12";
        button2.innerHTML = "The question that asks 'what question is this'";
        button2.style.fontSize = "1.9em";
        button3.innerHTML = "idk";
        button4.innerHTML = "It's a question thats for sure!";
    }
    if (questionNum == 13) {
        question.innerHTML = "If you failed that last question you...";
        image.src = "nothing.png";
        correctAnswer = 4;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Are goated";
        button2.innerHTML = "Have a tumor";
        button2.style.fontSize = "2em";
        button3.innerHTML = "Can't read";
        button4.innerHTML = "Have a severe skill issue";
    }
    if (questionNum == 14) {
        question.innerHTML = "I turn polar bears white and I will make you cry. I make guys have to pee and girls comb their hair. I make celebrities look stupid and normal people look like celebrities. I turn pancakes brown and make your champagne bubble. If you squeeze me, I'll pop. If you look at me, you'll pop. Can you guess the riddle?";
        image.src = "nothing.png";
        correctAnswer = 3;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Yes.";
        button2.innerHTML = "Melanin.";
        button3.innerHTML = "No.";
        button4.innerHTML = "Nothing.";
    }
    if (questionNum == 15) {
        question.innerHTML = "Was the last riddle stupid?";
        image.src = "nothing.png";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "YES";
        button2.innerHTML = "NO";
        button3.innerHTML = "maybe so...";
        button4.innerHTML = "idk";
    }
    if (questionNum == 16) {
        question.innerHTML = "I'm running out of ideas all answers are correct.";
        image.src = "brokenidea.jpg";
        correctAnswer = 2;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "yeah";
        button2.innerHTML = "no ur lying";
        button3.innerHTML = "wait really?";
        button4.innerHTML = "ok";
    }
    if (questionNum == 17) {
        question.innerHTML = "How many images have there been so far?";
        image.src = "nothing.png";
        correctAnswer = 2;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "3";
        button2.innerHTML = "9";
        button3.innerHTML = "6";
        button4.innerHTML = "13";
    }
    if (questionNum == 18) {
        question.innerHTML = "Fill in the blank. 'In 1939, Ernest Vincent Wright published Gadsby, a 50,000-word novel written entirely without using the letter [______].'"
        image.src = "nothing.png";
        correctAnswer = 3;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "F";
        button2.innerHTML = "Z";
        button3.innerHTML = "E";
        button4.style.fontSize = "1.5em"
        button4.innerHTML = "This is a really cool question! Btw the answer is either G A or D.";
    }
    if (questionNum == 19) {
        question.innerHTML = "A guy bought a plant and took care of it perfectly every day. Why didn't it grow?"
        image.src = "nothing.png";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Cuz it was plastic";
        button2.innerHTML = "Because it was an air plant and he put it in soil";
        button3.innerHTML = "Cuz dark magic";
        button4.style.fontSize = "2em"
        button2.style.fontSize = "1.5em"
        button4.innerHTML = "Cuz it was shy";
    }
    if (questionNum == 20) {
        question.innerHTML = "Whats the longest english word?"
        image.src = "name.png";
        correctAnswer = 4;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Supercalafragilisticexpialadocious";
        button2.innerHTML = "Antidisestablishmentarianism";
        button3.innerHTML = "Hippopotomonstrosesquippedaliophobia";
        button2.style.fontSize = "2em"
        button4.innerHTML = "Pneumonoultramicroscopicsilicovolcanoconiosis";
    }
    if (questionNum == 21) {
        question.innerHTML = "What is Valentinos least favorite letter?"
        image.src = "alphabet.jpg";
        correctAnswer = 4;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Z";
        button2.innerHTML = "X";
        button3.innerHTML = "He has no least favorite letter!";
        button4.innerHTML = "M";
    }
    if (questionNum == 22) {
        question.innerHTML = "True or False"
        image.src = "nothing.png";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "True";
        button2.innerHTML = "False";
        button3.innerHTML = "Yes";
        button4.innerHTML = "No";
    }
    if (questionNum == 23) {
        question.innerHTML = "Damn..."
        image.src = "damn.jpg";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Is 😂";
        button2.innerHTML = "Isn't 😔";
        button3.innerHTML = "Will 🥹";
        button4.innerHTML = "Again 🥳";
    }
    if (questionNum == 24) {
        question.innerHTML = "Cre'n preeu-valley 'sy frank?"
        image.src = "nothing.png";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Oh, ta, ta, she paris eh";
        button2.innerHTML = "Chanelfysayms";
        button3.innerHTML = "What language is this?";
        button4.innerHTML = "She Manninagh yn çhengey agh cha nel shoh kiart";
    }
    if (questionNum == 25) {
        question.innerHTML = "QUICK! YOU HAVE 60 SECONDS TO DECODE THIS! 01110100 01101000 01101001 01110011 00100000 01101001 01110011 00100000 01110100 01101000 01100101 00100000 01101011 01100101 01111001 00100001 00100001 00100001"
        image.src = "nothing.png";
        correctAnswer = 2;
        time = 60;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "kitty :3";
        button2.innerHTML = "this is the key!!!"
        button3.innerHTML = "this isn't the key.";
        button4.innerHTML = "AHHHHH OH MY GOD I'M DYING HELP ME!!!!!";
    }
    if (questionNum == 26) {
        question.innerHTML = "Choose a random answer. 1 in 4 change you get this right!"
        image.src = "nothing.png";
        correctAnswer = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "1";
        button2.innerHTML = "2"
        button3.innerHTML = "3";
        button4.innerHTML = "4";
    }
    if (questionNum == 27) {
        question.innerHTML = "Who is this?"
        image.src = "whoisthis.png";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Who is this?";
        button2.innerHTML = "Bob."
        button3.innerHTML = "Oh yo that's Jarthawlamewl!";
        button4.innerHTML = "That's my boy Markimiah.";
    }
    if (questionNum == 28) {
        question.innerHTML = "How many seconds do you have to answer this question?"
        image.src = "clock.jpg";
        correctAnswer = 3;
        time = 34;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "36";
        button2.innerHTML = "20"
        button3.innerHTML = "34";
        button4.innerHTML = "35";
    }
    if (questionNum == 29) {
        question.innerHTML = "how many m's are there? MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"
        image.src = "m.jpg";
        correctAnswer = 2;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "30";
        button2.innerHTML = "39"
        button3.innerHTML = "32";
        button4.innerHTML = "31";
    }
    if (questionNum == 30) {
        question.innerHTML = "If you were to feed a monkey ten tank trucks, and it were to feed itself the sun right after, what would I be named? Also if you were to go to the center of the moon, and eat the moon with the monkey, ten tank trucks would appear right out of the monkeys stomach. I just thought that was a cool fact. Also you have ten fingers which is also cool."
        image.src = "nothing.png";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Dominik";
        button2.innerHTML = "10"
        button3.innerHTML = "Suns";
        button4.innerHTML = "Four";
    }
    if (questionNum == 31) {
        question.innerHTML = "On 11:01 AM 2026-08-24, What did Ethan say?"
        image.src = "ethan.jpg";
        correctAnswer = 4;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "NOOOOOOOOOOOOOO";
        button2.innerHTML = "You should make more questions for the blookit."
        button3.innerHTML = "K here go to the tall building!";
        button4.innerHTML = "My best friends don't even remember my name.";
    }
    if (questionNum == 32) {
        question.innerHTML = "What percentage and level is this? (Geometry Dash)"
        image.src = "gd.png";
        correctAnswer = 2;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Xo - 64%";
        button2.innerHTML = "8o - 20%"
        button3.innerHTML = "Demon Mixed - 46%";
        button4.innerHTML = "Thunder Boy - 100%";
    }
    if (questionNum == 33) {
        question.innerHTML = "Which one is a celebrate?"
        image.src = "nothing.png";
        correctAnswer = 1;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "The bronze gate";
        button2.innerHTML = "Jimmy Momma"
        button3.innerHTML = "The rock known as Obamna";
        button4.innerHTML = "Veritickle attack";
    }
    if (questionNum == 34) {
        question.innerHTML = "Whats my favorite secret boss in deltarune?"
        image.src = "deltarune.jpg";
        correctAnswer = 4;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Spamton";
        button2.innerHTML = "Jevil"
        button3.innerHTML = "Ievil";
        button4.innerHTML = "The roaring knight";
    }
    if (questionNum == 35) {
        question.innerHTML = "OH HOH HOH!!!! speedwaGON!"
        image.src = "speedwagon.jpg";
        correctAnswer = 2;
        time = 20;
        button1.style.fontSize = "1.5em";
        button2.style.fontSize = "1.5em";
        button3.style.fontSize = "1.5em";
        button4.style.fontSize = "1.5em";
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "IS THAT A DELTARUNE REFRENCE?!?!?!?!?";
        button2.innerHTML = "IS THAT A JOJO REFRENCE?!?!?!?!"
        button3.innerHTML = "IS THAT AN UNDERTALE REFRENCE!??!?!";
        button4.innerHTML = "No refrence here. Just jibber jabber.";
    }
    if (questionNum == 36) {
        question.innerHTML = "What color are Spongebobs socks?"
        image.src = "spongebob.jpg";
        correctAnswer = 1;
        time = 20;
        button1.style.fontSize = "2em";
        button2.style.fontSize = "2em";
        button3.style.fontSize = "2em";
        button4.style.fontSize = "2em";
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "White, red and blue.";
        button2.innerHTML = "White."
        button3.innerHTML = "White and black.";
        button4.innerHTML = "He has socks?";
    }
    if (questionNum == 37) {
        question.innerHTML = "What sound does a cat make?"
        image.src = "kitty.jpg";
        correctAnswer = 2;
        time = 20;
        button4.style.fontSize = "1em";
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Neow!";
        button2.innerHTML = "Meow!"
        button3.innerHTML = "Meew!";
        button4.innerHTML = "NYEEEEEEEEOOOOOOOOM ZHOOOOOOOOOOOOM IM A CAR BEEP BEEP";
    }
    if (questionNum == 38) {
        question.innerHTML = "What is Valentino allergic to?"
        image.src = "allergies.jpg";
        correctAnswer = 3;
        time = 20;
        button3.style.fontSize = "1.7em";
        button4.style.fontSize = "2em"
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Nuts";
        button2.innerHTML = "Bugs"
        button3.innerHTML = "Sum random chemical that was in the ground";
        button4.innerHTML = "Bees";
    }
    if (questionNum == 39) {
        question.innerHTML = "Who are you?"
        image.src = "finger.png";
        correctAnswer = 3;
        time = 20;
        button3.style.fontSize = "2em"
        button4.style.fontSize = "1.3em"
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Dominik";
        button2.innerHTML = "I exist"
        button3.innerHTML = "*States my name*";
        button4.innerHTML = "I am the result of 1 Million years of human evolution...";
    }
    if (questionNum == 40) {
        question.innerHTML = "How many extreme demons have I beat?"
        image.src = "geometrydash.jpg";
        correctAnswer = 3;
        time = 20;
        button4.style.fontSize = "2em"
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "0";
        button2.innerHTML = "1"
        button3.innerHTML = "2";
        button4.innerHTML = "3";
    }
    if (questionNum == 41) {
        question.innerHTML = "Who is Shamgars (from the bible) father?"
        image.src = "shamgar.jpg";
        correctAnswer = 1;
        time = 20;
        button4.style.fontSize = "2em"
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Anath";
        button2.innerHTML = "David"
        button3.innerHTML = "Dominik";
        button4.innerHTML = "Isreal";
    }
    if (questionNum == 42) {
        question.innerHTML = "Who did Valentino kick 'accidentally' 9:05 AM 2026-08-25"
        image.src = "valentino.png";
        correctAnswer = 2;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Ethan";
        button2.innerHTML = "Emmett"
        button3.innerHTML = "Dominik";
        button4.innerHTML = "James";
    }
    if (questionNum == 43) {
        question.innerHTML = "Is it pronounced gif or jif?"
        image.src = "santa.jpg";
        correctAnswer = 2;
        time = 20;
        button4.style.fontSize = "1.5em"
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "ITS JIF";
        button2.innerHTML = "ITS GIF"
        button3.innerHTML = "The answer is purely subjective!";
        button4.innerHTML = "Green answer is a nerd. I'm not the answer btw.";
    }
    if (questionNum == 44) {
        question.innerHTML = "What was the last image?"
        image.src = "nothing.png";
        correctAnswer = 1;
        time = 20;
        button4.style.fontSize = "2em"
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Santa";
        button2.innerHTML = "Satan"
        button3.innerHTML = "A deer";
        button4.innerHTML = "Christmas Tree";
    }
    if (questionNum == 45) {
        question.innerHTML = "What was James eating on  2026-08-25 for lunch?"
        image.src = "nothing.png";
        correctAnswer = 4;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Burger";
        button2.innerHTML = "Mars"
        button3.innerHTML = "This";
        button4.innerHTML = "Fried Chicken";
    }
    if (questionNum == 46) {
        question.innerHTML = "What isn't my name?"
        image.src = "nothing.png";
        correctAnswer = 4;
        time = 20;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "Dombomb";
        button2.innerHTML = "Dominik"
        button3.innerHTML = "The Dominator";
        button4.innerHTML = "Bob";
    }
    if (questionNum == 47) {
        question.innerHTML = "LAST QUESTION! QUICK! WHAT'S 1 + 0?"
        image.src = "two.jpg";
        correctAnswer = 4;
        time = 3;
        correctAnswerElement = document.getElementById('answer' + correctAnswer);
        button1.innerHTML = "2";
        button2.innerHTML = "I"
        button3.innerHTML = "J";
        button4.innerHTML = "1";
    }
    if (questionNum == 48) {
        window.location.href = "results.html?score=${" + score + "}";
    }
    startTimer();
}

button1.addEventListener('click', function() {
    if (answerable == 1) {
        selectedAnswer = 1;
        showAnswer(selectedAnswer);
    }
});
button2.addEventListener('click', function() {
    if (answerable == 1) {
        selectedAnswer = 2;
        showAnswer(selectedAnswer);
    }
});
button3.addEventListener('click', function() {
    if (answerable == 1) {    
        selectedAnswer = 3;
        showAnswer(selectedAnswer);
    }
});
button4.addEventListener('click', function() {
    if (answerable == 1) {
        selectedAnswer = 4;
        showAnswer(selectedAnswer);
    }
});

startTimer(time);
