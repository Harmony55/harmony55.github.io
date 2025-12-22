const questions = [
    "J'ai du mal à accepter ma linéarité",
    "Je me sens parfois en retard sur moi-même",
    "Le silence me rassure plus que les mots",
    "J'avance sans savoir si je recule",
    "Je confonds souvent choix et nécessité",
    "Ce que je fuis me définit",
    "Je ne sais pas ce que j'attends",
    "J'ai appris à continuer sans comprendre",
    "Je fais semblant d'être entier",
    "Il reste quelque chose à terminer"
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