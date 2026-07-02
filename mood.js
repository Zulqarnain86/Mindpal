let score = 3;
const moods = document.querySelectorAll(".mood-btn");
const recommendation = document.getElementById("recommendText");

moods.forEach(mood => {
    mood.onclick = function(){
        moods.forEach(m=>m.classList.remove("selectedMood"));
        this.classList.add("selectedMood");
        score=this.dataset.score;

        switch(score){
            case "5":
                recommendation.innerHTML="Excellent! Keep maintaining your healthy habits and continue spreading positivity.";
                break;
            case "4":
                recommendation.innerHTML="You're doing well today. Take some time to relax and enjoy activities you love.";
                break;
            case "3":
                recommendation.innerHTML="Consider taking a short walk, practising deep breathing, or talking to someone you trust.";
                break;
            case "2":
                recommendation.innerHTML="It's okay to feel down. Try meditation or schedule a counselling session if you need support.";
                break;
            case "1":
                recommendation.innerHTML="You are not alone. Please consider contacting a counsellor or using the Emergency Support feature.";
                break;
        }
    }
});

document.getElementById("saveMood").onclick=function(){
    alert("✅ Today's mood has been saved.");
}

const ctx=document.getElementById("moodChart");
new Chart(ctx,{
    type:"line",
    data:{
        labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        datasets:[{
            label:"Mood Score",
            data:[4,5,3,4,2,4,5],
            borderColor:"#18B4B2",
            backgroundColor:"rgba(24,180,178,.2)",
            fill:true,
            tension:.4
        }]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{display:false}
        },
        scales:{
            y:{
                min:1,
                max:5
            }
        }
    }
});