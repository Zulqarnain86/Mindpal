const controls = document.querySelectorAll(".control");

controls.forEach(button=>{
    button.addEventListener("click",()=>{
        button.classList.toggle("active");
    });
});

document.querySelector(".end-call").onclick=function(){
    if(confirm("End counselling session?")){
        window.location.href="home.html";
    }
}