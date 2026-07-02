const language = localStorage.getItem("language");
document.getElementById("languageText").innerHTML = language || "English";
document.getElementById("pageTitle").innerText = t("📅 Next Appointment");
const quotes = [
    "Every day is a new beginning.",
    "You are stronger than you think.",
    "Take one step at a time.",
    "Your mental health matters.",
    "Progress, not perfection.",
    "Believe in yourself.",
    "It's okay to ask for help."
];

const random = Math.floor(Math.random()*quotes.length);
document.getElementById("quote").innerHTML = quotes[random];
