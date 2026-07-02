document.getElementById("bookBtn").onclick=function(){
    const doctor=document.getElementById("counsellor").value;
    const date=document.getElementById("date").value;
    const time=document.getElementById("time").value;
    const consultationType=document.getElementById("consultationType").value;

    if(date==""){
        alert("Please select a date.");
        return;
    }

    alert(
        "✅ Appointment Confirmed!\n\n"+
        "Counsellor: "+doctor+
        "\nDate: "+date+
        "\nTime: "+time+
        "\nType: "+consultationType
    );

    window.location.href="confirmation.html";
}