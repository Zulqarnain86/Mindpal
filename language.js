const buttons = document.querySelectorAll(".language-btn");
buttons.forEach(button => {
    button.addEventListener("click", function(){
        buttons.forEach(btn => btn.classList.remove("selected"));
        this.classList.add("selected");
        localStorage.setItem("language", this.innerText);
    });
});
document.getElementById("continueBtn").addEventListener("click", function(){
    window.location.href="home.html";
});