document.getElementById("sosBtn").onclick = function(){
    alert(
        "Emergency Alert Activated!\n\n" +
        "• Contacting emergency support...\n" +
        "• Notifying your emergency contact...\n" +
        "• Sharing your location..."
    );
    window.location.href="tel:999";
};

const buttons = document.querySelectorAll(".call-btn");
buttons.forEach(button=>{
    button.onclick=function(){
        alert("This feature would connect to the selected emergency service.");
    }
});