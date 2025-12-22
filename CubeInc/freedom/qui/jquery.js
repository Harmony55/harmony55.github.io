const questions = [
    "Je confonds choix et nécessité",
    "Le silence est plus rassurant que les mots ou que le nom",
    "Je me sens en retard",
    "Je me déplace sans savoir vers où",
    "Je suis définie par ce que je fuis",
    "J'attends Godot",
    "J'ai appris à procéder sans comprendre",
    "Je feins la complétude",
    "L'antitransitivité me définit",
    "J'ai du mal à accepter ma linéarité"
];

const answers = [
    "D'accord",
    "Sans avis",
    "Pas d'accord"
];

let current = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");

function showQuestion() {
    questionEl.textContent = questions[current];
    choicesEl.innerHTML = "";

    answers.forEach(answer => {
        const div = document.createElement("div");
        div.className = "choice";
        div.textContent = answer;
        div.onclick = nextQuestion;
        choicesEl.appendChild(div);
    });
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        endScreen();
    }
}

function endScreen() {
    questionEl.textContent = "Tu t'es servi de tout ce qu'il y avais ici bas";
    choicesEl.innerHTML = "";
}

showQuestion();