const params = new URLSearchParams(window.location.search);
const result = document.getElementsByClassName('result')
let score = params.get("score").replace(/[\$\{\}]/g, "");
let percentage = Math.round(score / 47 * 100);
let percentageElement = document.getElementById('percentage');
let questionsRightElement = document.getElementById('questionsRight');

percentageElement.innerHTML = percentage + "%";
questionsRightElement.innerHTML = score + "/47";

if (percentage == 100) {
    document.body.style.backgroundImage = "url('stier.png')";
    percentageElement.style.color = "#a6009b";
    questionsRightElement.style.color = "#a6009b";
} else if (percentage >= 90) {
    document.body.style.backgroundImage = "url('atier.png')";
        percentageElement.style.color = "#05ff00";
        questionsRightElement.style.color = "#05ff00";
} else if (percentage >= 75) {
    document.body.style.backgroundImage = "url('btier.png')";
        percentageElement.style.color = "#00058a";
        questionsRightElement.style.color = "#00058a";
} else if (percentage >= 60) {
    document.body.style.backgroundImage = "url('ctier.png')";
        percentageElement.style.color = "#fff500";
        questionsRightElement.style.color = "#fff500";
} else if (percentage >= 45) {
    document.body.style.backgroundImage = "url('dtier.png')";
        percentageElement.style.color = "#00fff7";
        questionsRightElement.style.color = "#00fff7";
} else if (percentage >= 30) {
    document.body.style.backgroundImage = "url('etier.png')";
        percentageElement.style.color = "#ff7300";
        questionsRightElement.style.color = "#ff7300";
} else if (percentage <= 30 && percentage != 0) {
    document.body.style.backgroundImage = "url('ftier.png')";
        percentageElement.style.color = "#ff0000";
        questionsRightElement.style.color = "#ff0000";
} else if (percentage == 0) {
    document.body.style.backgroundImage = "url('ztier.png')";
        percentageElement.style.color = "#171717";
        questionsRightElement.style.color = "#171717";
}

